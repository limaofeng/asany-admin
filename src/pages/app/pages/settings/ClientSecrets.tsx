import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';
import moment from 'moment';
import type { RouteComponentProps } from 'react-router';
import { useCopyToClipboard } from 'react-use';

import { useAppWithClientSecretQuery } from '../../hooks/api';

import { ContentWrapper } from '@/layouts/components';
import { Card, Form, Toast, Tooltip } from '@/metronic';
import type { Application, ClientSecret } from '@/types';

type ClientSecretsProps = RouteComponentProps<
  { cid: string; id: string },
  any,
  { app: Application; baseUrl: string }
>;

type ClientSecretItemProps = {
  data: ClientSecret;
};

function ClientSecretItem(props: ClientSecretItemProps) {
  const { data } = props;

  return (
    <li className="client-secret-item p-5 border-bottom border-secondary d-flex flex-row">
      <div className="d-flex flex-column w-90px flex-stack">
        <Icon
          style={{ transform: 'rotate(45deg)' }}
          className="svg-icon-2hx"
          name="Bootstrap/key"
        />
        <span className="text-small fw-bold border border-1 text-muted px-3 rounded-pill text-gray-600">
          客户端密钥
        </span>
      </div>
      <div className="d-flex flex-column ps-4">
        <span className="text-small text-dark">{data.secret}</span>
        <span>
          由 <strong>{data.createdBy || '系统'}</strong> {moment(data.createdAt).fromNow()} 添加
        </span>
        <div className="text-small text-muted">
          {data.lastUseTime ? <>{moment(data.lastUseTime).fromNow()} 使用过</> : '从未使用过'}
        </div>
      </div>
    </li>
  );
}

function ClientSecrets(props: ClientSecretsProps) {
  const {
    location: {
      state: {
        app: { id: appId },
        // baseUrl,
      },
    },
  } = props;

  const timer = useRef<any>();

  const [copied, setCopied] = useState(false);

  const { data, loading } = useAppWithClientSecretQuery({
    variables: {
      id: appId,
    },
  });

  const app = useMemo(() => data?.app, [data]);

  const form = Form.useForm();

  console.log('data', data, form);
  const [, copy] = useCopyToClipboard();

  const handleCopy = useCallback(() => {
    app?.clientId && copy(app.clientId);
    Toast.info('客户端ID 已经复制', 3000, {
      placement: 'top-center',
    });
    timer.current && clearTimeout(timer.current);
    setCopied(true);
    timer.current = setTimeout(() => {
      setCopied(false);
      timer.current = null;
    }, 3000);
  }, [app?.clientId, copy]);

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, []);

  const clientSecrets = useMemo(() => app?.clientSecrets || [], [app]);

  return (
    <ContentWrapper loading={loading}>
      {app && (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Header>
              <Card.Title>开发信息</Card.Title>
            </Card.Header>
            <Card.Body>
              <h3 className="fw-bolder mb-5">客户端ID</h3>
              <div>
                <div className="d-flex align-items-center">
                  {app.clientId}
                  <Tooltip title="点击复制客户端ID">
                    <Icon
                      onClick={handleCopy}
                      className={classnames('ms-2 svg-icon-4 cursor-pointer', {
                        'text-success': !copied,
                        'text-primary': copied,
                      })}
                      name={`Bootstrap/clipboard${copied ? '-check' : ''}`}
                    />
                  </Tooltip>
                </div>
                <div className="text-muted fs-7">当前也可作为 AppId 使用</div>
              </div>
              <div className="py-10">
                <h3 className="fw-bolder mb-5">客户端密钥</h3>
                <ul className="w-800px rounded border border-secondary">
                  {clientSecrets.map((item) => (
                    <ClientSecretItem key={item.id} data={item as any} />
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default ClientSecrets;
