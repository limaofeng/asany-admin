import { useCallback, useEffect, useRef, useState } from 'react';

import Icon from '@asany/icons';
import classnames from 'classnames';
import moment from 'moment';
import { useModel } from 'umi';

import { useAddCalendarEventMutation } from '../hooks';

import CalendarPicker from './CalendarPicker';

import type { OptionData } from '@/metronic/typings';
import { Button, Checkbox, DatePicker, Form, Input, Select } from '@/metronic';
import type { CalendarEvent, CalendarSet } from '@/types';

const TextArea = Input.TextArea;

type NewCalendarEventProps = {
  visible?: boolean;
  onSuccess: (event: CalendarEvent) => void;
  calendarSets: CalendarSet[];
};

const alertOptions: OptionData[] = [
  {
    label: '无',
    value: 'none',
    scope: ['all-day', 'general'],
    remind: {
      alert: 'NONE',
    },
  },
  {
    type: 'separator',
    scope: ['all-day', 'general'],
  },
  {
    label: '日程当天 (上午 8:00)',
    value: 'on time of event',
    scope: ['all-day'],
    remind: {
      alert: 'ON_TIME_OF_EVENT',
    },
  },
  {
    label: '1 天前 (上午 8:00)',
    value: '1 day before 8:00',
    scope: ['all-day'],
    remind: {
      alert: 'DAYS_BEFORE',
      times: 1,
    },
  },
  {
    label: '2 天前 (上午 8:00)',
    value: '2 day before 8:00',
    scope: ['all-day'],
    remind: {
      alert: 'DAYS_BEFORE',
      times: 2,
    },
  },
  {
    label: '日程发生时',
    value: 'at time of event',
    scope: ['general'],
    remind: {
      alert: 'AT_TIME_OF_EVENT',
    },
  },
  {
    label: '1 分钟前',
    value: '1 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 1,
    },
  },
  {
    label: '5 分钟前',
    value: '5 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 5,
    },
  },
  {
    label: '10 分钟前',
    value: '10 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 10,
    },
  },
  {
    label: '15 分钟前',
    value: '15 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 15,
    },
  },
  {
    label: '30 分钟前',
    value: '30 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 30,
    },
  },
  {
    label: '45 分钟前',
    value: '45 minute before',
    scope: ['general'],
    remind: {
      alert: 'MINUTES_BEFORE',
      times: 45,
    },
  },
  {
    label: '1 小时前',
    value: '1 hour before',
    scope: ['general'],
    remind: {
      alert: 'HOURS_BEFORE',
      times: 1,
    },
  },
  {
    label: '2 小时前',
    value: '2 hour before',
    scope: ['general'],
    remind: {
      alert: 'HOURS_BEFORE',
      times: 2,
    },
  },
  {
    label: '1 天前',
    value: '1 day before',
    scope: ['general'],
    remind: {
      alert: 'DAYS_BEFORE',
      times: 1,
    },
  },
  {
    label: '2 天前',
    value: '2 day before',
    scope: ['general'],
    remind: {
      alert: 'DAYS_BEFORE',
      times: 2,
    },
  },
  {
    type: 'separator',
    scope: ['all-day', 'general'],
  },
  {
    label: '自定义',
    value: 'custom',
    scope: [],
  },
];

