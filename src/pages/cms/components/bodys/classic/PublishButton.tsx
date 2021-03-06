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
              <Radio className="align-items-start" solid inputClassName="me-3" value="unpublish">
                <div className="fw-bolder text-gray-800">????????????</div>
                <div className="form-item-help">??????????????????????????????</div>
              </Radio>
              <div className="my-4" />
              <Radio className="align-items-start" solid inputClassName="me-3" value="update">
                <div className="fw-bolder text-gray-800">?????????</div>
                <div className="form-item-help">????????????????????????</div>
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
                <div className="fw-bolder text-gray-800">???????????????</div>
                <div className="form-item-help">????????????</div>
              </Radio>
              <div className="my-4" />
              <Radio solid className="align-items-start" inputClassName="me-3" value="reschedule">
                <div className="fw-bolder text-gray-800">????????????</div>
                <div className="my-2">
                  <PublishDatePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledTime}
                    value={publishedAt}
                    onChange={handlePublishedAtChange}
                  />
                </div>
                <div className="form-item-help">??????????????????, ???????????????????????????</div>
              </Radio>
            </>
          )}
          {status == 'DRAFT' && (
            <>
              <Radio className="align-items-start" solid inputClassName="me-3" value="publish">
                <div className="fw-bolder text-gray-800">????????????</div>
                <div className="form-item-help">?????????????????????</div>
              </Radio>
              <div className="my-4" />
              <Radio solid className="align-items-start" inputClassName="me-3" value="schedule">
                <div className="fw-bolder text-gray-800">????????????</div>
                <div className="my-2">
                  <PublishDatePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledTime}
                    value={publishedAt}
                    onChange={handlePublishedAtChange}
                  />
                </div>
                <div className="form-item-help">??????????????????, ???????????????????????????</div>
              </Radio>
            </>
          )}
        </Radio.Group>
      </div>
      <Separator style="solid" />
      <div className="publish-popover-footer d-flex justify-content-end">
        <Button onClick={props.onClose} disabled={submitting} className="me-2" variant="light">
          ??????
        </Button>
        <Button loading={submitting} onClick={handlePublish}>
          {action == 'publish' && (submitting ? '?????????...' : '??????')}
          {action == 'schedule' && (submitting ? '???????????????...' : '????????????')}
          {action == 'update' && (submitting ? '?????????...' : '??????')}
          {action == 'unpublish' && (submitting ? '???????????????...' : '????????????')}
          {action == 'reschedule' && (submitting ? '?????????...' : '??????????????????')}
          {action == 'revert_to_draft' && (submitting ? '?????????...' : '??????????????????')}
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
  const { article, submitting, onPublish, publishedAt, setPublishedAt, onCancel } = props;

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
      return '????????????????????????';
    }
    if (status === 'PUBLISHED') {
      return '??????????????????';
    }
    if (status === 'SCHEDULED') {
      return '????????????' + moment(article?.publishedAt).fromNow() + '??????';
    }
    return '????????????';
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
        {status === 'DRAFT' && '??????'}
        {status === 'PUBLISHED' && '??????'}
        {status === 'SCHEDULED' && '??????'}
        <Icon name="Bootstrap/chevron-down" className="ms-2 svg-icon-6" />
      </Button>
    </Popover>
  );
}

export default PublishButton;
