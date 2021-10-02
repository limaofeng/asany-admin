import { useCallback, useEffect, useRef } from 'react';

import $ from 'jquery';
import 'daterangepicker';
import type { Moment } from 'moment';
import moment from 'moment';

import Input from '../Input';

interface DatePickerProps {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | Moment;
  autoComplete?: boolean;
  bordered?: boolean;
  autoApply?: boolean;
  format?: string;
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
  const { value = '', autoApply = true, format = 'YYYY-MM-DD', onChange, ...inputProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (date: Moment) => {
      onChange && onChange(date, date.format(format));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const picker = $(ref.current!).daterangepicker(
      {
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
  }, []);

  useEffect(() => {
    $(ref.current!).val(toDateString(value, format));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
      defaultValue={toDateString(value, format)}
    />
  );
}

function toDateString(value: string | Moment, format: string) {
  if (typeof value === 'string') {
    if (!!value) {
      return moment(value).format(format);
    }
    return '';
  }
  return value.format(format);
}

export default DatePicker;
