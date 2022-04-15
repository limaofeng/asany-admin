import { useMemo } from 'react';
import React from 'react';

import { useCalendarsQuery } from '../hooks';

import type { OptionData } from '@/pages/Metronic/components';
import { Select } from '@/pages/Metronic/components';
import { darkenColor } from '@/pages/Metronic/components/utils/color';

type CalendarPickerProps = {
  solid: boolean;
};

function CalendarPicker(props: CalendarPickerProps) {
  const { data } = useCalendarsQuery({ fetchPolicy: 'cache-and-network' });

  const calendars: OptionData[] = useMemo(() => {
    if (!data?.calendars) {
      return [];
    }
    return data.calendars
      .filter((item) => item.type === 'SUNRISE')
      .map((item) => ({ ...item, label: item.name, value: item.id }));
  }, [data?.calendars]);

  return (
    <Select
      {...props}
      options={calendars}
      itemRender={(option: OptionData, display?: boolean) => {
        const _color = option.color!;
        const colorBlock = (
          <div
            style={{
              backgroundColor: _color,
              width: 12,
              height: 12,
              marginRight: 8,
              border: `1px solid ${darkenColor(_color)}`,
              borderRadius: 6,
              display: 'inline-block',
            }}
          />
        );
        if (display) {
          return (
            <>
              {React.cloneElement(colorBlock, {
                style: { ...colorBlock.props.style, marginRight: 5 },
              })}
              {option.label}
            </>
          );
        }
        return (
          <>
            {colorBlock}
            {option.label}
          </>
        );
      }}
    />
  );
}

export default CalendarPicker;
