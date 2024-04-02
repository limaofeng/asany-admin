import { useCallback, useEffect, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import type { Moment } from 'moment';
import moment from 'moment';

import PublishDatePicker from '../../PublishDatePicker';

import { Button, Popover, Radio, Separator } from '@/metronic';
import type { Article } from '@/types';

type PublishPopoverContentProps = {
  submitting: boolean;
  status?: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'INACTIVE';
  onClose: () => void;
  onPublish: (action: PublishAction) => void;
  publishedAt: Moment;
  setPublishedAt: (publishedAt: Moment) => void;
};

export type PublishAction =
  | 'publish'
  | 'schedule'
  | 'unpublish'
  | 'update'
  | 'reschedule'
  | 'revert_to_draft';

function PublishPopoverContent(props: PublishPopoverContentProps) {
  const { status, submitting, onPublish, publishedAt, setPublishedAt } = props;

  const [action, setAction] = useState<PublishAction>('publish');

  const handlePublishChange = useCallback(
    (e: any) => {
      setAction((_action: string) => {
        if (_action == e.target.value) {
          return _action;
        }
        if (['schedule', 'reschedule'].includes(e.target.value)) {
          if (publishedAt.isBefore(moment())) {
            setPublishedAt(moment());
          }
        }
        return e.target.value;
      });
    },
    [publishedAt, setPublishedAt],
  );

  const handlePublishedAtChange = useCallback(
    (date: any) => {
      setPublishedAt(date);
    },
    [setPublishedAt],
  );

  const handlePublish = useCallback(() => {
    onPublish(action as any);
  }, [onPublish, action]);

  useEffect(() => {
    if (status == 'DRAFT') {
      setAction('publish');
    } else if (status == 'PUBLISHED') {
      setAction('update');
    } else if (status == 'SCHEDULED') {
      setAction('reschedule');
    }
  }, [status]);

  const disabledDate = useCallback((current: Moment) => {
    return current.isBefore(moment()) && !current.isSame(moment(), 'days');
  }, []);

  const disabledTime = useCallback(
    (current: Moment) => {
      return {
        disabledHours: (): number[] => {
          if (!publishedAt.isSame(moment(), 'days')) {
            return [];
          }
          const hours = [];
          for (let i = 0; i < moment().hours(); i++) {
            hours.push(i);
          }
          return hours;
        },
        disabledMinutes: (selectedHour: number): number[] => {
          if (!publishedAt.isSame(moment(), 'days')) {
            return [];
          }
          if (!current.set('hours', selectedHour).isSame(moment(), 'hours')) {
            return [];
          }
          const minutes = [];
          for (let i = 0; i < moment().minutes(); i++) {
            minutes.push(i);
          }
          return minutes;
        },
      };
    },
    [publishedAt],
  );

  return (
    <>
      <div className="publish-popover-content">
        <Radio.Group value={action} onChange={handlePublishChange}>
          {status == 'PUBLISHED' && (
            <>
              <Radio
                className="align-items-start"
                solid
                inputClassName="me-3"
                value="unpublish"
              >
                <div className="fw-bolder text-gray-800">取消发布</div>
                <div className="form-item-help">将文章设置为草稿状态</div>
              </Radio>
              <div className="my-4" />
              <Radio
                className="align-items-start"
                solid
                inputClassName="me-3"
                value="update"
              >
                <div className="fw-bolder text-gray-800">已发布</div>
                <div className="form-item-help">公开显示这篇文章</div>
              </Radio>
            </>
          )}
          {status == 'SCHEDULED' && (
            <>
              <Radio
                className="align-items-start"
                solid
                inputClassName="me-3"
                value="revert_to_draft"
              >
                <div className="fw-bolder text-gray-800">恢复为草稿</div>
                <div className="form-item-help">不再发布</div>
              </Radio>
              <div className="my-4" />
              <Radio
                solid
                className="align-items-start"
                inputClassName="me-3"
                value="reschedule"
              >
                <div className="fw-bolder text-gray-800">定时发布</div>
                <div className="my-2">
                  <PublishDatePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledTime}
                    value={publishedAt}
                    onChange={handlePublishedAtChange}
                  />
                </div>
                <div className="form-item-help">
                  设置一个时间, 将在未来自动发布。
                </div>
              </Radio>
            </>
          )}
          {status == 'DRAFT' && (
            <>
              <Radio
                className="align-items-start"
                solid
                inputClassName="me-3"
                value="publish"
              >
                <div className="fw-bolder text-gray-800">立即发布</div>
                <div className="form-item-help">立即发布此文章</div>
              </Radio>
              <div className="my-4" />
              <Radio
                solid
                className="align-items-start"
                inputClassName="me-3"
                value="schedule"
              >
                <div className="fw-bolder text-gray-800">定时发布</div>
                <div className="my-2">
                  <PublishDatePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledTime}
                    value={publishedAt}
                    onChange={handlePublishedAtChange}
                  />
                </div>
                <div className="form-item-help">
                  设置一个时间, 将在未来自动发布。
                </div>
              </Radio>
            </>
          )}
        </Radio.Group>
      </div>
      <Separator style="solid" />
      <div className="publish-popover-footer d-flex justify-content-end">
        <Button
          onClick={props.onClose}
          disabled={submitting}
          className="me-2"
          variant="light"
        >
          取消
        </Button>
        <Button loading={submitting} onClick={handlePublish}>
          {action == 'publish' && (submitting ? '发布中...' : '发布')}
          {action == 'schedule' && (submitting ? '定时发布中...' : '定时发布')}
          {action == 'update' && (submitting ? '更新中...' : '更新')}
          {action == 'unpublish' && (submitting ? '取消发布中...' : '取消发布')}
          {action == 'reschedule' &&
            (submitting ? '更新中...' : '重设发布时间')}
          {action == 'revert_to_draft' &&
            (submitting ? '取消中...' : '取消自动发布')}
        </Button>
      </div>
    </>
  );
}
//  'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'INACTIVE';

