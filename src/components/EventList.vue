<script setup>
import { format } from 'date-fns'
import EventBadge from './EventBadge.vue'

defineProps({
  events: {
    type: Array,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <div class="bg-surface border-l border-[#333] w-full md:w-[320px] flex flex-col h-full">
    <div class="p-6 flex justify-between items-center border-b border-[#333]">
      <h3 class="m-0 text-lg text-copy">Upcoming Tasks</h3>
      <button 
        @click="$emit('open-modal')" 
        class="bg-[#646cff] text-white w-8 h-8 rounded-full flex items-center justify-center text-xl p-0 transition-transform duration-150 hover:scale-110 hover:bg-[#535bf2]"
        aria-label="Add Task"
      >
        +
      </button>
    </div>

    <div class="flex-grow overflow-y-auto p-4">
      <div v-if="events.length === 0" class="text-dim text-center p-8 italic">
        No upcoming tasks.
      </div>
      
      <div v-for="event in events" :key="event.id" class="flex gap-4 p-2 mb-2 rounded-lg transition-colors duration-150 hover:bg-page">
        <div class="flex flex-col items-center justify-center min-w-[45px] bg-page rounded p-1">
          <span class="text-lg font-bold text-copy">{{ format(event.date, 'dd') }}</span>
          <span class="text-xs text-dim uppercase">{{ format(event.date, 'MMM') }}</span>
        </div>
        <div class="flex flex-col justify-center gap-1 overflow-hidden">
          <EventBadge :event="event" />
          <span class="text-xs text-dim">{{ format(event.date, 'EEEE') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
