<script setup>
import CalendarHeader from './CalendarHeader.vue'
import CalendarGrid from './CalendarGrid.vue'
import { useCalendar } from '../composables/useCalendar'
import { useEvents } from '../composables/useEvents'

const { 
  currentMonthYear, 
  daysInGrid, 
  weekDays, 
  navigateNext, 
  navigatePrev, 
  navigateToday 
} = useCalendar()

const { events } = useEvents()
</script>

<template>
  <div class="calendar-layout">
    <CalendarHeader 
      :currentMonthYear="currentMonthYear"
      @next="navigateNext"
      @prev="navigatePrev"
      @today="navigateToday"
    />
    
    <CalendarGrid 
      :days="daysInGrid"
      :weekDays="weekDays"
      :events="events"
    />
  </div>
</template>

<style scoped>
.calendar-layout {
  width: 100%;
  max-width: 1000px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Responsiveness */
@media (max-width: 768px) {
  .calendar-layout {
    padding: var(--spacing-md);
  }
}
</style>
