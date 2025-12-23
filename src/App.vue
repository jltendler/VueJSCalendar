<script setup>
import { ref } from 'vue'
import CalendarLayout from './components/CalendarLayout.vue'
import EventList from './components/EventList.vue'
import EventModal from './components/EventModal.vue'
import { useEvents } from './composables/useEvents'

const { sortedEvents, addEvent } = useEvents()
const showModal = ref(false)

const handleSaveEvent = (eventData) => {
  addEvent(eventData)
}
</script>

<template>
  <div class="app-layout">
    <header class="main-header">
      <div class="logo">
        <span class="icon">⚡</span>
        <h1>The Taskinator</h1>
      </div>
    </header>

    <main class="content-wrapper">
      <div class="calendar-section">
        <CalendarLayout />
      </div>
      
      <aside class="sidebar">
        <EventList 
          :events="sortedEvents" 
          @open-modal="showModal = true"
        />
      </aside>
    </main>

    <Transition name="fade">
      <EventModal 
        v-if="showModal" 
        @close="showModal = false"
        @save="handleSaveEvent"
      />
    </Transition>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--bg-primary);
  overflow: hidden;
}

.main-header {
  height: 60px;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-elevated);
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.icon {
  font-size: 1.5rem;
  color: var(--accent-primary);
}

.main-header h1 {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  letter-spacing: -0.02em;
}

.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.calendar-section {
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
  display: flex;
  justify-content: center;
}

.sidebar {
  width: 320px;
  flex-shrink: 0;
  border-left: 1px solid var(--border-color);
  background-color: var(--bg-elevated);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: 300px; /* Fixed height for sidebar on mobile */
    border-left: none;
    border-top: 1px solid var(--border-color);
  }
}
</style>
