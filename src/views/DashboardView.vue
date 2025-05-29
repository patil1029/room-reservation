<script setup lang="ts">
import Button from '@/components/Button.vue'
function handleBookRoom() {
  alert('Booking modal or route goes here')
}
</script>

<template>
  <div class="dashboard">
    <div class="heading">
      <div class="text-content">
        <h1>Welcome</h1>
        <p>Room Booking System is a booking application designed for teams.</p>
      </div>
      <Button button-type="primary" label="Book Room" button-class="dash-book-room" />
    </div>
  </div>
</template>

<style lang="sass">
.dashboard
  background-color: $smokewhite
  height: 100vh
  .heading
    width: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center

    .text-content
      text-align: center

    .dash-book-room
      position: absolute
      right: 41px
</style>
