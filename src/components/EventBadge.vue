<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})

const getEventColor = (type) => {
  switch (type) {
    case 'work': return 'var(--event-blue)'
    case 'personal': return 'var(--event-green)'
    case 'important': return 'var(--event-orange)'
    case 'social': return 'var(--event-purple)'
    default: return 'var(--text-secondary)'
  }
}
</script>

<template>
  <div 
    class="event-badge" 
    :style="{ '--badge-color': getEventColor(event.type) }"
  >
    <span class="dot"></span>
    <span class="title">{{ event.title }}</span>
  </div>
</template>

<style scoped>
.event-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  background-color: color-mix(in srgb, var(--badge-color), transparent 85%);
  border-left: 2px solid var(--badge-color);
  border-radius: 2px;
  font-size: 0.75rem;
  color: var(--text-primary);
  margin-bottom: 2px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all var(--transition-fast);
}

.event-badge:hover {
  background-color: color-mix(in srgb, var(--badge-color), transparent 70%);
  transform: translateX(1px);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--badge-color);
  flex-shrink: 0;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
