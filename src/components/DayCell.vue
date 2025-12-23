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

import { computed } from 'vue'
import { format } from 'date-fns'

const dayEvents = computed(() => {
  return props.events.filter(e => isSameDay(e.date, props.day.date))
})

const emit = defineEmits(['add-event'])

const handleAdd = () => {
  emit('add-event', format(props.day.date, 'yyyy-MM-dd'))
}
</script>

<template>
  <div 
    class="group min-h-[100px] p-1 flex flex-col relative transition-colors duration-150 border border-[#333] bg-surface hover:bg-[#2a2a2a]"
    :class="{ 
      'bg-page opacity-50': !day.isCurrentMonth
    }"
  >
  <div class="flex justify-between">
    <div class="mb-1">
      <span v-if="dayEvents.length > 0" class="text-xs p-0.5 text-dim">
      {{ dayEvents.length }} event{{ dayEvents.length > 1 ? 's' : '' }}</span>
    </div>
    <div class="justify-end mb-1">
      <span 
        class="text-sm p-0.5"
        :class="{ 'bg-yellow-500 text-page w-6 h-6 flex items-center justify-center rounded-full font-bold': day.isToday, 'text-plain': !day.isToday && day.isCurrentMonth, 'text-dim': !day.isCurrentMonth }"
      >
        {{ day.date.getDate() }}
      </span>
    </div>
  </div>
    
    <div class="flex flex-col gap-[2px] grow overflow-y-auto mb-6">
      <EventBadge 
        v-for="event in dayEvents" 
        :key="event.id" 
        :event="event" 
      />
    </div>

    <!-- Quick Add Button -->
    <button 
      @click.stop="handleAdd"
      class="absolute bottom-2 right-2 w-6 h-6 bg-[#646cff] text-white rounded-full flex items-center justify-center text-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 shadow-lg z-10"
      title="Add Event for this day"
    >
      +
    </button>
  </div>
</template>
