<script lang="ts" setup>
import SmallLogo from './logos/SmallLogo.vue'
import DashboardIcon from './icons/DashboardIcon.vue'
</script>

<template>
  <div class="sidebar-wrapper">
    <SmallLogo class="logo" />
    <aside class="sidebar">
      <nav>
        <router-link to="/">
          <i><DashboardIcon /></i>
          Dashboard</router-link
        >
        <router-link to="/bookings">Bookings</router-link>
      </nav>
    </aside>
  </div>
</template>

<style scoped lang="sass">
.sidebar-wrapper
  display: flex
  flex-direction: column
  background: $darkblue;
  align-items: center

  .logo
    padding: 23px 0px


.sidebar
  color: white;
  width: 81px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 66px


  nav
    display: flex;
    flex-direction: column;

    a
      color: white;
      margin: 0.5rem 0;
      text-decoration: none;
      display: flex
      flex-direction: column
      align-items: center
      padding: 10px 0px

      &.router-link-active
        font-weight: bold;
        background: $neutral-gray-6
        color: #61dafb;
</style>
