import classnames from 'classnames';

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}
function Content(props: ContentProps) {
  const { className } = props;
  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px - 70px)' }}
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className={classnames('container-xxl', className)} id="kt_content_container">
        {props.children}
      </div>
    </div>
  );
}

export default Content;
