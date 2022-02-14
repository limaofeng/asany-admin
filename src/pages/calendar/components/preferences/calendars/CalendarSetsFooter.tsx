import { useCallback } from 'react';

import Icon from '@asany/icons';

import { useCreateCalendarSetMutation, useDeleteCalendarSetMutation } from '@/pages/calendar/hooks';
import type { CalendarSet } from '@/types';

type CalendarSetsFooterProps = {
  selectedKey: string;
  onSuccess: (calendarSet?: CalendarSet) => void;
};

function CalendarSetsFooter(props: CalendarSetsFooterProps) {
  const { onSuccess, selectedKey } = props;

  const [createCalendarSet] = useCreateCalendarSetMutation();
  const [deleteCalendarSet] = useDeleteCalendarSetMutation();

  const handleNewCalendarSetNew = useCallback(async () => {
    const { data } = await createCalendarSet();
    onSuccess(data?.createCalendarSet as any);
  }, [createCalendarSet, onSuccess]);

  const handleDeleteCalendarSet = useCallback(async () => {
    await deleteCalendarSet({
      variables: {
        id: selectedKey,
      },
    });
    onSuccess();
  }, [deleteCalendarSet, selectedKey, onSuccess]);

  return (
    <div className="calendar-sets-footer">
      <a onClick={handleNewCalendarSetNew}>
        <Icon name="Duotune/arr087" className="svg-icon-2" />
      </a>
      <a onClick={handleDeleteCalendarSet}>
        <Icon name="Duotune/arr089" className="svg-icon-2" />
      </a>
    </div>
  );
}

export default CalendarSetsFooter;
