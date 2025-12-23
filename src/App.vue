<script setup>
import CalendarLayout from './components/CalendarLayout.vue'
</script>

<template>
  <div class="app-container">
    <CalendarLayout />
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  padding: var(--spacing-lg);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Or center if we want it centered vertically too, but usually calendars fill space */
}
</style>
