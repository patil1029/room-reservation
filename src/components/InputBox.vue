<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Please enter the value',
  },
  modelValue: {
    type: String,
    default: '',
  },
  // error: {
  //   type: String,
  //   default: '',
  // },
})
</script>

<template>
  <div class="input-box">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      autocomplete="true"
      @input="(e) => $emit('update', e)"
    />
    <!-- <span v-if="error" class="error">{{ error }}</span> -->
  </div>
</template>
