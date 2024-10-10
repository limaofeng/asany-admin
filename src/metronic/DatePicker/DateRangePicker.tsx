import { useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import $ from 'jquery';
import moment, { Moment } from 'moment';

import 'daterangepicker';
import './DateRangePicker.scss';

const ZH_CN = {
  separator: ' 至 ', // 起始和结束日期之间的分隔符
  applyLabel: '确定', // 应用按钮的文本
  cancelLabel: '清空', // 将取消按钮改为“清空”
  fromLabel: '从', // 开始日期标签
  toLabel: '到', // 结束日期标签
  customRangeLabel: '自定义', // 自定义范围标签
  daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'], // 星期
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ], // 月份名称
  firstDay: 1, // 星期一作为一周的第一天
};

type DateRangePickerProps = {
  placeholder?: string;
  solid?: boolean;
  allowEmpty?: [boolean, boolean];
  format?: string;
  value?: [Moment, Moment];
  onChange?: (dates?: [Moment, Moment], dateStrings?: [string, string]) => void;
};

const areValuesEqual = (
  value1?: [Moment, Moment],
  value2?: [Moment, Moment],
): boolean => {
  if (value1 === value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return value1[0].isSame(value2[0]) && value1[1].isSame(value2[1]);
};

function DateRangePicker(props: DateRangePickerProps) {
  const { placeholder = '选择日期范围', format = 'YYYY-MM-DD' } = props;

  const el = useRef(null);
  const [value, setValue] = useState<[Moment, Moment] | undefined>(() => {
    if (!props.value) {
      return undefined;
    }
    return props.value.map((v) => (moment.isMoment(v) ? v : moment(v))) as [
      Moment,
      Moment,
    ];
  });

  const state = useRef<{ props: DateRangePickerProps }>({ props });
  state.current.props = props;

  useEffect(() => {
    const ele = el.current;
    if (ele === null) {
      return;
    }
    $(ele)
      .daterangepicker(
        {
          showDropdowns: true, // 显示年份和月份下拉框
          autoUpdateInput: false, // 初始化时输入框为空
          locale: { ...ZH_CN, format },
        },
        function (start, end) {
          setValue([start, end]);
        },
      )
      .on('cancel.daterangepicker', function (ev, picker) {
        picker.setStartDate(moment().startOf('day')); // 重置开始日期
        picker.setEndDate(moment().endOf('day')); // 重置结束日期
        setValue(undefined);
      });
  }, [format]);

  useEffect(() => {
    if (areValuesEqual(props.value, value)) {
      return;
    }
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    if (areValuesEqual(value, state.current.props.value)) {
      return;
    }
    state.current.props.onChange?.(
      value,
      value?.map((v) => v.format(format)) as [string, string],
    );
  }, [value]);

  return (
    <input
      ref={el}
      className={classnames('form-control', {
        'form-control-solid': props.solid,
      })}
      placeholder={placeholder}
      value={value?.map((v) => v.format(format)).join(' 至 ') || ''}
      onChange={() => {}}
    />
  );
}

export default DateRangePicker;
