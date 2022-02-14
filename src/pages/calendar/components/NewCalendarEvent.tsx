import { useCallback, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';

import { Button, Checkbox, DatePicker, Form, Input, Select } from '@/pages/Metronic/components';

const TextArea = Input.TextArea;

type NewCalendarEventProps = {
  visible?: boolean;
};

function NewCalendarEvent(props: NewCalendarEventProps) {
  const { visible } = props;

  const [showMore, setShowMore] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowMore((show) => !show);
  }, []);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key == 'Escape') {
      (document.querySelector('.calendar-event-header input') as any)?.focus();
    }
  }, []);

  const form = Form.useForm();

  return (
    <div className={classnames('calendar-new-event-container', { invisible: !visible })}>
      <div className="calendar-new-event">
        <Form
          form={form}
          onKeyUp={handleEsc as any}
          size="sm"
          initialValues={{
            // calendar: 'none',
            allDay: true,
            color: 'none',
            alert: 'none',
            start: '2022-01-19',
            end: '2022-01-19',
          }}
        >
          <ul>
            <li>
              <Form.Item name="title" noStyle>
                <Input size="sm" solid placeholder="新建日程" />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="allDay" label="全天">
                <Checkbox size="sm" />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="start" label="开始时间">
                <DatePicker solid size="sm" />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="end" label="结束时间">
                <DatePicker solid size="sm" />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="calendar" label="日历">
                <Select
                  size="sm"
                  solid
                  options={[
                    {
                      label: '无',
                      value: 'none',
                    },
                  ]}
                />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="color" label="颜色">
                <Select
                  size="sm"
                  solid
                  options={[
                    {
                      label: '无',
                      value: 'none',
                    },
                  ]}
                />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="alert" label="提醒">
                <Select
                  size="sm"
                  solid
                  options={[
                    {
                      label: '无',
                      value: 'none',
                    },
                    {
                      label: '日程发生时',
                      value: 'at time of event',
                    },
                    {
                      label: '1分钟前',
                      value: '1 minute before',
                    },
                    {
                      label: '5分钟前',
                      value: '5 minute before',
                    },
                    {
                      label: '10分钟前',
                      value: '10 minute before',
                    },
                    {
                      label: '15分钟前',
                      value: '15 minute before',
                    },
                    {
                      label: '30分钟前',
                      value: '30 minute before',
                    },
                    {
                      label: '45分钟前',
                      value: '45 minute before',
                    },
                    {
                      label: '1小时前',
                      value: '1 hour before',
                    },
                    {
                      label: '2小时前',
                      value: '2 hour before',
                    },
                    {
                      label: '1天前',
                      value: '1 day before',
                    },
                    {
                      label: '2天前',
                      value: '2 day before',
                    },
                    {
                      label: '自定义',
                      value: 'custom',
                    },
                  ]}
                />
              </Form.Item>
            </li>
            <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <Input solid placeholder="受邀人" />
              </Form.Item>
            </li>
            <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <Input solid placeholder="添加附件" />
              </Form.Item>
            </li>
            <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <Input solid placeholder="设置链接" />
              </Form.Item>
            </li>
            <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <TextArea autoSize={true} solid placeholder="备注" />
              </Form.Item>
            </li>
            <li className="event-actions">
              <Icon
                onClick={handleToggle}
                className="toggle-more svg-icon-1"
                name={showMore ? 'Bootstrap/chevron-compact-up' : 'Bootstrap/chevron-compact-down'}
              />
              <Form.Item noStyle dependencies={['title']}>
                {() => (
                  <Button
                    as="button"
                    disabled={!form.getFieldValue('title')}
                    className="event-btn-add"
                    size="sm"
                  >
                    添加日程
                  </Button>
                )}
              </Form.Item>
            </li>
          </ul>
        </Form>
      </div>
    </div>
  );
}

export default NewCalendarEvent;
