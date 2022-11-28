import { useCallback, useEffect, useRef } from 'react';

import $ from 'jquery';
import 'daterangepicker';
import type { Moment } from 'moment';
import moment from 'moment';

import type { InputRef } from '../Input';
import Input from '../Input';

import './style.scss';

interface DatePickerProps {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | number | Moment;
  minDate?: string | Moment;
  maxDate?: string | Moment;
  className?: string;
  autoComplete?: boolean;
  bordered?: boolean;
  autoApply?: boolean;
  format?: string;
  timePicker?: boolean;
  onChange?: (date?: Moment, dateString?: string) => void;
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
    (date?: Moment) => {
      if (onChange) {
        onChange(date, date ? toDateString(date, format) : undefined);
      } else {
        debugger;
        $(ref.current!).val(toDateString(date, format)!);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const picker = $(ref.current!.element!)
      .daterangepicker(
        {
          minDate: toDate(minDate),
          maxDate: toDate(maxDate),
          timePicker,
          autoApply,
          autoUpdateInput: false,
          singleDatePicker: true,
          showDropdowns: true,
          drops: 'auto',
          locale: { format, ...LOCALE },
        },
        handleChange,
      )
      .on('cancel.daterangepicker', () => {
        handleChange();
      })
      .on('apply.daterangepicker', (_, _picker) => {
        handleChange(_picker.startDate);
      });
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

function toMoment(value: string | Moment | number | undefined): Moment | undefined {
  if (typeof value === 'number') {
    return moment(value);
  }
  if (typeof value === 'string' && !!value) {
    return moment(value);
  }
  if (moment.isMoment(value)) {
    return value;
  }
  return undefined;
}

function toDateString(value: string | Moment | number | undefined, format: string) {
  const _m = toMoment(value);
  if (!_m || !_m.isValid()) {
    return undefined;
  }
  return _m.format(format) || undefined;
}

export default DatePicker;
