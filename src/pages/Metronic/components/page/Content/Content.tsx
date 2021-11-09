interface ContentProps {
  children: React.ReactNode;
}
function Content(props: ContentProps) {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px - 65px)' }}
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className="container-xxl" id="kt_content_container">
        {props.children}
      </div>
    </div>
  );
}

export default Content;
