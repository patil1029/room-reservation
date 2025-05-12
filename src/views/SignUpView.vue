<script lang="ts" setup>
import InputBox from '@/components/InputBox.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const inputValues = ref({
  sigupemail: '',
  siguppassword: '',
  sigupconfirmpassword: '',
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const name = target.name as string
  const value = target.value
  inputValues.value[name as keyof typeof inputValues.value] = value
}

const handleSubmit = () => {}
</script>

<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <InputBox
      name="sigupemail"
      label="Email"
      type="email"
      :model-value="inputValues.sigupemail"
      @update="handleInput"
    />
    <InputBox
      name="siguppassword"
      label="Password"
      type="password"
      v-model="inputValues.siguppassword"
      @update="handleInput"
    />
    <InputBox
      name="sigupconfirmpassword"
      label="Confirm-Password"
      type="password"
      v-model="inputValues.sigupconfirmpassword"
      @update="handleInput"
    />
    <Button type="submit" button-class="signup-btn" label="Signup" />
  </div>
</template>
