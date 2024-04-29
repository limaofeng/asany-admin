import type { CSSProperties } from 'react';
import React, { useEffect } from 'react';

import classnames from 'classnames';

import type { Breadcrumb } from '@/metronic';
import { BlockUI } from '@/metronic';

import Content from './Content';
import type { ContentFooterProps } from './ContentFooter';
import ContentFooter from './ContentFooter';
import type { ContentHeaderProps } from './ContentHeader';
import ContentHeader from './ContentHeader';

export type ContentWrapperProps = {
  className?: string;
  contentClassName?: string;
  loading?: boolean;
  onClick?: () => void;
  header?: ContentHeaderProps | false | React.ReactNode;
  footer?: ContentFooterProps | false;
  breadcrumb?: React.ReactElement<typeof Breadcrumb>;
  style?: CSSProperties;
  children?: React.ReactNode;
};

function ContentWrapper(props: ContentWrapperProps, ref: any) {
  const {
    loading,
    header = {},
    style,
    className,
    contentClassName,
    breadcrumb,
    footer = { copyright: '' },
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

  console.log('ContentWrapper', props);

  return (
    <div
      ref={ref}
      id={(props as any).id}
      style={style}
      onClick={props.onClick}
      className={classnames(
        'wrapper d-flex flex-column flex-row-fluid',
        className,
      )}
    >
      <BlockUI
        zIndex={9}
        overlayClassName="bg-white bg-opacity-50"
        message="加载中..."
        loading={loading}
      >
        <ContentHeader
          {...(React.isValidElement(header)
            ? { children: header }
            : !header
            ? {}
            : (header as ContentHeaderProps))}
          breadcrumb={breadcrumb}
        />
        <Content
          style={{
            minHeight: `calc(100vh - ${!!header ? 100 : 0}px - ${
              !!footer ? 70 : 0
            }px)`,
          }}
          className={contentClassName}
        >
          {children}
        </Content>
        {footer && <ContentFooter {...footer} />}
      </BlockUI>
    </div>
  );
}

const ContentForwardRef = React.forwardRef(ContentWrapper);

export default React.memo(ContentForwardRef);
