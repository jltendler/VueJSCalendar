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
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Add New Task</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Task Title</label>
          <input v-model="title" type="text" placeholder="e.g. Code Review" required autofocus />
        </div>

        <div class="form-group">
          <label>Date</label>
          <input v-model="date" type="date" required />
        </div>

        <div class="form-group">
          <label>Type</label>
          <select v-model="type">
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="important">Important</option>
            <option value="social">Social</option>
          </select>
        </div>

        <div class="modal-actions">
          <button type="button" @click="$emit('close')" class="btn-cancel">Cancel</button>
          <button type="submit" class="btn-save">Save Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--bg-elevated);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--border-color);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}

h2 {
  margin-top: 0;
  margin-bottom: var(--spacing-lg);
  color: var(--text-primary);
}

.form-group {
  margin-bottom: var(--spacing-md);
  text-align: left;
}

label {
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

input, select {
  width: 100%;
  padding: 10px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
}

input:focus, select:focus {
  outline: none;
  border-color: var(--accent-primary);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.btn-cancel {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.btn-cancel:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.btn-save {
  background-color: var(--accent-primary);
  color: white;
}

.btn-save:hover {
  background-color: var(--accent-secondary);
}
</style>
