import type { CSSProperties } from 'react';
import { useCallback } from 'react';
import ContentLoader from 'react-content-loader';

import Icon from '@asany/icons';
import classnames from 'classnames';

import type { RowRendererParams, ScrollRowDataEvent } from '@/metronic';
import { Card, InfiniteScroll, Input, NProgress, Symbol } from '@/metronic';
import { Contact, ContactGroup } from '@/types';

import type { UseContact } from '../hooks/useContacts';

type ContactItemProps = {
  index: number;
  style: CSSProperties;
  useContact: UseContact;
  onClick: (index: number) => void;
  active: boolean;
};

function ContactItem(props: ContactItemProps) {
  const { index, useContact, style, active, onClick } = props;

  const contact = useContact(index);

  const handleClick = useCallback(() => {
    onClick(index);
  }, [onClick, index]);

  return (
    <div
      onClick={handleClick}
      style={style}
      className={classnames('contact-item d-flex flex-stack py-4 mb-1', {
        active,
      })}
    >
      {!contact ? (
        <ContentLoader
          speed={2}
          width={240}
          height={40}
          viewBox="0 0 240 40"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="52" y="8" rx="3" ry="3" width="52" height="8" />
          <rect x="52" y="26" rx="3" ry="3" width="88" height="8" />
          <circle cx="20" cy="20" r="20" />
        </ContentLoader>
      ) : (
        <div className="d-flex align-items-center">
          <Symbol.Avatar
            alt={contact.name!}
            src="assets/media/avatars/300-6.jpg"
            size={40}
            // badge={
            //   <div className="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n2 mt-n2" />
            // }
          />
          <div className="ms-4">
            <a className="fs-6 fw-bolder text-gray-900 text-hover-primary mb-2">
              {contact.name}
            </a>
            <div className="fw-bold fs-7 text-muted">smith@kpmg.com</div>
          </div>
        </div>
      )}
    </div>
  );
}

type ContactListProps = {
  group?: ContactGroup;
  activeIndex?: number;
  loading: boolean;
  data: Contact[];
  onScrollToIndex?: (e: ScrollRowDataEvent) => Promise<void>;
  onItemClick: (index: number) => void;
  useContact: UseContact;
};

function UserList(props: ContactListProps) {
  const {
    group,
    data,
    useContact,
    loading,
    onItemClick,
    activeIndex,
    onScrollToIndex,
  } = props;

  const contactRowRenderer = useCallback(
    ({ key, style, index, isActive }: RowRendererParams) => {
      return (
        <ContactItem
          key={key}
          style={style}
          index={index}
          onClick={onItemClick}
          useContact={useContact}
          active={!!isActive}
        />
      );
    },
    [onItemClick, useContact],
  );

  const noRowsRenderer = useCallback(
    () => (
      <div className="kt_contacts-is-empty infinite-scroll-no-rows">
        <img src="/assets/media/illustrations/dozzy-1/4.png" />
        <span className="empty-title">
          {loading ? '加载中...' : '此分组为空'}
        </span>
        <span className="empty-subtitle">
          {loading ? '稍等一会,正在获取数据' : '请查看其他分组'}
        </span>
      </div>
    ),
    [loading],
  );

  return (
    <Card
      className="kt_contacts-card w-100 border-left-0 border-top-0 border-bottom-0"
      flush
    >
      <Card.Header>
        <form
          className="d-flex align-items-center position-relative w-100"
          autoComplete="off"
        >
          <Icon
            name="Duotune/gen021"
            className="svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"
          />
          <Input solid className="px-15" placeholder="搜索联系人…" />
        </form>
      </Card.Header>
      <Card.Body>
        <div className="kt_contacts-list-header">
          <Icon className="svg-icon-5 svg-icon-primary" name="Duotune/com010" />
          <span className="box-name">{group?.name}</span>
        </div>
        <div className="infinite-scroll-container">
          <NProgress isAnimating={!!loading} position="top" />
          <InfiniteScroll
            rowCount={data.length}
            rowHeight={66}
            scrollToIndex={activeIndex}
            onScrollToIndex={onScrollToIndex}
            rowRenderer={contactRowRenderer}
            noRowsRenderer={noRowsRenderer}
            className="kt_contacts-list"
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserList;
