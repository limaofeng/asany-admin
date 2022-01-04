import type { RouteComponentProps } from 'react-router-dom';

import { ContentWrapper } from '@/pages/Metronic/components';

type MailboxProps = RouteComponentProps<{ folder: string }>;

function Mailbox(props: MailboxProps) {
  const {
    match: {
      params: { folder },
    },
  } = props;
  console.log('folder', folder);
  return (
    <ContentWrapper className="apps-email-mailbox" header={false} footer={false}>
      <div className="d-flex flex-column flex-lg-row">
        <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
          {/**--begin::Contacts--*/}
          <div className="card card-flush mailbox-card">
            {/**--begin::Card header--*/}
            <div className="card-header pt-7" id="kt_chat_contacts_header">
              {/**--begin::Form--*/}
              <form className="w-100 position-relative" autoComplete="off">
                {/**--begin::Icon--*/}
                {/**--begin::Svg Icon | path: icons/duotune/general/gen021.svg--*/}
                <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="17.0365"
                      y="15.1223"
                      width="8.15546"
                      height="2"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      fill="black"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                {/**--end::Svg Icon--*/}
                {/**--end::Icon--*/}
                {/**--begin::Input--*/}
                <input
                  type="text"
                  className="form-control form-control-solid px-15"
                  name="search"
                  value=""
                  placeholder="Search by username or email..."
                />
                {/**--end::Input--*/}
              </form>
              {/**--end::Form--*/}
            </div>
            {/**--end::Card header--*/}
            {/**--begin::Card body--*/}
            <div className="card-body pt-5" id="kt_chat_contacts_body">
              {/**--begin::List--*/}
              <div
                className="scroll-y me-n5 pe-5 h-200px h-lg-auto"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_chat_contacts_header"
                data-kt-scroll-wrappers="#kt_content, #kt_chat_contacts_body"
                data-kt-scroll-offset="0px"
              >
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                        M
                      </span>
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Melody Macy
                      </a>
                      <div className="fw-bold text-muted">melody@altbox.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">1 day</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/150-26.jpg" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Max Smith
                      </a>
                      <div className="fw-bold text-muted">max@kt.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">1 week</span>
                    <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/150-4.jpg" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Sean Bean
                      </a>
                      <div className="fw-bold text-muted">sean@dellito.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">20 hrs</span>
                    <span className="badge badge-sm badge-circle badge-light-warning">9</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/150-15.jpg" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Brian Cox
                      </a>
                      <div className="fw-bold text-muted">brian@exchange.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">20 hrs</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">
                        M
                      </span>
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Mikaela Collins
                      </a>
                      <div className="fw-bold text-muted">mikaela@pexcom.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">3 hrs</span>
                    <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/150-8.jpg" />
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Francis Mitcham
                      </a>
                      <div className="fw-bold text-muted">f.mitcham@kpmg.com.au</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">2 weeks</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                        O
                      </span>
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Olivia Wild
                      </a>
                      <div className="fw-bold text-muted">olivia@corpmail.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">1 week</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">
                        N
                      </span>
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Neil Owen
                      </a>
                      <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">1 week</span>
                    <span className="badge badge-sm badge-circle badge-light-warning">9</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/150-6.jpg" />
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Dan Wilson
                      </a>
                      <div className="fw-bold text-muted">dam@consilting.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">5 hrs</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
                {/**--begin::Separator--*/}
                <div className="separator separator-dashed d-none" />
                {/**--end::Separator--*/}
                {/**--begin::User--*/}
                <div className="d-flex flex-stack py-4">
                  {/**--begin::Details--*/}
                  <div className="d-flex align-items-center">
                    {/**--begin::Avatar--*/}
                    <div className="symbol symbol-45px symbol-circle">
                      <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">
                        E
                      </span>
                      <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
                    </div>
                    {/**--end::Avatar--*/}
                    {/**--begin::Details--*/}
                    <div className="ms-5">
                      <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">
                        Emma Bold
                      </a>
                      <div className="fw-bold text-muted">emma@intenso.com</div>
                    </div>
                    {/**--end::Details--*/}
                  </div>
                  {/**--end::Details--*/}
                  {/**--begin::Lat seen--*/}
                  <div className="d-flex flex-column align-items-end ms-2">
                    <span className="text-muted fs-7 mb-1">5 hrs</span>
                    <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                  </div>
                  {/**--end::Lat seen--*/}
                </div>
                {/**--end::User--*/}
              </div>
              {/**--end::List--*/}
            </div>
            {/**--end::Card body--*/}
          </div>
          {/**--end::Contacts--*/}
        </div>
        <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10" />
      </div>
    </ContentWrapper>
  );
}

export default Mailbox;
