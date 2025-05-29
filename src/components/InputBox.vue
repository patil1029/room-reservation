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

<style lang="sass" scoped>
.input-box
  display: flex
  flex-direction: column
  label
    font-size: 16px
    line-height: 1.7
    color: $coolgrey
  input
    border: 1px solid $darkblue;
    border-radius: 4px;
    padding: 12px
</style>
