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
  <div class="w-full max-w-[1000px] bg-panel rounded-2xl p-6 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/5 md:p-4">
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
