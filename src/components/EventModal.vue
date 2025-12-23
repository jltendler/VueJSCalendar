<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'save'])

const title = ref('')
const date = ref('')
const type = ref('work')

const handleSubmit = () => {
  if (!title.value || !date.value) return
  
  emit('save', {
    title: title.value,
    date: date.value,
    type: type.value
  })
  
  emit('close')
}
</script>

<template>
  <div class="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-sm flex justify-center items-center z-50" @click.self="$emit('close')">
    <div class="bg-surface p-8 rounded-xl w-full max-w-[400px] border border-[#333] shadow-2xl shadow-black/30">
      <h2 class="mt-0 mb-6 text-2xl text-copy">Add New Task</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="mb-4 text-left">
          <label class="block mb-1 text-dim text-sm">Task Title</label>
          <input 
            v-model="title" 
            type="text" 
            placeholder="e.g. Code Review" 
            required 
            autofocus 
            class="w-full p-2.5 bg-page border border-[#333] rounded-lg text-copy text-base focus:outline-none focus:border-[#646cff]"
          />
        </div>

        <div class="mb-4 text-left">
          <label class="block mb-1 text-dim text-sm">Date</label>
          <input 
            v-model="date" 
            type="date" 
            required 
            class="w-full p-2.5 bg-page border border-[#333] rounded-lg text-copy text-base focus:outline-none focus:border-[#646cff]"
          />
        </div>

        <div class="mb-4 text-left">
          <label class="block mb-1 text-dim text-sm">Type</label>
          <select 
            v-model="type"
            class="w-full p-2.5 bg-page border border-[#333] rounded-lg text-copy text-base focus:outline-none focus:border-[#646cff]"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="important">Important</option>
            <option value="social">Social</option>
          </select>
        </div>

        <div class="flex justify-end gap-4 mt-8">
          <button 
            type="button" 
            @click="$emit('close')" 
            class="bg-transparent border border-[#333] text-dim py-2 px-4 rounded-lg transition-colors duration-150 hover:border-copy hover:text-copy"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            class="bg-[#646cff] text-white py-2 px-4 rounded-lg transition-colors duration-150 hover:bg-[#535bf2]"
          >
            Save Task
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
