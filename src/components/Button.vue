<script lang="ts" setup>
import { type PropType } from 'vue'
defineProps({
  buttonType: {
    type: String as PropType<'primary' | 'secondary' | 'textual'>,
    default: 'primary',
  },
  buttonSize: {
    type: String as PropType<'default' | 'small' | 'large'>,
    default: 'default',
  },
  iconPosition: {
    type: String as PropType<'left' | 'right' | 'none'>,
    default: 'none',
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
  <button class="btn" :class="[buttonClass, buttonSize, iconPosition, buttonType]">
    {{ label }}
  </button>
</template>

<style lang="sass" scoped>
.btn
  border-radius: 4px;

.signup-btn
  width: fit-content
  align-self: center

.primary
  color: $white
  background-color: $grey

.secondary
  color: $moderateblue
  border: 1px solid $moderateblue;
  background-color: $white

.large
  padding: 8px 38px
.default
  padding: 11.5px 26px
</style>
