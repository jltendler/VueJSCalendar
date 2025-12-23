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
    class="day-cell" 
    :class="{ 
      'is-today': day.isToday,
      'not-current-month': !day.isCurrentMonth
    }"
  >
    <div class="day-header">
      <span class="day-number">{{ day.date.getDate() }}</span>
    </div>
    
    <div class="events-container">
      <EventBadge 
        v-for="event in dayEvents" 
        :key="event.id" 
        :event="event" 
      />
    </div>
  </div>
</template>

<style scoped>
.day-cell {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-color);
  min-height: 100px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  transition: background-color var(--transition-fast);
  position: relative;
}

.day-cell:hover {
  background-color: color-mix(in srgb, var(--bg-elevated), white 2%);
}

.not-current-month {
  background-color: var(--bg-primary);
  opacity: 0.5;
}

.not-current-month .day-number {
  color: var(--text-secondary);
}

.is-today {
  background-color: color-mix(in srgb, var(--accent-primary), transparent 90%);
  border-color: var(--accent-primary);
}

.is-today .day-number {
  background-color: var(--accent-primary);
  color: white;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.day-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4px;
}

.day-number {
  font-size: 0.875rem;
  color: var(--text-primary);
  padding: 2px;
}

.events-container {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
