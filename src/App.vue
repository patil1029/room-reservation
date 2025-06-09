<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useUserStore } from './stores/userStore'

import Sidebar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
import { watch } from 'vue'
const route = useRoute()
const userStore = useUserStore()

watch(
  () => userStore.error,
  () => {
    if (userStore.error) {
      setTimeout(() => {
        userStore.error = ''
      }, 5000)
    }
  }
)
</script>

<template>
  <div class="layout">
    <Sidebar v-if="route.meta.requiresAuth" />
    <main class="main-content">
      <Header v-if="route.meta.requiresAuth" />
      <div class="error" v-if="userStore.error">
        <p>{{ userStore.error }}</p>
      </div>
      <RouterView />
      <Footer v-if="route.meta.requiresAuth" />
    </main>
    <Loader />
  </div>
</template>

<style scoped lang="sass">
.layout
  display: flex

  .main-content
    flex: 1
    display: flex
    flex-direction: column
  .error
    position: absolute
    height: auto
    margin-left: 20px
    margin-top: 20px
    background: $grey
    color: $white
    padding: 16px
    border-radius: 8px
    p
      margin: 0px
</style>