function NewCalendarEvent(props: NewCalendarEventProps) {
  const { visible, calendarSets, onSuccess } = props;

  const formInitialValues = useRef<any>({
    title: '测试',
    allDay: true,
    color: 'none',
    alert: 'none',
    starts: '2022-01-19',
    ends: '2022-01-19',
  });

  const [showMore, setShowMore] = useState<boolean>(false);
  const selectedDay = useModel('calendar', ({ state }) =>
    moment(state.selectedDay || new Date()).format('YYYY-MM-DD'),
  );
  const isNew = useModel('calendar', (model) => model.state.state == 'new');
  const calendarSet = useModel('calendar', (model) => model.state.calendarSet);

  const [addCalendarEvent] = useAddCalendarEventMutation();

  formInitialValues.current.starts = selectedDay;
  formInitialValues.current.ends = selectedDay;

  const handleToggle = useCallback(() => {
    setShowMore((show) => !show);
  }, []);

  const handleEsc = useCallback((e: KeyboardEvent) => {
    if (e.key == 'Escape') {
      (document.querySelector('.calendar-event-header input') as any)?.focus();
    }
  }, []);

  const form = Form.useForm();

  useEffect(() => {
    if (!formInitialValues.current.calendar) {
      if (calendarSet == 'all') {
        formInitialValues.current.calendar = null;
      } else {
        formInitialValues.current.calendar = calendarSets.find(
          (item) => item.id == calendarSet,
        )?.defaultCalendar?.id;
      }
    }
    form.setFieldsValue(formInitialValues.current);
  }, [calendarSet, calendarSets, form]);

  const handleSubmit = useCallback(
    async ({ calendar, alert, ...values }: any) => {
      const remind = alertOptions.find((item) => item.value == alert)?.remind;
      const { data } = await addCalendarEvent({
        variables: {
          calendar,
          input: { ...values, remind: remind || { alert: 'NONE' } },
        },
      });
      onSuccess(data?.event as any);
    },
    [addCalendarEvent, onSuccess],
  );

  useEffect(() => {
    if (!isNew) {
      return;
    }
    form.setFieldsValue(formInitialValues.current);
  }, [isNew, form]);

  return (
    <div className={classnames('calendar-new-event-container', { invisible: !visible })}>
      <div className="calendar-new-event">
        <Form
          onFinish={handleSubmit}
          form={form}
          onKeyUp={handleEsc as any}
          layout="horizontal"
          initialValues={formInitialValues.current}
        >
          <ul>
            <li>
              <Form.Item name="title" noStyle>
                <Input solid placeholder="新建日程" />
              </Form.Item>
            </li>
            <li>
              <Form.Item name="allDay" valuePropName="checked" label="全天">
                <Checkbox />
              </Form.Item>
            </li>
            <li>
              <Form.Item noStyle dependencies={['allDay']}>
                {() => (
                  <Form.Item name="starts" label="开始时间">
                    <DatePicker
                      solid
                      timePicker={!form.getFieldValue('allDay')}
                      format={form.getFieldValue('allDay') ? 'YYYY-MM-DD' : 'YYYY-MM-DD A HH:mm'}
                    />
                  </Form.Item>
                )}
              </Form.Item>
            </li>
            <li>
              <Form.Item noStyle dependencies={['allDay', 'starts']}>
                {() => (
                  <Form.Item name="ends" label="结束时间">
                    <DatePicker
                      solid
                      minDate={form.getFieldValue('starts')}
                      timePicker={!form.getFieldValue('allDay')}
                      format={form.getFieldValue('allDay') ? 'YYYY-MM-DD' : 'YYYY-MM-DD A HH:mm'}
                    />
                  </Form.Item>
                )}
              </Form.Item>
            </li>
            <li>
              <Form.Item name="calendar" label="日历">
                <CalendarPicker solid />
              </Form.Item>
            </li>
            {/* <li>
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
            </li> */}
            <li>
              <Form.Item noStyle dependencies={['allDay']}>
                {() => {
                  return (
                    <Form.Item name="alert" label="提醒">
                      <Select
                        solid
                        options={alertOptions.filter((opt) =>
                          opt.scope.includes(form.getFieldValue('allDay') ? 'all-day' : 'general'),
                        )}
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
            </li>
            {/* <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <Input solid placeholder="受邀人" />
              </Form.Item>
            </li>
            <li className={classnames({ invisible: !showMore })}>
              <Form.Item noStyle>
                <Input solid placeholder="添加附件" />
              </Form.Item>
            </li> */}
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
                    htmlType="submit"
                    disabled={!form.getFieldValue('title')}
                    className="event-btn-add rounded-2"
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
