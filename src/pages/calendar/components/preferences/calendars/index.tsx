import { useCallback, useEffect, useState } from 'react';

import { useCalendarSetsQuery, useUpdateCalendarSetMutation } from '../../../hooks';
import CalendarPicker from '../../CalendarPicker';

import CalendarList from './CalendarList';
import CalendarSets from './CalendarSets';

import { Form } from '@/metronic';

function Calendars() {
  const [updateCalendarSet] = useUpdateCalendarSetMutation();
  const { data, refetch } = useCalendarSetsQuery({ fetchPolicy: 'cache-and-network' });
  const calendarSets = data?.calendarSets;

  const form = Form.useForm();
  const [selectedKey, setSelectedKey] = useState<string>();

  const handleSelectCalendarSet = useCallback((value: string) => {
    setSelectedKey(value);
  }, []);

  const calendarSet = (calendarSets || []).find((item) => item.id == selectedKey) as any;

  useEffect(() => {
    form.setFieldsValue({ defaultCalendar: calendarSet?.defaultCalendar?.id });
  }, [calendarSet, form]);

  const handleChange = useCallback(async () => {
    const values = form.getFieldsValue();
    if (!calendarSet) {
      return;
    }
    console.log('handleChange calendarSet', values);
    await updateCalendarSet({
      variables: {
        id: calendarSet.id,
        input: values,
      },
    });
  }, [calendarSet, form, updateCalendarSet]);

  // useEffect(() => {
  //   if (!calendarSet.defaultCalendar) {
  //     return;
  //   }
  // }, [calendarSet]);

  return (
    <div className="settings-calendars">
      <div className="settings-calendars-notes">
        通过创建多个日历集快速更改显示的日历和任务列表。例如，您可能有单独的家庭和工作日历集。
      </div>
      <div className="d-flex">
        <CalendarSets
          onSelect={handleSelectCalendarSet}
          data={calendarSets as any}
          refresh={refetch}
        />
        <div className="settings-calendars-right flex-root">
          <CalendarList refresh={refetch} calendarSet={calendarSet} />
          {/* 我的日历 / 任务 / 提醒 / 联系人 */}
          <div className="calendar-sets-settings">
            <Form
              form={form}
              layout="horizontal"
              size="xs"
              initialValues={{ defaultCalendar: calendarSet?.defaultCalendar?.id }}
              onFieldsChange={handleChange}
            >
              <div className="d-flex flex-row flex-center">
                <Form.Item name="defaultCalendar" label="默认日历">
                  <CalendarPicker solid />
                </Form.Item>
              </div>
              {/* <div className="d-flex flex-row flex-center">
                <Form.Item name="url" label="默认任务列表">
                  <CalendarPicker solid />
                </Form.Item>
              </div> */}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendars;
