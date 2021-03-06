import React, { useEffect } from 'react';

import classnames from 'classnames';

import Content from './Content';
import type { ContentFooterProps } from './ContentFooter';
import ContentFooter from './ContentFooter';
import type { ContentHeaderProps } from './ContentHeader';
import ContentHeader from './ContentHeader';

import type { Breadcrumb } from '@/metronic';
import { BlockUI } from '@/metronic';

type ContentWrapperProps = {
  className?: string;
  loading?: boolean;
  header?: ContentHeaderProps | false;
  footer?: ContentFooterProps | false;
  breadcrumb?: React.ReactElement<typeof Breadcrumb>;
  children?: React.ReactNode;
};

function ContentWrapper(props: ContentWrapperProps, ref: any) {
  const {
    loading,
    header = {},
    className,
    breadcrumb,
    footer = { copyright: '版权所有 2021 林暮春 | 沪ICP备11003026号' },
    children,
  } = props;

  useEffect(() => {
    if (!loading) {
      return;
    }
    const layout = document.querySelector('.theme-metronic')!;
    layout.classList.add('overflow-hidden');
    return () => {
      layout.classList.remove('overflow-hidden');
    };
  }, [loading]);

  return (
    <div
      ref={ref}
      id="kt_wrapper"
      className={classnames('wrapper d-flex flex-column flex-row-fluid', className)}
    >
      <BlockUI
        zIndex={9}
        overlayClassName="bg-white bg-opacity-50"
        message="加载中..."
        loading={loading}
      >
        {header && <ContentHeader {...header} breadcrumb={breadcrumb} />}
        <Content>{children}</Content>
        {footer && <ContentFooter {...footer} />}
      </BlockUI>
    </div>
  );
}

const ContentForwardRef = React.forwardRef(ContentWrapper);

export default ContentForwardRef;
