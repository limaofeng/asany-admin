export type ContentFooterProps = {
  copyright: string;
};

function ContentFooter(props: ContentFooterProps) {
  const { copyright } = props;
  return (
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      {/* --begin::Container--*/}
      <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
        {/* --begin::Copyright--*/}
        <div className="text-dark order-2 order-md-1">
          <span className="text-gray-400 fw-bold me-1">Created by</span>
          <a
            href="https://keenthemes.com"
            target="_blank"
            className="text-muted text-hover-primary fw-bold me-2 fs-6"
            rel="noreferrer"
          >
            {copyright}
          </a>
        </div>
        {/* --end::Copyright--*/}
        {/* --begin::Menu--*/}
        <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li className="menu-item">
            <a target="_blank" className="menu-link px-2">
              关于
            </a>
          </li>
          <li className="menu-item">
            <a target="_blank" className="menu-link px-2">
              技术支持
            </a>
          </li>
          {/* <li className="menu-item">
            <a target="_blank" className="menu-link px-2">
              订阅
            </a>
          </li> */}
        </ul>
        {/* --end::Menu--*/}
      </div>
      {/* --end::Container--*/}
    </div>
  );
}

export default ContentFooter;
