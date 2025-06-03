<script lang="ts" setup>
import { computed, ref } from 'vue'
import Edit from '@/components/icons/Edit.vue'
import Delete from '@/components/icons/Delete.vue'

const bookings = ref([
  {
    room: 'A',
    date: '15/05/2024',
    startTime: '11:30 AM',
    endTime: '12:30 AM',
    bookedDateTime: '15/05/2024, 10:30 AM',
    pax: 1,
    agenda: 'Standup',
    status: 'In Progress',
  },
  {
    room: 'B',
    date: '15/05/2024',
    startTime: '1:00 PM',
    endTime: '1:30 PM',
    bookedDateTime: '15/05/2024, 11:30 AM',
    pax: 2,
    agenda: 'Catch-up',
    status: 'Upcoming',
  },
  {
    room: 'C',
    date: '24/11/2021',
    startTime: '10:30 AM',
    endTime: '11:00 AM',
    bookedDateTime: '15/05/2024, 09:30 AM',
    pax: 4,
    agenda: 'Retrospective',
    status: 'Completed',
  },
  {
    room: 'D',
    date: '15/05/2024',
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    bookedDateTime: '15/05/2024, 09:30 AM',
    pax: 4,
    agenda: 'Sprint Planning',
    status: 'Upcoming',
  },
  {
    room: 'E',
    date: '15/05/2024',
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    bookedDateTime: '15/05/2024, 08:50 AM',
    pax: 2,
    agenda: 'Sprint Planning',
    status: 'Upcoming',
  },
])

const searchTerm = ref('')

const filteredBookings = computed(() => {
  if (!searchTerm.value.trim()) return bookings.value
  return bookings.value.filter(
    (b) =>
      b.room.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      b.agenda.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>

<template>
  <div class="bookings-table-wrapper">
    <table class="bookings-table">
      <thead>
        <tr>
          <th>Room Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Booked Date & Time</th>
          <th>Pax.</th>
          <th>Meeting Agenda</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(booking, index) in filteredBookings" :key="index">
          <td>{{ booking.room }}</td>
          <td>{{ booking.date }}</td>
          <td>{{ booking.startTime }}</td>
          <td>{{ booking.endTime }}</td>
          <td>{{ booking.bookedDateTime }}</td>
          <td>{{ booking.pax }}</td>
          <td>{{ booking.agenda }}</td>
          <td>
            <span :class="['status-dot', booking.status.toLowerCase()]">●</span>
            {{ booking.status }}
          </td>
          <td class="actions">
            <button title="Edit"><Edit /></button>
            <button title="View"><Delete /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass">
.bookings-table
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid
    border-top-color: $greyshadow
    background-color: $white

    th,
    td
      padding: 0.75rem;
      border-bottom: 1px solid #eee;
      text-align: left;


    .status-dot
      margin-right: 0.25rem;


    .in.progress
      color: orange;

    .upcoming
      color: #666;

    .completed
      color: #777;


    .actions
      display: flex;
      gap: 0.5rem;

      button
        background: none;
        border: none;
        cursor: pointer;
</style>
