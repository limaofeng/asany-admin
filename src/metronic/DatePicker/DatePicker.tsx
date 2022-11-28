import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import ReactDatePicker, { registerLocale } from 'react-datepicker';
import type { Moment } from 'moment';
import moment from 'moment';
import { range } from 'lodash';
import { getMonth, getYear } from 'date-fns';
import zh from 'date-fns/locale/zh-CN';
import classnames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';

import './style.scss';

registerLocale('zh-CN', zh);

const months = [
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
];

interface DatePickerProps {
  size?: 'sm' | 'lg';
  placeholder?: string;
  solid?: boolean;
  value?: string | number | Moment;
  minDate?: string | Moment;
  maxDate?: string | Moment;
  className?: string;
  inputClassName?: string;
  autoComplete?: boolean;
  bordered?: boolean;
  format?: string;
  allowClear?: boolean;
  timePicker?: boolean;
  onChange?: (date?: Moment, dateString?: string) => void;
}

const CustomInput = forwardRef(({ className, onClick, size, solid, ...props }: any, ref: any) => {
  console.log('CustomInput', props);
  return (
    <input
      ref={ref}
      onClick={onClick}
      className={classnames(className, 'form-control', {
        [`form-control-${size}`]: !!size,
        'form-control-solid': solid,
      })}
      {...props}
    />
  );
});

function DatePicker(props: DatePickerProps) {
  const {
    value = '',
    timePicker,
    minDate,
    maxDate,
    format = 'yyyy-MM-dd',
    onChange,
    allowClear = true,
    ...inputProps
  } = props;

  const [startDate, setStartDate] = useState(toDate(value));
  const years = useMemo(() => {
    return range(
      minDate ? getYear(toDate(minDate)!) : getYear(new Date()) - 100,
      maxDate ? getYear(toDate(maxDate)!) + 1 : getYear(new Date()) + 100,
      1,
    );
  }, [minDate, maxDate]);

  useEffect(() => {
    setStartDate(toDate(value));
  }, [value]);

  const handleChange = useCallback(
    (newValue: Date) => {
      const nv = moment(newValue);
      onChange ? onChange(nv, toDateString(nv, format)) : setStartDate(newValue);
    },
    [format, onChange],
  );

  console.log('startDate', startDate);

  return (
    <ReactDatePicker
      locale="zh-CN"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }: any) => (
        <div className="react-datepicker-control">
          <button
            className="prev available"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <span />
          </button>
          <div className="year-month">
            <select
              className="yearselect"
              value={getYear(date)}
              onChange={({ target: { value: _v } }) => changeYear(_v)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="monthselect"
              value={months[getMonth(date)]}
              onChange={({ target: { value: _v } }) => changeMonth(months.indexOf(_v))}
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            className="next available"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <span />
          </button>
        </div>
      )}
      selected={startDate}
      customInput={
        <CustomInput
          className={inputProps.inputClassName}
          solid={inputProps.solid}
          size={inputProps.size}
        />
      }
      isClearable={allowClear}
      dateFormat={format}
      onChange={handleChange}
      calendarClassName="single-datepicker"
      wrapperClassName={inputProps.className}
      showPopperArrow={false}
    />
  );
}

function toDate(value: string | Moment | number | undefined): Date | undefined {
  if (typeof value === 'string' || typeof value === 'number') {
    const _m = toMoment(value);
    return _m && _m.isValid() ? _m.toDate() : undefined;
  }
  if (moment.isMoment(value) && value.isValid()) {
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
