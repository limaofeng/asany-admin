import { useCallback, useEffect, useReducer, useRef } from 'react';

import type FullCalendar from '@fullcalendar/react';
import { useModel } from '@umijs/max';

import { useCalendarSetsLazyQuery } from '@/pages/calendar/hooks';

type CalendarState = {
  state: 'none' | 'new';
  selectedDay?: Date;
  calendarSet: 'all' | string;
  fullCalendar?: FullCalendar;
};

export default function useCalendarModel() {
  const state = useRef<CalendarState>({
    state: 'none',
    selectedDay: new Date(),
    calendarSet: 'all',
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const [loadCalendarSets, { data, loading }] = useCalendarSetsLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const currentUser = useModel(
    '@@initialState',
    ({ initialState }) => initialState?.currentUser,
  );

  useEffect(() => {
    if (currentUser === null || state.current.calendarSet === 'all') {
      return;
    }
    loadCalendarSets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loadCalendarSets]);

  useEffect(() => {
    if (!loading || !data) {
      return;
    }
    if (!data.calendarSets.length) {
      state.current.calendarSet = 'all';
      forceRender();
      return;
    }
    if (
      data.calendarSets.some((item) => item.id === state.current.calendarSet)
    ) {
      return;
    }
    state.current.calendarSet = 'all';
    forceRender();
  }, [data, loading]);

  const setSelectedDay = useCallback((day: Date) => {
    state.current.selectedDay = day;
    forceRender();
  }, []);

  const setCalendarSet = useCallback((calendarSet: string | 'all') => {
    state.current.calendarSet = calendarSet;
    forceRender();
  }, []);

  const changeState = useCallback((_state: 'none' | 'new', date?: Date) => {
    state.current.state = _state;
    if (date) {
      state.current.selectedDay = date;
    }
    forceRender();
  }, []);

  const setFullCalendar = useCallback((fullCalendar: FullCalendar) => {
    state.current.fullCalendar = fullCalendar;
    forceRender();
  }, []);

  return {
    state: { ...state.current },
    setCalendarSet,
    setSelectedDay,
    setFullCalendar,
    changeState,
  };
}
