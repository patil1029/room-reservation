<script setup lang="ts">
import InputBox from '@/components/InputBox.vue'
import { ref } from 'vue'

const agenda = ref('')
const date = ref('')
const startTime = ref('')
const endTime = ref('')
const guest = ref('')

const handleCancel = () => {
  // Logic to reset or close the form
}

const handleBookRoom = () => {
  // Logic to submit booking
}
</script>

<template>
  <div class="booking-form">
    <form @submit.prevent="handleBookRoom">
      <InputBox v-model="agenda" label="Agenda" name="agenda" />

      <div class="room-selection">
        <label>Select Rooms</label>
        <div class="room-tags">
          <span class="room blue">Room A | Pax. 1</span>
          <span class="room green">Room B | Pax. 3</span>
          <span class="room lightgreen">Room C | Pax. 5</span>
          <span class="room indigo">Room D | Pax. 4</span>
          <span class="room red">Room E | Pax. 5</span>
        </div>
      </div>

      <div class="date-time">
        <InputBox v-model="date" label="Date" name="date" placeholder="DD/MMM/YYYY" />
        <InputBox v-model="startTime" label="Start time" name="start-time" />
        <InputBox v-model="endTime" label="End time" name="end-time" />
      </div>

      <InputBox v-model="guest" label="Members / Guest" name="guest" />

      <div class="form-actions">
        <button type="button" class="btn cancel" @click="handleCancel">Cancel</button>
        <button type="submit" class="btn submit">Book Room</button>
      </div>
    </form>

    <div class="legend">
      <span class="legend-item room-a">Room A</span>
      <span class="legend-item room-b">Room B</span>
      <span class="legend-item room-c">Room C</span>
      <span class="legend-item room-d">Room D</span>
      <span class="legend-item room-e">Room E</span>
      <span class="legend-item not-available">Not Available</span>
      <span class="legend-item selected">Selected Room</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.booking-form
  background-color: #f9f9f9
  padding: 2rem
  border-radius: 10px
  max-width: 1000px
  margin: auto
  font-family: sans-serif

form
  display: flex
  flex-direction: column
  gap: 1.5rem

.room-selection
  label
    display: block
    font-weight: 500
    margin-bottom: 0.5rem
  .room-tags
    display: flex
    gap: 0.5rem
    flex-wrap: wrap
  .room
    padding: 0.4rem 0.8rem
    border-radius: 20px
    font-size: 14px
    font-weight: 500
    color: white
    &.blue
      background-color: #87CEFA
    &.green
      background-color: #9ACD32
    &.lightgreen
      background-color: #B0E57C
    &.indigo
      background-color: #A4B3E9
    &.red
      background-color: #8B0000

.date-time
  display: flex
  gap: 1rem
  > *
    flex: 1

.form-actions
  display: flex
  justify-content: flex-end
  gap: 1rem

.btn
  padding: 10px 20px
  border-radius: 5px
  border: none
  font-weight: bold
  cursor: pointer
  &.cancel
    background-color: white
    border: 1px solid #000
  &.submit
    background-color: #2b3e44
    color: white

.legend
  display: flex
  gap: 1rem
  margin-top: 2rem
  flex-wrap: wrap
  .legend-item
    display: inline-block
    padding: 0.5rem 1rem
    border-radius: 10px
    font-size: 14px
    &.room-a
      background-color: #cce5ff
    &.room-b
      background-color: #f5fcbf
    &.room-c
      background-color: #fde8e8
    &.room-d
      background-color: #fbd4ff
    &.room-e
      background-color: #b3f0ff
    &.not-available
      background-color: #f8d7da
    &.selected
      background-color: #e6ccff
</style>