type PublishButtonProps = {
  article?: Article;
  submitting: boolean;
  onPublish: (action: PublishAction) => void;
  publishedAt: Moment;
  setPublishedAt: (publishedAt: Moment) => void;
  onCancel: () => void;
};

function PublishButton(props: PublishButtonProps) {
  const {
    article,
    submitting,
    onPublish,
    publishedAt,
    setPublishedAt,
    onCancel,
  } = props;

  const [publishPopoverVisible, setPublishPopoverVisible] = useState(false);

  const handleClose = useCallback(() => {
    setPublishPopoverVisible(false);
  }, [setPublishPopoverVisible]);

  const handlePublishPopoverVisible = useCallback(
    (visible: boolean) => {
      if (submitting) {
        return;
      }
      setPublishPopoverVisible(visible);
    },
    [submitting],
  );

  const status = article?.status || 'DRAFT';

  const title = useMemo(() => {
    if (status === 'DRAFT') {
      return '发布这篇文章吗？';
    }
    if (status === 'PUBLISHED') {
      return '更新文章状态';
    }
    if (status === 'SCHEDULED') {
      return '预计将在' + moment(article?.publishedAt).fromNow() + '发布';
    }
    return '重新发布';
  }, [article?.publishedAt, status]);

  useEffect(() => {
    !publishPopoverVisible && onCancel();
  }, [onCancel, publishPopoverVisible]);

  return (
    <Popover
      stopPropagation
      visible={publishPopoverVisible}
      overlayClassName="overlay-no-arrow article-publish-dropdown-content"
      title={title}
      content={
        <PublishPopoverContent
          status={status}
          submitting={submitting}
          onClose={handleClose}
          onPublish={onPublish}
          publishedAt={publishedAt}
          setPublishedAt={setPublishedAt}
        />
      }
      placement="top-end"
      onVisibleChange={handlePublishPopoverVisible}
    >
      <Button className="pe-2">
        {status === 'DRAFT' && '发布'}
        {status === 'PUBLISHED' && '更新'}
        {status === 'SCHEDULED' && '更新'}
        <Icon name="Bootstrap/chevron-down" className="ms-2 svg-icon-6" />
      </Button>
    </Popover>
  );
}

export default PublishButton;
