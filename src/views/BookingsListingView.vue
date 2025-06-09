<script setup lang="ts">
import { ref, computed } from 'vue'
import BookingsListingTable from '@/components/BookingsListingTable.vue'
import Button from '@/components/Button.vue'

const searchTerm = ref('')

const filteredBookings = computed(() => {
  if (!searchTerm.value.trim()) return bookings.value
  return bookings.value.filter(
    (b) =>
      b.room.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      b.agenda.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

function filterBookings() {
  // This function can be expanded for more complex filtering
}
</script>
<template>
  <div class="bookings-container">
    <div class="heading">
      <h1>My Bookings</h1>
      <Button button-type="primary" label="Book Room" button-class="dash-book-room" />
    </div>
    <div class="header-table">
      <h2>My Bookings</h2>
      <div class="bookings-header">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search by Meeting agenda or Room Name"
          class="search-input"
        />
        <span @click="filterBookings" class="filter-button"
          >Filter
          <svg
            class="chevron-down"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M5 7L10 12L15 7" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>

      <BookingsListingTable />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.bookings-container
  background-color: $smokewhite
  height: 100vh
  display: flex
  flex-direction: column
  gap: 145px

  .heading
    display: flex
    justify-content: space-between
    align-items: center
    background: $white
    padding: 9px 1.5rem
    h1
      color: $darkblue
      font-weight: 600
      font-size: 14px

  .header-table
    padding: 1.5rem

  h2
    margin-bottom: 1rem;
    font-family: 'Open Sans Bold'
    font-size: 1.25rem;
    color: $neutral-gray-6;


  .bookings-header
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .search-input
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;


    .filter-button
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: 2px solid #aaa;
      background-color: #fff;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 600;
      color: #555;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
</style>
