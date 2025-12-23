<script setup>
defineProps({
  currentMonthYear: {
    type: String,
    required: true
  }
})

defineEmits(['prev', 'next', 'today'])
</script>

<template>
  <header class="calendar-header">
    <div class="title-section">
      <h1>{{ currentMonthYear }}</h1>
    </div>

    <div class="actions">
      <button @click="$emit('today')" class="today-btn">Today</button>
      <div class="nav-buttons">
        <button @click="$emit('prev')" class="nav-btn" aria-label="Previous Month">
          &lt;
        </button>
        <button @click="$emit('next')" class="nav-btn" aria-label="Next Month">
          &gt;
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  margin-bottom: var(--spacing-md);
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.today-btn {
  border: 1px solid var(--border-color);
  background-color: var(--bg-elevated);
  padding: 4px 12px;
  border-radius: var(--radius-md);
  color: var(--text-primary);
  transition: all var(--transition-fast);
}

.today-btn:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.nav-buttons {
  display: flex;
  background-color: var(--bg-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.nav-btn {
  padding: 4px 12px;
  color: var(--text-primary);
  font-size: 1.1rem;
  transition: background-color var(--transition-fast);
}

.nav-btn:hover {
  background-color: var(--border-hover);
}

.nav-btn:first-child {
  border-right: 1px solid var(--border-color);
}
</style>
