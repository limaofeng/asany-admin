function UserList() {
  return (
    <div className="card card-flush" id="kt_contacts_list">
      {/*--begin::Card header--*/}
      <div className="card-header pt-7" id="kt_contacts_list_header">
        {/*--begin::Form--*/}
        <form className="d-flex align-items-center position-relative w-100 m-0" autoComplete="off">
          {/*--begin::Icon--*/}
          {/*--begin::Svg Icon | path: icons/duotune/general/gen021.svg--*/}
          <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
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
          {/*--end::Svg Icon--*/}
          {/*--end::Icon--*/}
          {/*--begin::Input--*/}
          <input
            type="text"
            className="form-control form-control-solid ps-13"
            name="search"
            value=""
            placeholder="Search contacts"
          />
          {/*--end::Input--*/}
        </form>
        {/*--end::Form--*/}
      </div>
      {/*--end::Card header--*/}
      {/*--begin::Card body--*/}
      <div className="card-body pt-5" id="kt_contacts_list_body">
        {/*--begin::List--*/}
        <div
          className="scroll-y me-n5 pe-5 h-300px h-xl-auto"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_contacts_list_header"
          data-kt-scroll-wrappers="#kt_content, #kt_contacts_list_body"
          data-kt-scroll-stretch="#kt_contacts_list, #kt_contacts_main"
          data-kt-scroll-offset="5px"
        >
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Emma Smith
                </a>
                <div className="fw-bold fs-7 text-muted">smith@kpmg.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">M</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Melody Macy
                </a>
                <div className="fw-bold fs-7 text-muted">melody@altbox.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Max Smith
                </a>
                <div className="fw-bold fs-7 text-muted">max@kt.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Sean Bean
                </a>
                <div className="fw-bold fs-7 text-muted">sean@dellito.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Brian Cox
                </a>
                <div className="fw-bold fs-7 text-muted">brian@exchange.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">C</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Mikaela Collins
                </a>
                <div className="fw-bold fs-7 text-muted">mik@pex.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Francis Mitcham
                </a>
                <div className="fw-bold fs-7 text-muted">f.mit@kpmg.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">O</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Olivia Wild
                </a>
                <div className="fw-bold fs-7 text-muted">olivia@corpmail.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">N</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Neil Owen
                </a>
                <div className="fw-bold fs-7 text-muted">owen.neil@gmail.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Dan Wilson
                </a>
                <div className="fw-bold fs-7 text-muted">dam@consilting.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">E</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Emma Bold
                </a>
                <div className="fw-bold fs-7 text-muted">emma@intenso.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Ana Crown
                </a>
                <div className="fw-bold fs-7 text-muted">ana.cf@limtel.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-info text-info fs-6 fw-bolder">A</span>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Robert Doe
                </a>
                <div className="fw-bold fs-7 text-muted">robert@benko.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  John Miller
                </a>
                <div className="fw-bold fs-7 text-muted">miller@mapple.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <span className="symbol-label bg-light-success text-success fs-6 fw-bolder">L</span>
                <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2"></div>
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Lucy Kunic
                </a>
                <div className="fw-bold fs-7 text-muted">lucy.m@fentech.com</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
          {/*--begin::Separator--*/}
          <div className="separator separator-dashed d-none"></div>
          {/*--end::Separator--*/}
          {/*--begin::User--*/}
          <div className="d-flex flex-stack py-4">
            {/*--begin::Details--*/}
            <div className="d-flex align-items-center">
              {/*--begin::Avatar--*/}
              <div className="symbol symbol-40px symbol-circle">
                <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
              </div>
              {/*--end::Avatar--*/}
              {/*--begin::Details--*/}
              <div className="ms-4">
                <a
                  href="../../demo7/dist/apps/contacts/view-contact.html"
                  className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2"
                >
                  Ethan Wilder
                </a>
                <div className="fw-bold fs-7 text-muted">ethan@loop.com.au</div>
              </div>
              {/*--end::Details--*/}
            </div>
            {/*--end::Details--*/}
          </div>
          {/*--end::User--*/}
        </div>
        {/*--end::List--*/}
      </div>
      {/*--end::Card body--*/}
    </div>
  );
}

export default UserList;
