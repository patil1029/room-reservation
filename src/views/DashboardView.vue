<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
console.log(counter)
</script>

<template>
  <div>
    counter:
    <h1>Hello World {{ counter.count }}</h1>
  </div>
</template>
