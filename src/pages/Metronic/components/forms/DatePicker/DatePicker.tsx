import { useCallback, useEffect, useRef } from 'react';

import $ from 'jquery';
import 'daterangepicker';
import type { Moment } from 'moment';

import Input from '../Input';

interface DatePickerProps {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string;
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
  const { autoApply = true, format = 'YYYY-MM-DD', onChange, ...inputProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (date: Moment) => {
      onChange && onChange(date, date.format(format));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [format],
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
  }, [autoApply, format, handleChange]);

  return <Input ref={ref} {...inputProps} />;
}

export default DatePicker;
