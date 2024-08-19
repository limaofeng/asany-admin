import { useEffect } from 'react';

import { SignInLayoutProps } from '../typings';

function CreativeSignIn(props: SignInLayoutProps) {
  const { title, children, logo } = props;

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.style.backgroundImage =
        "url('/assets/media/auth/bg4-dark.jpg')";
    } else {
      document.body.style.backgroundImage = "url('/assets/media/auth/bg4.jpg')";
    }
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-root">
      {/*--begin::Page bg image--*/}
      {/* <style>body { background-image: url('assets/media/auth/bg4.jpg'); } [data-bs-theme="dark"] body { background-image: url('assets/media/auth/bg4-dark.jpg'); }</style> */}
      {/*--end::Page bg image--*/}
      {/*--begin::Authentication - Sign-in --*/}
      <div className="d-flex flex-column flex-column-fluid flex-lg-row">
        {/*--begin::Aside--*/}
        <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
          {/*--begin::Aside--*/}
          <div className="d-flex flex-center flex-lg-start flex-column">
            {/*--begin::Logo--*/}
            <a className="mb-7">
              <img alt="Logo" src={logo} />
            </a>
            {/*--end::Logo--*/}
            {/*--begin::Title--*/}
            <h2 className="text-white fw-normal m-0">{title}</h2>
            {/*--end::Title--*/}
          </div>
          {/*--begin::Aside--*/}
        </div>
        {/*--begin::Aside--*/}
        {/*--begin::Body--*/}
        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
          {/*--begin::Card--*/}
          <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
            {/*--begin::Wrapper--*/}
            <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
              {/*--begin::Form--*/}
              {children}
              {/*--end::Form--*/}
            </div>
            {/*--end::Wrapper--*/}
            {/*--begin::Footer--*/}
            <div className="d-flex flex-stack px-lg-10">
              {/*--begin::Languages--*/}
              <div className="me-0"></div>
              {/*--end::Languages--*/}
              {/*--begin::Links
              <div className="d-flex fw-semibold text-primary fs-base gap-5">
                <a href="pages/team.html" target="_blank">
                  Terms
                </a>
                <a href="pages/pricing/column.html" target="_blank">
                  Plans
                </a>
                <a href="pages/contact.html" target="_blank">
                  Contact Us
                </a>
              </div>
              --*/}
              {/*--end::Links--*/}
            </div>
            {/*--end::Footer--*/}
          </div>
          {/*--end::Card--*/}
        </div>
        {/*--end::Body--*/}
      </div>
      {/*--end::Authentication - Sign-in--*/}
    </div>
  );
}

export default CreativeSignIn;
