import { useCallback, useState } from 'react';

import { useLocation, useModel, useNavigate } from '@umijs/max';

import { loginWithUsername } from '@/hooks';
import { Button, Form, Input, Modal } from '@/metronic';
import qs from 'query-string';
import { sleep } from '@/utils';

function Aside() {
  return (
    <div
      className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
      style={{ backgroundColor: '#F2C98A' }}
    >
      {/* --begin::Wrapper--*/}
      <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
        {/* --begin::Content--*/}
        <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
          {/* --begin::Logo--*/}
          <a href="../../demo7/dist/index.html" className="py-9 mb-5">
            <img
              alt="Logo"
              src={`${__webpack_public_path__}assets/media/logos/logo-2.svg`}
              className="h-60px"
            />
          </a>
          {/* --end::Logo--*/}
          {/* --begin::Title--*/}
          <h1
            className="fw-bolder fs-2qx pb-5 pb-md-10"
            style={{ color: '#986923' }}
          >
            欢迎使用 榫卯
          </h1>
          {/* --end::Title--*/}
          {/* --begin::Description--*/}
          <p className="fw-bold fs-2" style={{ color: '#986923' }}>
            <br />
          </p>
          {/* --end::Description--*/}
        </div>
        {/* --end::Content--*/}
        {/* --begin::Illustration--*/}
        <div
          className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
          style={{
            backgroundImage: `url(${__webpack_public_path__}assets/media/illustrations/sigma-1/13.png`,
          }}
        />
        {/* --end::Illustration--*/}
      </div>
      {/* --end::Wrapper--*/}
    </div>
  );
}

function Footer() {
  return (
    <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
      {/* --begin::Links--*/}
      <div className="d-flex flex-center fw-bold fs-6">
        <a
          href="https://keenthemes.com"
          className="text-muted text-hover-primary px-2"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a
          href="https://keenthemes.com/support"
          className="text-muted text-hover-primary px-2"
          target="_blank"
          rel="noreferrer"
        >
          Support
        </a>
        <a
          href="https://1.envato.market/EA4JP"
          className="text-muted text-hover-primary px-2"
          target="_blank"
          rel="noreferrer"
        >
          Purchase
        </a>
      </div>
      {/* --end::Links--*/}
    </div>
  );
}

function SignInForm() {
  const [loading, setLoading] = useState(false);
  const { refresh } = useModel('@@initialState');

  const location = useLocation();
  const navigate = useNavigate();

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
    [refresh],
  );

  return (
    <Form
      className="w-100"
      initialValues={{ username: 'admin', password: '12345678' }}
      onFinish={handleSignIn}
      autoComplete="off"
    >
      {/* --begin::Heading--*/}
      <div className="text-center mb-10">
        {/* --begin::Title--*/}
        <h1 className="text-dark mb-3">登录到榫卯</h1>
        {/* --end::Title--*/}
        {/* --begin::Link--*/}
        <div className="text-gray-400 fw-bold fs-4">
          没有帐号？
          <a
            href="../../demo7/dist/authentication/flows/aside/sign-up.html"
            className="link-primary fw-bolder"
          >
            注册帐户
          </a>
        </div>
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
          className="w-100 mb-5"
        >
          {loading ? 'Please wait...' : '登录'}
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

function SignIn() {
  return (
    <div
      style={{ backgroundColor: '#fff' }}
      className="d-flex flex-column flex-lg-row flex-column-fluid"
    >
      <Aside />
      <div className="d-flex flex-column flex-lg-row-fluid py-10">
        {/* --begin::Content--*/}
        <div className="d-flex flex-center flex-column flex-column-fluid">
          {/* --begin::Wrapper--*/}
          <div className="w-lg-500px p-10 p-lg-15 mx-auto">
            <SignInForm />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SignIn;
