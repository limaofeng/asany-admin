function BackUP() {
  return (
    <>
      {/*--end::Basic info--*/}
      {/*--begin::Sign-in Method--*/}
      <div className="card mb-5 mb-xl-10">
        {/*--begin::Card header--*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_signin_method"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Sign-in Method</h3>
          </div>
        </div>
        {/*--end::Card header--*/}
        {/*--begin::Content--*/}
        <div id="kt_account_settings_signin_method" className="collapse show">
          {/*--begin::Card body--*/}
          <div className="card-body border-top p-9">
            {/*--begin::Email Address--*/}
            <div className="d-flex flex-wrap align-items-center">
              {/*--begin::Label--*/}
              <div id="kt_signin_email">
                <div className="fs-6 fw-bolder mb-1">Email Address</div>
                <div className="fw-bold text-gray-600">
                  support@keenthemes.com
                </div>
              </div>
              {/*--end::Label--*/}
              {/*--begin::Edit--*/}
              <div id="kt_signin_email_edit" className="flex-row-fluid d-none">
                {/*--begin::Form--*/}
                <form id="kt_signin_change_email" className="form" noValidate>
                  <div className="row mb-6">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="emailaddress"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Enter New Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-solid"
                          id="emailaddress"
                          placeholder="Email Address"
                          name="emailaddress"
                          value="support@keenthemes.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="confirmemailpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="confirmemailpassword"
                          id="confirmemailpassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button
                      id="kt_signin_submit"
                      type="button"
                      className="btn btn-primary me-2 px-6"
                    >
                      Update Email
                    </button>
                    <button
                      id="kt_signin_cancel"
                      type="button"
                      className="btn btn-color-gray-400 btn-active-light-primary px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {/*--end::Form--*/}
              </div>
              {/*--end::Edit--*/}
              {/*--begin::Action--*/}
              <div id="kt_signin_email_button" className="ms-auto">
                <button className="btn btn-light btn-active-light-primary">
                  Change Email
                </button>
              </div>
              {/*--end::Action--*/}
            </div>
            {/*--end::Email Address--*/}
            {/*--begin::Separator--*/}
            <div className="separator separator-dashed my-6" />
            {/*--end::Separator--*/}
            {/*--begin::Password--*/}
            <div className="d-flex flex-wrap align-items-center mb-10">
              {/*--begin::Label--*/}
              <div id="kt_signin_password">
                <div className="fs-6 fw-bolder mb-1">Password</div>
                <div className="fw-bold text-gray-600">************</div>
              </div>
              {/*--end::Label--*/}
              {/*--begin::Edit--*/}
              <div
                id="kt_signin_password_edit"
                className="flex-row-fluid d-none"
              >
                {/*--begin::Form--*/}
                <form
                  id="kt_signin_change_password"
                  className="form"
                  noValidate
                >
                  <div className="row mb-1">
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="currentpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="currentpassword"
                          id="currentpassword"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="newpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="newpassword"
                          id="newpassword"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label
                          htmlFor="confirmpassword"
                          className="form-label fs-6 fw-bolder mb-3"
                        >
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg form-control-solid"
                          name="confirmpassword"
                          id="confirmpassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-text mb-5">
                    Password must be at least 8 character and contain symbols
                  </div>
                  <div className="d-flex">
                    <button
                      id="kt_password_submit"
                      type="button"
                      className="btn btn-primary me-2 px-6"
                    >
                      Update Password
                    </button>
                    <button
                      id="kt_password_cancel"
                      type="button"
                      className="btn btn-color-gray-400 btn-active-light-primary px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {/*--end::Form--*/}
              </div>
              {/*--end::Edit--*/}
              {/*--begin::Action--*/}
              <div id="kt_signin_password_button" className="ms-auto">
                <button className="btn btn-light btn-active-light-primary">
                  Reset Password
                </button>
              </div>
              {/*--end::Action--*/}
            </div>
            {/*--end::Password--*/}
            {/*--begin::Notice--*/}
            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
              {/*--begin::Icon--*/}
              {/*--begin::Svg Icon | path: icons/duotune/general/gen048.svg--*/}
              <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                    fill="black"
                  />
                  <path
                    d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
              {/*--end::Icon--*/}
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                {/*--begin::Content--*/}
                <div className="mb-3 mb-md-0 fw-bold">
                  <h4 className="text-gray-900 fw-bolder">
                    Secure Your Account
                  </h4>
                  <div className="fs-6 text-gray-700 pe-7">
                    Two-factor authentication adds an extra layer of security to
                    your account. To log in, in addition you&aposll need to
                    provide a 6 digit code
                  </div>
                </div>
                {/*--end::Content--*/}
                {/*--begin::Action--*/}
                <a
                  href="#"
                  className="btn btn-primary px-6 align-self-center text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_two_factor_authentication"
                >
                  Enable
                </a>
                {/*--end::Action--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Notice--*/}
          </div>
          {/*--end::Card body--*/}
        </div>
        {/*--end::Content--*/}
      </div>
      {/*--end::Sign-in Method--*/}
      {/*--begin::Connected Accounts--*/}
      <div className="card mb-5 mb-xl-10">
        {/*--begin::Card header--*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_connected_accounts"
          aria-expanded="true"
          aria-controls="kt_account_connected_accounts"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Connected Accounts</h3>
          </div>
        </div>
        {/*--end::Card header--*/}
        {/*--begin::Content--*/}
        <div
          id="kt_account_settings_connected_accounts"
          className="collapse show"
        >
          {/*--begin::Card body--*/}
          <div className="card-body border-top p-9">
            {/*--begin::Notice--*/}
            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
              {/*--begin::Icon--*/}
              {/*--begin::Svg Icon | path: icons/duotune/art/art006.svg--*/}
              <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.3"
                    d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z"
                    fill="black"
                  />
                  <path
                    d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z"
                    fill="black"
                  />
                </svg>
              </span>
              {/*--end::Svg Icon--*/}
              {/*--end::Icon--*/}
              {/*--begin::Wrapper--*/}
              <div className="d-flex flex-stack flex-grow-1">
                {/*--begin::Content--*/}
                <div className="fw-bold">
                  <div className="fs-6 text-gray-700">
                    Two-factor authentication adds an extra layer of security to
                    your account. To log in, in you&aposll need to provide a 4
                    digit amazing code.
                    <a href="#" className="fw-bolder">
                      Learn More
                    </a>
                  </div>
                </div>
                {/*--end::Content--*/}
              </div>
              {/*--end::Wrapper--*/}
            </div>
            {/*--end::Notice--*/}
            {/*--begin::Items--*/}
            <div className="py-2">
              {/*--begin::Item--*/}
              <div className="d-flex flex-stack">
                <div className="d-flex">
                  <img
                    src="assets/media/svg/brand-logos/google-icon.svg"
                    className="w-30px me-6"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="fs-5 text-dark text-hover-primary fw-bolder"
                    >
                      Google
                    </a>
                    <div className="fs-6 fw-bold text-gray-400">
                      Plan properly your workflow
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="form-check form-check-solid form-switch">
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      id="googleswitch"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="googleswitch"
                    />
                  </div>
                </div>
              </div>
              {/*--end::Item--*/}
              <div className="separator separator-dashed my-5" />
              {/*--begin::Item--*/}
              <div className="d-flex flex-stack">
                <div className="d-flex">
                  <img
                    src="assets/media/svg/brand-logos/github.svg"
                    className="w-30px me-6"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="fs-5 text-dark text-hover-primary fw-bolder"
                    >
                      Github
                    </a>
                    <div className="fs-6 fw-bold text-gray-400">
                      Keep eye on on your Repositories
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="form-check form-check-solid form-switch">
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      id="githubswitch"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="githubswitch"
                    />
                  </div>
                </div>
              </div>
              {/*--end::Item--*/}
              <div className="separator separator-dashed my-5" />
              {/*--begin::Item--*/}
              <div className="d-flex flex-stack">
                <div className="d-flex">
                  <img
                    src="assets/media/svg/brand-logos/slack-icon.svg"
                    className="w-30px me-6"
                    alt=""
                  />
                  <div className="d-flex flex-column">
                    <a
                      href="#"
                      className="fs-5 text-dark text-hover-primary fw-bolder"
                    >
                      Slack
                    </a>
                    <div className="fs-6 fw-bold text-gray-400">
                      Integrate Projects Discussions
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="form-check form-check-solid form-switch">
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      id="slackswitch"
                    />
                    <label className="form-check-label" htmlFor="slackswitch" />
                  </div>
                </div>
              </div>
              {/*--end::Item--*/}
            </div>
            {/*--end::Items--*/}
          </div>
          {/*--end::Card body--*/}
          {/*--begin::Card footer--*/}
          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button className="btn btn-light btn-active-light-primary me-2">
              Discard
            </button>
            <button className="btn btn-primary">Save Changes</button>
          </div>
          {/*--end::Card footer--*/}
        </div>
        {/*--end::Content--*/}
      </div>
      {/*--end::Connected Accounts--*/}
      {/*--begin::Notifications--*/}
      <div className="card mb-5 mb-xl-10">
        {/*--begin::Card header--*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_email_preferences"
          aria-expanded="true"
          aria-controls="kt_account_email_preferences"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Email Preferences</h3>
          </div>
        </div>
        {/*--begin::Card header--*/}
        {/*--begin::Content--*/}
        <div
          id="kt_account_settings_email_preferences"
          className="collapse show"
        >
          {/*--begin::Form--*/}
          <form className="form">
            {/*--begin::Card body--*/}
            <div className="card-body border-top px-9 py-9">
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">
                    Successful Payments
                  </span>
                  <span className="text-muted fs-6">
                    Receive a notification for every successful payment.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  checked
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">Payouts</span>
                  <span className="text-muted fs-6">
                    Receive a notification for every initiated payout.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">Fee Collection</span>
                  <span className="text-muted fs-6">
                    Receive a notification each time you collect a fee from
                    sales
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  checked
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">
                    Customer Payment Dispute
                  </span>
                  <span className="text-muted fs-6">
                    Receive a notification if a payment is disputed by a
                    customer and for dispute purposes.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">Refund Alerts</span>
                  <span className="text-muted fs-6">
                    Receive a notification if a payment is stated as risk by the
                    Finance Department.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  checked
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">Invoice Payments</span>
                  <span className="text-muted fs-6">
                    Receive a notification if a customer sends an incorrect
                    amount to pay their invoice.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <div className="separator separator-dashed my-6" />
              {/*--end::Option--*/}
              {/*--begin::Option--*/}
              <label className="form-check form-check-custom form-check-solid align-items-start">
                {/*--begin::Input--*/}
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  name="email-preferences[]"
                  value="1"
                />
                {/*--end::Input--*/}
                {/*--begin::Label--*/}
                <span className="form-check-label d-flex flex-column align-items-start">
                  <span className="fw-bolder fs-5 mb-0">
                    Webhook API Endpoints
                  </span>
                  <span className="text-muted fs-6">
                    Receive notifications for consistently failing webhook API
                    endpoints.
                  </span>
                </span>
                {/*--end::Label--*/}
              </label>
              {/*--end::Option--*/}
            </div>
            {/*--end::Card body--*/}
            {/*--begin::Card footer--*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button className="btn btn-light btn-active-light-primary me-2">
                Discard
              </button>
              <button className="btn btn-primary px-6">Save Changes</button>
            </div>
            {/*--end::Card footer--*/}
          </form>
          {/*--end::Form--*/}
        </div>
        {/*--end::Content--*/}
      </div>
      {/*--end::Notifications--*/}

      {/*--begin::Deactivate Account--*/}
      <div className="card">
        {/*--begin::Card header--*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_deactivate"
          aria-expanded="true"
          aria-controls="kt_account_deactivate"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Deactivate Account</h3>
          </div>
        </div>
        {/*--end::Card header--*/}
        {/*--begin::Content--*/}
        <div id="kt_account_settings_deactivate" className="collapse show">
          {/*--begin::Form--*/}
          <form id="kt_account_deactivate_form" className="form">
            {/*--begin::Card body--*/}
            <div className="card-body border-top p-9">
              {/*--begin::Notice--*/}
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                {/*--begin::Icon--*/}
                {/*--begin::Svg Icon | path: icons/duotune/general/gen044.svg--*/}
                <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.3"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="10"
                      fill="black"
                    />
                    <rect
                      x="11"
                      y="14"
                      width="7"
                      height="2"
                      rx="1"
                      transform="rotate(-90 11 14)"
                      fill="black"
                    />
                    <rect
                      x="11"
                      y="17"
                      width="2"
                      height="2"
                      rx="1"
                      transform="rotate(-90 11 17)"
                      fill="black"
                    />
                  </svg>
                </span>
                {/*--end::Svg Icon--*/}
                {/*--end::Icon--*/}
                {/*--begin::Wrapper--*/}
                <div className="d-flex flex-stack flex-grow-1">
                  {/*--begin::Content--*/}
                  <div className="fw-bold">
                    <h4 className="text-gray-900 fw-bolder">
                      You Are Deactivating Your Account
                    </h4>
                    <div className="fs-6 text-gray-700">
                      For extra security, this requires you to confirm your
                      email or phone number when you reset yousignr password.
                      <br />
                      <a className="fw-bolder" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/*--end::Content--*/}
                </div>
                {/*--end::Wrapper--*/}
              </div>
              {/*--end::Notice--*/}
              {/*--begin::Form input row--*/}
              <div className="form-check form-check-solid fv-row">
                <input
                  name="deactivate"
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="deactivate"
                />
                <label
                  className="form-check-label fw-bold ps-2 fs-6"
                  htmlFor="deactivate"
                >
                  I confirm my account deactivation
                </label>
              </div>
              {/*--end::Form input row--*/}
            </div>
            {/*--end::Card body--*/}
            {/*--begin::Card footer--*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                id="kt_account_deactivate_account_submit"
                type="submit"
                className="btn btn-danger fw-bold"
              >
                Deactivate Account
              </button>
            </div>
            {/*--end::Card footer--*/}
          </form>
          {/*--end::Form--*/}
        </div>
        {/*--end::Content--*/}
      </div>
      {/*--end::Deactivate Account--*/}
    </>
  );
}

export default BackUP;
