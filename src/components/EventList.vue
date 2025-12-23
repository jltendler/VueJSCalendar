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
  <div class="event-list-panel">
    <div class="panel-header">
      <h3>Upcoming Tasks</h3>
      <button @click="$emit('open-modal')" class="add-btn" aria-label="Add Task">
        +
      </button>
    </div>

    <div class="list-container">
      <div v-if="events.length === 0" class="empty-state">
        No upcoming tasks.
      </div>
      
      <div v-for="event in events" :key="event.id" class="list-item">
        <div class="date-col">
          <span class="day">{{ format(event.date, 'dd') }}</span>
          <span class="month">{{ format(event.date, 'MMM') }}</span>
        </div>
        <div class="info-col">
          <EventBadge :event="event" />
          <span class="list-time">{{ format(event.date, 'EEEE') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-list-panel {
  background-color: var(--bg-elevated);
  border-left: 1px solid var(--border-color);
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.panel-header {
  padding: var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}

h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.add-btn {
  background-color: var(--accent-primary);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  padding: 0;
  transition: transform var(--transition-fast);
}

.add-btn:hover {
  transform: scale(1.1);
  background-color: var(--accent-secondary);
}

.list-container {
  flex-grow: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
}

.empty-state {
  color: var(--text-secondary);
  text-align: center;
  padding: var(--spacing-xl);
  font-style: italic;
}

.list-item {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
}

.list-item:hover {
  background-color: var(--bg-primary);
}

.date-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 45px;
  background-color: var(--bg-primary);
  border-radius: var(--radius-sm);
  padding: 4px;
}

.day {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--text-primary);
}

.month {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.info-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  overflow: hidden;
}

.list-time {
  font-size: 0.75rem;
  color: var(--text-secondary);
}
</style>
