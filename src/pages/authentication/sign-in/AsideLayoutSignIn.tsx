import SignInForm from './SignInForm';

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
          href="#"
          className="text-muted text-hover-primary px-2"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a
          href="#"
          className="text-muted text-hover-primary px-2"
          target="_blank"
          rel="noreferrer"
        >
          Support
        </a>
        <a
          href="#"
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
