import { useEffect } from 'react';

import { SignInLayoutProps } from '../typings';

function SignIn(props: SignInLayoutProps) {
  const { title, children } = props;

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.style.backgroundImage =
        "url('/assets/media/auth/bg10-dark.jpeg')";
    } else {
      document.body.style.backgroundImage =
        "url('/assets/media/auth/bg10.jpeg')";
    }
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="d-flex flex-column flex-root">
      {/*--begin::Authentication - Sign-in --*/}
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        {/*--begin::Aside--*/}
        <div className="d-flex flex-lg-row-fluid">
          {/*--begin::Content--*/}
          <div className="d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100">
            {/*--begin::Image--*/}
            <img
              className="theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
              src="assets/media/auth/agency.png"
              alt=""
            />
            <img
              className="theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20"
              src="assets/media/auth/agency-dark.png"
              alt=""
            />
            {/*--end::Image--*/}
            {/*--begin::Title--*/}
            <h1 className="text-gray-800 fs-2qx fw-bold text-center mb-7">
              {title}
            </h1>
            {/*--end::Title--*/}
            {/*--begin::Text--*/}
            <div className="text-gray-600 fs-base text-center fw-semibold">
              In this kind of post,
              <a href="#" className="opacity-75-hover text-primary me-1">
                the blogger
              </a>
              introduces a person they’ve interviewed
              <br />
              and provides some background information about
              <a href="#" className="opacity-75-hover text-primary me-1">
                the interviewee
              </a>
              and their
              <br />
              work following this is a transcript of the interview.
            </div>
            {/*--end::Text--*/}
          </div>
          {/*--end::Content--*/}
        </div>
        {/*--begin::Aside--*/}
        {/*--begin::Body--*/}
        <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12">
          {/*--begin::Wrapper--*/}
          <div className="bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10">
            {/*--begin::Content--*/}
            <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
                {/*--begin::Form--*/}
                {children}
                {/*--end::Form--*/}
              </div>
              {/*--end::Wrapper--*/}
              {/*--begin::Footer--*/}
              <div className="d-flex flex-stack">
                {/*--begin::Languages
								<div className="me-10">
									<button className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" data-kt-menu-offset="0px, 0px">
										<img data-kt-element="current-lang-flag" className="w-20px h-20px rounded me-3" src="assets/media/flags/united-states.svg" alt="" />
										<span data-kt-element="current-lang-name" className="me-1">English</span>
										<i className="ki-duotone ki-down fs-5 text-muted rotate-180 m-0"></i>
									</button>
								</div>
                                --*/}
                {/*--end::Languages--*/}
                {/*--begin::Links
								<div className="d-flex fw-semibold text-primary fs-base gap-5">
									<a href="pages/team.html" target="_blank">Terms</a>
									<a href="pages/pricing/column.html" target="_blank">Plans</a>
									<a href="pages/contact.html" target="_blank">Contact Us</a>
								</div>
                                --*/}
                {/*--end::Links--*/}
              </div>
              {/*--end::Footer--*/}
            </div>
            {/*--end::Content--*/}
          </div>
          {/*--end::Wrapper--*/}
        </div>
        {/*--end::Body--*/}
      </div>
      {/*--end::Authentication - Sign-in--*/}
    </div>
  );
}

export default SignIn;
