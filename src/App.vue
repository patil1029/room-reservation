<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Sidebar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <Sidebar />
    <main class="main-content">
      <Header />
      <RouterView />
      <Footer />
    </main>
  </div>
</template>

<style scoped lang="sass">
.layout
  display: flex

  .main-content
    flex: 1
    display: flex
    flex-direction: column
</style>
