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

defineEmits(['add-event'])
</script>

<template>
  <div class="w-full max-w-[1000px] bg-panel rounded-2xl p-6 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/5 md:p-4">
   <!-- : v-bind, setting data within calendarHeader component -->
   <!-- @ v-on, setting events within calendarHeader component -->
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
      @add-event="(date) => $emit('add-event', date)"
    />

    <div class="mt-6 pt-4 border-t border-[#333] flex gap-6 justify-center">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
        <span class="text-xs text-dim uppercase tracking-wider">Work</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        <span class="text-xs text-dim uppercase tracking-wider">Personal</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
        <span class="text-xs text-dim uppercase tracking-wider">Important</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
        <span class="text-xs text-dim uppercase tracking-wider">Social</span>
      </div>
    </div>
  </div>
</template>
