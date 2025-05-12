<script lang="ts" setup>
import { type PropType } from 'vue'
defineProps({
  buttonType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
  label: {
    type: String,
    default: 'button',
  },
  buttonClass: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <button :type="buttonType" :class="buttonClass">
      {{ label }}
    </button>
  </div>
</template>
