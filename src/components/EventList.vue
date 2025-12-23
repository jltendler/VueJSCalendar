<script setup>
import { format } from 'date-fns'
import { ref } from 'vue'
import EventBadge from './EventBadge.vue'
import { useEvents } from '../composables/useEvents'

defineProps({
  events: {
    type: Array,
    required: true
  }
})

defineEmits(['open-modal'])

const { removeEvent } = useEvents()

const handleCheckbox = (id, event) => {
  // Add a small delay for visual feedback before deletion
  if (event.target.checked) {
    setTimeout(() => {
      removeEvent(id)
    }, 300)
  }
}
</script>

<template>
  <div class="bg-surface border-l border-[#333] w-full md:w-[320px] flex flex-col h-full">
    <div class="p-6 flex justify-between items-center border-b border-[#333]">
      <h3 class="m-0 text-lg text-plain">Upcoming Events</h3>
      <button 
        @click="$emit('open-modal')" 
        class="bg-[#646cff] text-white w-8 h-8 rounded-full flex items-center justify-center text-xl p-0 transition-transform duration-150 hover:scale-110 hover:bg-[#535bf2]"
        aria-label="Add Event"
      >
        +
      </button>
    </div>

    <div class="flex-grow overflow-y-auto p-4">
      <div v-if="events.length === 0" class="text-dim text-center p-8 italic">
        No events! (add some?)
      </div>
      
      <div v-for="event in events" :key="event.id" class="group flex gap-4 p-2 mb-2 rounded-lg transition-colors duration-150 hover:bg-page relative">
        <!-- Checkbox with custom style -->
        <div class="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
           <div class="flex items-center gap-2">
             <input 
               type="checkbox" 
               class="w-5 h-5 cursor-pointer accent-red-500 rounded border-dim"
               @change="(e) => handleCheckbox(event.id, e)"
               title="Delete"
             />
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse">
               <path d="M3 6h18"></path>
               <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
               <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
             </svg>
           </div>
        </div>

        <div class="flex flex-col items-center justify-center min-w-[45px] bg-page rounded p-1 group-hover:invisible">
          <span class="text-lg font-bold text-plain">{{ format(event.date, 'dd') }}</span>
          <span class="text-xs text-dim uppercase">{{ format(event.date, 'MMM') }}</span>
        </div>
        <div class="flex flex-col justify-center gap-1 overflow-hidden group-hover:pl-6 transition-all duration-200">
          <EventBadge :event="event" />
          <span class="text-xs text-dim">{{ format(event.date, 'EEEE') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
