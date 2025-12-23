<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})

const getEventClasses = (type) => {
  switch (type) {
    case 'work': return 'bg-blue-500/15 border-blue-500 hover:bg-blue-500/30 text-blue-100'
    case 'personal': return 'bg-green-500/15 border-green-500 hover:bg-green-500/30 text-green-100'
    case 'important': return 'bg-orange-500/15 border-orange-500 hover:bg-orange-500/30 text-orange-100'
    case 'social': return 'bg-purple-500/15 border-purple-500 hover:bg-purple-500/30 text-purple-100'
    default: return 'bg-gray-500/15 border-gray-500 hover:bg-gray-500/30 text-gray-100'
  }
}

const getDotColor = (type) => {
    switch (type) {
    case 'work': return 'bg-blue-500'
    case 'personal': return 'bg-green-500'
    case 'important': return 'bg-orange-500'
    case 'social': return 'bg-purple-500'
    default: return 'bg-gray-500'
  }
}
</script>

<template>
  <div 
    class="flex items-center gap-1 px-1.5 py-0.5 border-l-2 rounded-sm text-xs cursor-pointer truncate transition-all duration-150 hover:translate-x-px"
    :class="getEventClasses(event.type)"
  >
    <span class="w-1.5 h-1.5 rounded-full shrink-0" :class="getDotColor(event.type)"></span>
    <span class="truncate">{{ event.title }}</span>
  </div>
</template>
