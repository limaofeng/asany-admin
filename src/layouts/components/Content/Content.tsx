import type { CSSProperties } from 'react';

import classnames from 'classnames';

interface ContentProps {
  style: CSSProperties;
  className?: string;
  children: React.ReactNode;
}
function Content(props: ContentProps) {
  const { style, className } = props;
  return (
    <div
      style={style}
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div
        className={classnames('container-xxl', className)}
        id="kt_content_container"
      >
        {props.children}
      </div>
    </div>
  );
}

export default Content;
