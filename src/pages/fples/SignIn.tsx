import { useCallback, useState } from 'react';

import { useHistory } from 'react-router';
import { useModel } from 'umi';
import classnames from 'classnames';

import { loadCurrentuser, loginWithUsername } from '@/hooks';
import { Button, Form, Input, Modal } from '@/metronic';

function Login() {
  const history = useHistory();
  const { setInitialState } = useModel('@@initialState');
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(
    async (values: any) => {
      const licence = atob(values.licence);
      const [username, password] = licence.split('/');
      setLoading(true);
      try {
        let user = await loginWithUsername(username, password);
        user = await loadCurrentuser();
        await Modal.success({
          content: '授权成功!',
          okText: '知道了',
          timer: 1600,
          timerProgressBar: true,
        });
        await setInitialState((s) => ({
          ...s,
          currentUser: user,
        }));
        // const { query } = history.location as any;
        // const { redirect } = query as { redirect: string };
        history.replace('/');
      } catch (e) {
        await Modal.error({
          content: '出错了, 请检查错误后，请重试.',
          okText: '知道了',
        });
      } finally {
        setLoading(false);
      }
    },
    [history, setInitialState],
  );
  // ADMIN: YWRtaW4vMTIzNDU2Nzg=
  // USER: dXNlci8xMjM0NTY3OA==
  return (
    <div className="page-fples-sigin">
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
        <div className="w-lg-500px p-10">
          <h1 className="text-dark fw-bolder mb-3 title">注册设备</h1>
          <Form
            className="w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            onFinish={handleSignIn}
            autoComplete="off"
            initialValues={{
              licence: 'dXNlci8xMjM0NTY3OA==',
            }}
          >
            <Form.Item
              name="licence"
              label="授权码"
              rules={[
                {
                  required: true,
                  message: '授权码必填',
                },
              ]}
            >
              <Input size="lg" />
            </Form.Item>

            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
              {/* <a href="#" className="link-primary">
                Forgot Password ?
              </a> */}
            </div>
            <div className="text-center">
              <Button
                htmlType="submit"
                size="lg"
                loading={loading}
                className={classnames('w-100 mb-5', { loading: loading })}
              >
                {loading ? 'Please wait...' : <>&nbsp;授权</>}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
