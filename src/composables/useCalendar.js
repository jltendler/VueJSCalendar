import { ref, computed } from 'vue';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isToday,
  isSameDay
} from 'date-fns';

export function useCalendar() {
  const currentDate = ref(new Date());

  const navigateNext = () => {
    currentDate.value = addMonths(currentDate.value, 1);
  }

  const navigatePrev = () => {
    currentDate.value = subMonths(currentDate.value, 1);
  }

  const navigateToday = () => {
    currentDate.value = new Date();
  }

  const currentMonthYear = computed(() => {
    return format(currentDate.value, 'MMMM yyyy');
  })

  const daysInGrid = computed(() => {
    const start = startOfWeek(startOfMonth(currentDate.value));
    const end = endOfWeek(endOfMonth(currentDate.value));

    return eachDayOfInterval({ start, end }).map(date => {
      return {
        date,
        isCurrentMonth: isSameMonth(date, currentDate.value),
        isToday: isToday(date),
        key: format(date, 'yyyy-MM-dd')
      }
    })
  })

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return {
    currentDate,
    navigateNext,
    navigatePrev,
    navigateToday,
    currentMonthYear,
    daysInGrid,
    weekDays,
    isSameDay
  };
}
