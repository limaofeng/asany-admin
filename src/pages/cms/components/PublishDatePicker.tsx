import { DatePicker, TimePicker } from 'antd';
import type { Moment } from 'moment';

type PublishDatePickerProps = {
  value?: Moment;
  onChange?: (value: any) => void;
  disabled?: boolean;
  disabledDate?: (current: Moment) => boolean;
  disabledTime?: (current: Moment) => {
    disabledHours: () => number[];
    disabledMinutes: (selectedHour: number) => number[];
  };
};

function PublishDatePicker(props: PublishDatePickerProps) {
  const { value, onChange, disabled, disabledDate, disabledTime } = props;

  return (
    <div>
      <DatePicker
        getPopupContainer={(triggerNode) => triggerNode.parentNode as any}
        transitionName=""
        allowClear={false}
        dropdownClassName="article-publish-dropdown-published-at"
        placement="topLeft"
        value={value}
        disabled={disabled}
        onChange={onChange}
        disabledDate={disabledDate}
        style={{ width: 136 }}
      />
      <TimePicker
        className="ms-3"
        style={{ width: 88 }}
        allowClear={false}
        getPopupContainer={(triggerNode) => triggerNode.parentNode as any}
        transitionName=""
        placeholder=""
        value={value}
        disabled={disabled}
        onChange={onChange}
        disabledTime={disabledTime}
        format="HH:mm"
        placement="topLeft"
      />
    </div>
  );
}

export default PublishDatePicker;
