import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { sleep } from '@asany/sunmao';
import { useModel } from '@umijs/max';
import qs from 'query-string';

import { useLogin } from '@/hooks';
import { Button, Form, Input, Modal } from '@/metronic';

function SignInForm() {
  const [loading, setLoading] = useState(false);
  const { refresh } = useModel('@@initialState');

  const form = Form.useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const { loginWithUsername } = useLogin();

  useEffect(() => {
    const dataValues = localStorage.getItem('remember');
    if (!dataValues) {
      return () => {};
    }
    const [username, password] = dataValues.split('###');
    form.setFieldsValue({ username, password });
  }, []);

  const handleSignIn = useCallback(
    async (values: any) => {
      setLoading(true);
      try {
        await loginWithUsername(values.username, values.password);
        await Modal.success({
          content: '登录成功!',
          okText: '知道了',
          timer: 1600,
          timerProgressBar: true,
        });
        await refresh();
        const query = qs.parse(location.search) as { redirect?: string };
        await sleep(120);
        localStorage.setItem(
          'remember',
          values.username + '###' + values.password,
        );
        navigate(query.redirect || '/', { replace: true });
      } catch (e) {
        console.error(e);
        await Modal.error({
          content: '出错了, 请检查错误后，请重试.',
          okText: '知道了',
        });
      } finally {
        setLoading(false);
      }
    },
    [refresh, loginWithUsername],
  );

  return (
    <Form
      className="w-100"
      onFinish={handleSignIn}
      form={form}
      autoComplete="off"
    >
      {/* --begin::Heading--*/}
      <div className="text-center mb-10">
        {/* --begin::Title--*/}
        <h1 className="text-dark mb-3">登录</h1>
        {/* --end::Title--*/}
        {/* --begin::Link--*/}
        {/* <div className="text-gray-400 fw-bold fs-4">
          没有帐号？
          <a
            href="../../demo7/dist/authentication/flows/aside/sign-up.html"
            className="link-primary fw-bolder"
          >
            注册帐户
          </a>
        </div> */}
        {/* --end::Link--*/}
      </div>
      {/* --begin::Heading--*/}
      <Form.Item
        name="username"
        className="mb-10"
        labelClassName="fs-6 fw-bolder text-dark"
        label="账号"
      >
        <Input size="lg" solid />
      </Form.Item>
      <Form.Item
        name="password"
        className="mb-10"
        labelClassName="fs-6 fw-bolder text-dark"
        label="密码"
      >
        <Input.Password size="lg" solid />
      </Form.Item>
      {/* --begin::Actions--*/}
      <div className="text-center">
        {/* --begin::Submit button--*/}
        <Button
          htmlType="submit"
          size="lg"
          loading={loading}
          full
          className="w-100 mb-5"
        >
          {loading ? '登录中...' : '登录'}
        </Button>
        {/** TODO: 其他方式登录
          <div className="text-center text-muted text-uppercase fw-bolder mb-5">其他方式登录</div>
          <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
            <img
              alt="Logo"
              src={`${__webpack_public_path__}assets/media/svg/brand-logos/github-1.svg`}
              className="h-20px me-3"
            />
            GitHub
          </a>
           */}
      </div>
    </Form>
  );
}

export default SignInForm;
