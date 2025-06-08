<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
</script>

<template>
  <div class="loader-overlay" v-if="userStore.loading">
    <div class="spinner"></div>
  </div>
</template>

<style scoped lang="sass">
.loader-overlay
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: rgba(255, 255, 255, 0.9)
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999

.spinner
  width: 50px
  height: 50px
  border: 5px solid #ccc
  border-top: 5px solid #007bff
  border-radius: 50%
  animation: spin 1s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
