import { useCallback, useEffect, useRef } from 'react';

import $ from 'jquery';
import 'daterangepicker';
import type { Moment } from 'moment';
import moment from 'moment';

import type { InputRef } from '../Input';
import { Input } from '../Input';

import './style.scss';

interface DatePickerProps {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | Moment;
  minDate?: string | Moment;
  maxDate?: string | Moment;
  className?: string;
  autoComplete?: boolean;
  bordered?: boolean;
  autoApply?: boolean;
  format?: string;
  timePicker?: boolean;
  onChange?: (date: Moment, dateString: string) => void;
}

const LOCALE = {
  separator: ' - ',
  applyLabel: '确定',
  cancelLabel: '清理',
  fromLabel: 'From',
  toLabel: 'To',
  customRangeLabel: 'Custom',
  weekLabel: 'W',
  daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
  monthNames: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ],
  firstDay: 1,
};

function DatePicker(props: DatePickerProps) {
  const {
    value = '',
    autoApply = true,
    timePicker,
    minDate,
    maxDate,
    format = 'YYYY-MM-DD',
    onChange,
    ...inputProps
  } = props;
  const ref = useRef<InputRef>(null);

  const handleChange = useCallback(
    (date: Moment) => {
      onChange && onChange(date, date.format(format));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const picker = $(ref.current!.element!).daterangepicker(
      {
        minDate: toDate(minDate),
        maxDate: toDate(maxDate),
        timePicker,
        autoApply,
        singleDatePicker: true,
        showDropdowns: true,
        locale: { format, ...LOCALE },
      },
      handleChange,
    );
    return () => {
      (picker.data('daterangepicker') as any)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoApply, format, timePicker, minDate, maxDate]);

  useEffect(() => {
    if (typeof value == 'string') {
      process.nextTick(() => {
        onChange && onChange(moment(value), moment(value).format(format));
      });
    }
    if (toMoment(minDate)?.isAfter(toMoment(value))) {
      onChange && onChange(toMoment(minDate)!, toMoment(minDate)!.format(format));
    }
    // ref.current!.setValue(toDateString(value, format));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, minDate]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      return;
    }
    const picker: any = $(ref.current!).data('daterangepicker');
    if (!picker) {
      return;
    }
    if (!picker.isShowing) {
      picker.show();
    }
  }, []);

  return (
    <Input
      ref={ref}
      {...inputProps}
      onKeyDown={handleKeyDown}
      onChange={() => {}}
      value={toDateString(value, format)}
    />
  );
}

function toDate(value: string | Moment | undefined): string | Date | undefined {
  if (typeof value === 'string') {
    return value;
  }
  if (moment.isMoment(value)) {
    return value.toDate();
  }
  return undefined;
}

function toMoment(value: string | Moment | undefined): Moment | undefined {
  if (typeof value === 'string' && !!value) {
    return moment(value);
  }
  if (moment.isMoment(value)) {
    return value;
  }
  return undefined;
}

function toDateString(value: string | Moment, format: string) {
  return toMoment(value)?.format(format) || null;
}

export default DatePicker;
