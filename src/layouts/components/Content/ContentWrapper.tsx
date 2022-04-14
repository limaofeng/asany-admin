import React from 'react';

import classnames from 'classnames';

import { useLayoutSelector } from '../../LayoutContext';

import Content from './Content';
import type { ContentFooterProps } from './ContentFooter';
import type { ContentHeaderProps } from './ContentHeader';
import ContentFooter from './ContentFooter';
import ContentHeader from './ContentHeader';

type ContentWrapperProps = {
  className?: string;
  header?: ContentHeaderProps | false;
  footer?: ContentFooterProps | false;
  mask?: boolean;
  children?: React.ReactNode;
};

function ContentWrapper(props: ContentWrapperProps, ref: any) {
  const {
    mask,
    header = {},
    className,
    footer = { copyright: '版权所有 2021 林暮春 | 沪ICP备11003026号' },
    children,
  } = props;

  const asideWidth = useLayoutSelector((state) => state.aside.width);
  const minimize = useLayoutSelector((state) => state.aside.minimize);

  return (
    <div
      ref={ref}
      id="kt_wrapper"
      className={classnames('wrapper d-flex flex-column flex-row-fluid', className, {
        'content-mask': mask,
      })}
      style={{ paddingLeft: !minimize ? asideWidth : undefined }}
    >
      {header && <ContentHeader {...header} />}
      <Content>{children}</Content>
      {footer && <ContentFooter {...footer} />}
    </div>
  );
}

export default React.forwardRef(ContentWrapper);
