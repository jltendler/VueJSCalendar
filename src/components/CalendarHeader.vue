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
  <header class="flex justify-between items-center py-4 mb-4">
    <div class="title-section">
      <h1 class="text-2xl font-semibold text-plain m-0">{{ currentMonthYear }}</h1>
    </div>

    <div class="flex items-center gap-4">
      <button 
        @click="$emit('today')" 
        class="border border-white/20 bg-surface px-3 py-1 rounded-lg text-white font-medium transition-all duration-150 hover:border-white hover:text-white"
      >
        Today
      </button>
      <div class="flex bg-surface rounded-lg border border-[#333] overflow-hidden">
        <button 
          @click="$emit('prev')" 
          class="px-3 py-1 text-plain text-lg transition-colors duration-150 hover:bg-[#4a4a4a] border-r border-[#333]" 
          aria-label="Previous Month"
        >
          &lt;
        </button>
        <button 
          @click="$emit('next')" 
          class="px-3 py-1 text-plain text-lg transition-colors duration-150 hover:bg-[#4a4a4a]" 
          aria-label="Next Month"
        >
          &gt;
        </button>
      </div>
    </div>
  </header>
</template>
