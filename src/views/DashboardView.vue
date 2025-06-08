<script setup lang="ts">
import BookingRoomForm from '@/components/BookingRoomForm.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

// const router = useRouter()
const bookRoomToggle = ref(false)
function handleBookRoom() {
  alert('Booking modal or route goes here')
}
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-template" v-if="!bookRoomToggle">
      <div class="heading">
        <div class="text-content">
          <h1>Welcome</h1>
          <p>Room Booking System is a booking application designed for teams.</p>
        </div>
        <Button
          button-type="primary"
          label="Book Room"
          button-class="dash-book-room"
          @click="bookRoomToggle = !bookRoomToggle"
        />
      </div>
      <div class="calender"></div>
    </div>

    <div class="book-room-template" v-else>
      <div class="heading">
        <p><span @click="bookRoomToggle = !bookRoomToggle">Dashboard</span> / Book Room</p>
      </div>
      <BookingRoomForm />
    </div>
  </div>
</template>

<style lang="sass">
.dashboard
  background-color: $smokewhite
  height: 100vh
  .dashboard-template
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
  .book-room-template
    display: flex
    flex-direction: column
    gap: 67px
    .heading
      padding: 9px 1.5rem
      background: $white
    span
      color: $darkblue
</style>
