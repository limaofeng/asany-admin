import { useCallback, useEffect, useReducer, useRef } from 'react';

import saveAs from 'file-saver';
import type { RouteComponentProps } from 'react-router';

import type { XtermComponentRef } from './XtermComponent';
import XtermComponent from './XtermComponent';
import {
  useCreateScreenMutation,
  useGetClientIpLazyQuery,
  useGetScreenForIpLazyQuery,
  usePingLazyQuery,
} from './hooks';

import { useCurrentuser } from '@/utils/hooks';
import { sleep } from '@/utils';
import { Button } from '@/metronic';

function generateErrorLogFileName() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1
  const day = currentDate.getDate().toString().padStart(2, '0');
  const fileName = `error-log-${year}-${month}-${day}.log`;
  return fileName;
}

type DefaultViewProps = RouteComponentProps<any>;

function DefaultView(props: DefaultViewProps) {
  const { history } = props;

  const term = useRef<XtermComponentRef>(null);
  const stateRef = useRef({ error: '' });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const { data: user } = useCurrentuser();

  const [ping] = usePingLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [getClientIp] = useGetClientIpLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [getScreenForIp] = useGetScreenForIpLazyQuery({
    fetchPolicy: 'network-only',
  });

  const [createScreen] = useCreateScreenMutation();

  const runTask = useCallback(async () => {
    try {
      term.current?.write('**************************');
      term.current?.write('*     服务器地址信息     *');
      term.current?.write('***************************');
      // term.current?.write("\x1b[38;2;255;0;0m这段文本的颜色是红色\x1b[0m")
      term.current?.write('APOLLO_URL: ' + process.env.APOLLO_URL);
      term.current?.write('APOLLO_WS: ' + process.env.APOLLO_WS);

      term.current?.write('\r\n');
      term.current?.write('开始测试服务器连接速度...');
      for (let i = 0; i < 5; i++) {
        const startTime = performance.now();
        const pingResult = await ping();
        if (pingResult.error) {
          throw pingResult.error;
        }
        const endTime = performance.now(); // 记录测试结束时间
        const latency = endTime - startTime; // 计算连接延迟
        term.current?.write(`连接延迟为 ${latency.toFixed(2)} 毫秒`);
      }

      term.current?.write('\r\n');
      term.current?.write('获取客户端 IP ...');
      const startTime = performance.now();
      const ipResult = await getClientIp();
      if (ipResult.error) {
        throw ipResult.error;
      }
      const endTime = performance.now(); // 记录测试结束时间
      const latency = endTime - startTime; // 计算连接延迟
      term.current?.write(`获取客户端IP, 耗时${latency.toFixed(2)} 毫秒`);
      term.current?.write('IP = ' + ipResult.data?.getClientIp);
      const ip = ipResult.data?.getClientIp || '127.0.0.1';

      term.current?.write('\r\n');
      term.current?.write('检测屏幕(' + ip + ')设置...');
      const screenResult = await getScreenForIp({
        variables: {
          ip,
        },
      });
      if (screenResult.error) {
        throw screenResult.error;
      }
      let screen = screenResult.data?.getScreenForIp;
      if (!screen) {
        term.current?.write('\x1b[38;2;255;0;0m未发现屏幕设置\x1b[0m');

        term.current?.write('\r\n');
        term.current?.write('开始注册该设备...');
        const createScreenResult = await createScreen({
          variables: {
            input: {},
          },
        });
        term.current?.write('设备支持成功');
        await sleep(2000);
        term.current?.write('\r\n');
        term.current?.write('导航到目标程序...');
        screen = createScreenResult.data?.createScreen;
        console.log(createScreenResult);
      } else {
        term.current?.write('发现屏幕设置, 开始导航到目标程序...');
      }
      await sleep(2000);
      history.push(`/screens/${screen?.id}`);
    } catch (e: any) {
      term.current?.write('\r\n');
      term.current?.write('\x1b[38;2;255;0;0m出现异常, 详细的错误信息如下:\x1b[0m');
      const stackTrace = e.stack || e.toString();
      term.current?.write(`\x1b[38;2;255;0;0m${stackTrace}\x1b[0m`);
      await sleep(5000);
      stateRef.current.error = stackTrace;
      forceRender();
    }
    // console.log(client, term.current, process.env.APOLLO_URL, process.env.APOLLO_WS);
  }, [createScreen, getClientIp, getScreenForIp, ping, history]);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (user.type === 'ADMIN') {
      history.push(`/screens`);
    } else {
      runTask();
    }
  }, [runTask, history, user]);

  const restart = useCallback(() => {
    stateRef.current.error = '';
    term.current?.clear();
    forceRender();
    runTask();
  }, [runTask]);
  const downloadErrorLogs = useCallback(() => {
    const blob = new Blob([stateRef.current.error], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, generateErrorLogFileName());
  }, []);

  console.log(user);

  return (
    <div className="page-checkin">
      {stateRef.current.error && (
        <div className="controls">
          <Button className="ms-4" size="lg" color="light-dark" variant="dark" onClick={restart}>
            重新运行检测
          </Button>
          <Button
            className="ms-4"
            size="lg"
            color="light-dark"
            variant="dark"
            onClick={downloadErrorLogs}
          >
            下载错误日志
          </Button>
        </div>
      )}
      <XtermComponent ref={term} />
    </div>
  );
}

export default DefaultView;
