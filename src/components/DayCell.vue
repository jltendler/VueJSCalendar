<script setup>
import EventBadge from './EventBadge.vue'
import { isSameDay } from 'date-fns'

const props = defineProps({
  day: {
    type: Object,
    required: true
  },
  events: {
    type: Array,
    default: () => []
  }
})

const dayEvents = props.events.filter(e => isSameDay(e.date, props.day.date))
</script>

<template>
  <div 
    class="min-h-[100px] p-1 flex flex-col relative transition-colors duration-150 border border-[#333] bg-surface hover:bg-[#2a2a2a]"
    :class="{ 
      'bg-accent-primary/10 border-accent-primary': day.isToday,
      'bg-page opacity-50': !day.isCurrentMonth
    }"
  >
    <div class="flex justify-end mb-1">
      <span 
        class="text-sm p-0.5"
        :class="{ 'bg-accent-primary text-white w-6 h-6 flex items-center justify-center rounded-full font-bold': day.isToday, 'text-copy': !day.isToday && day.isCurrentMonth, 'text-dim': !day.isCurrentMonth }"
      >
        {{ day.date.getDate() }}
      </span>
    </div>
    
    <div class="flex flex-col gap-[2px] grow overflow-y-auto">
      <EventBadge 
        v-for="event in dayEvents" 
        :key="event.id" 
        :event="event" 
      />
    </div>
  </div>
</template>
