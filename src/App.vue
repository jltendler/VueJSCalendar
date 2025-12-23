<script setup>
import { ref } from 'vue'
import CalendarLayout from './components/CalendarLayout.vue'
import EventList from './components/EventList.vue'
import EventModal from './components/EventModal.vue'
import { useEvents } from './composables/useEvents'

const { sortedEvents, addEvent } = useEvents()
const showModal = ref(false)
const prefilledDate = ref('')

const handleSaveEvent = (eventData) => {
  addEvent(eventData)
  prefilledDate.value = ''
}

const openModal = (date = '') => {
  prefilledDate.value = date
  showModal.value = true
}
</script>

<template>
  <div class="flex flex-col h-screen bg-page overflow-hidden">
    <header class="h-[60px] px-6 flex items-center border-b border-[#333] bg-surface z-10">
      <div class="flex items-center gap-2">
        <span class="text-2xl text-[#646cff]">⚡</span>
        <h1 class="text-xl font-bold bg-gradient-to-r from-[#646cff] to-[#535bf2] bg-clip-text text-transparent m-0 tracking-tight">
          The Eventinator
        </h1>
      </div>
    </header>

    <main class="flex flex-1 overflow-hidden flex-col md:flex-row">
      <div class="flex-1 p-6 overflow-y-auto flex justify-center">
        <CalendarLayout @add-event="openModal" />
      </div>
      
      <aside class="w-full md:w-[320px] shrink-0 border-t md:border-t-0 md:border-l border-[#333] bg-surface h-[300px] md:h-auto">
        <EventList 
          :events="sortedEvents" 
          @open-modal="openModal()"
        />
      </aside>
    </main>

    <Transition 
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <EventModal 
        v-if="showModal" 
        :initialDate="prefilledDate"
        @close="showModal = false"
        @save="handleSaveEvent"
      />
    </Transition>
  </div>
</template>
