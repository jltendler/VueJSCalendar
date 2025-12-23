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
  <div class="calendar-grid">
    <div class="weekdays-row">
      <div 
        v-for="day in weekDays" 
        :key="day" 
        class="weekday-header"
      >
        {{ day }}
      </div>
    </div>

    <div class="days-grid">
      <DayCell 
        v-for="dayObj in days" 
        :key="dayObj.key" 
        :day="dayObj"
        :events="events"
      />
    </div>
  </div>
</template>

<style scoped>
.calendar-grid {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.weekdays-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: var(--bg-elevated);
  border-bottom: 1px solid var(--border-color);
}

.weekday-header {
  padding: 10px;
  text-align: center;
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* Use auto-fill rows but min height is handled in DayCell */
  background-color: var(--bg-primary); 
  gap: 1px; /* Creates grid lines if background is contrasting, but we use borders in cells */
}
</style>
