import { useCallback, useEffect, useState } from 'react';

import { useModel } from 'umi';

import { useCalendarSetsLazyQuery } from '@/pages/calendar/hooks';

type CalendarState = {
  selectedDay?: Date;
  calendarSet?: 'all' | number;
};

export default function useCalendarModel() {
  const [state, setState] = useState<CalendarState>({
    selectedDay: new Date(),
    calendarSet: 1,
  });

  const [loadCalendarSets, { data, loading }] = useCalendarSetsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const currentUser = useModel('@@initialState', ({ initialState }) => initialState?.currentUser);

  useEffect(() => {
    if (currentUser == null || state.calendarSet == 'all') {
      return;
    }
    loadCalendarSets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loadCalendarSets]);

  useEffect(() => {
    if (loading == null || data == null) {
      return;
    }
    setState((_state) => {
      if (!data.calendarSets.length) {
        return { ..._state, calendarSet: 'all' };
      }
      // debugger;
      if (data.calendarSets.some((item) => item.id == _state.calendarSet)) {
        return _state;
      }
      return { ..._state, calendarSet: 'all' };
    });
  }, [data, loading]);

  const setSelectedDay = useCallback((day) => {
    setState((_state) => ({ ..._state, selectedDay: day }));
  }, []);

  return {
    state,
    setSelectedDay,
  };
}
