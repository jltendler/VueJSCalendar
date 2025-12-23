<script setup>
import DayCell from './DayCell.vue'

defineProps({
  days: {
    type: Array,
    required: true
  },
  weekDays: {
    type: Array,
    required: true
  },
  events: {
    type: Array, // All events, DayCell will filter
    default: () => []
  }
})
</script>

<template>
  <div class="flex flex-col rounded-xl overflow-hidden border border-[#333]">
    <div class="grid grid-cols-7 bg-surface border-b border-[#333]">
      <div 
        v-for="day in weekDays" 
        :key="day" 
        class="p-2 text-center font-medium text-dim text-sm tracking-wide uppercase"
      >
        {{ day }}
      </div>
    </div>

    <div class="grid grid-cols-7 bg-page gap-[1px]">
      <DayCell  
        v-for="dayObj in days" 
        :key="dayObj.key" 
        :day="dayObj"
        :events="events"
      />
    </div>
  </div>
</template>
