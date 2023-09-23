import { useCallback, useState } from 'react';

import { useHistory } from 'react-router';
import { useModel } from 'umi';
import classnames from 'classnames';

import { loadCurrentuser, loginWithUsername } from '@/hooks';
import { Button, Modal } from '@/metronic';

function Login() {
  const history = useHistory();
  const { setInitialState } = useModel('@@initialState');
  const [loading, setLoading] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

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
        console.log('user', user);
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

  const handleAdminSignIn = useCallback(async () => {
    setAdminLoading(true);
    try {
      await handleSignIn({
        licence: 'YWRtaW4vMTIzNDU2Nzg=',
      });
    } finally {
      setAdminLoading(false);
    }
  }, [handleSignIn]);

  const handleUserSignIn = useCallback(async () => {
    setUserLoading(true);
    try {
      await handleSignIn({
        licence: 'dXNlci8xMjM0NTY3OA==',
      });
    } finally {
      setUserLoading(false);
    }
  }, [handleSignIn]);

  return (
    <div className="page-fples-sigin">
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
        <h1 className="text-dark fw-bolder mb-12 title">EES 看板　Monitor（测试）</h1>
        <div className="p-10 form-container">
          {/*
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
        */}
          <Button
            size="lg"
            loading={adminLoading}
            onClick={handleAdminSignIn}
            className={classnames('w-100 mb-12', { loading: loading })}
          >
            {adminLoading ? '认证中...' : <>&nbsp;管理登录</>}
          </Button>
          <Button
            size="lg"
            loading={userLoading}
            onClick={handleUserSignIn}
            className={classnames('w-100 mb-12', { loading: loading })}
          >
            {userLoading ? '认证中...' : <>&nbsp;设备登录</>}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
