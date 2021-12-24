import classnames from 'classnames';

import Content from './Content';
import type { ContentFooterProps } from './ContentFooter';
import type { ContentHeaderProps } from './ContentHeader';
import ContentFooter from './ContentFooter';
import ContentHeader from './ContentHeader';

type ContentWrapperProps = {
  className?: string;
  header?: ContentHeaderProps | false;
  footer?: ContentFooterProps | false;
  children: React.ReactNode;
};

function ContentWrapper(props: ContentWrapperProps) {
  const {
    header,
    className,
    footer = { copyright: '版权所有 2021 林暮春 | 沪ICP备11003026号' },
    children,
  } = props;
  return (
    <div
      className={classnames('wrapper d-flex flex-column flex-row-fluid', className)}
      id="kt_wrapper"
    >
      {header && <ContentHeader {...header} />}
      <Content>{children}</Content>
      {footer && <ContentFooter {...footer} />}
    </div>
  );
}

export default ContentWrapper;
