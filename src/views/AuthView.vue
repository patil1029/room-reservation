<script lang="ts" setup>
import InputBox from '@/components/InputBox.vue'
import Button from '@/components/Button.vue'
import RightSideImage from '@/assets/image.png'
import { ref } from 'vue'
import LargeLogo from '@/components/logos/LargeLogo.vue'
import OtpInput from '@/components/OtpInput.vue'

const props = defineProps({
  slug: {
    type: String,
  },
})

const inputValues = ref({
  sigupemail: '',
  siguppassword: '',
  sigupconfirmpassword: '',
})

const otpValue = ref('')

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const name = target.name as string
  const value = target.value
  inputValues.value[name as keyof typeof inputValues.value] = value
}

const handleSubmit = () => {
  console.log(otpValue.value)
}
</script>

<template>
  <div class="auth-page">
    <div class="signup">
      <LargeLogo />
      <div class="input-boxes">
        <h1>Meeting Room Sign In</h1>
        <div v-if="slug !== 'otp'">
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
        </div>
        <InputBox
          v-if="slug !== 'login' && slug !== 'otp'"
          name="sigupconfirmpassword"
          label="Confirm-Password"
          type="password"
          v-model="inputValues.sigupconfirmpassword"
          @update="handleInput"
        />
        <OtpInput v-if="slug === 'otp'" v-model="otpValue" />
        <Button
          button-class="signup-btn"
          label="Signup"
          button-type="secondary"
          button-size="large"
          @click="handleSubmit"
        />
      </div>
    </div>
    <div class="image">
      <img :src="RightSideImage" :alt="slug + '-image'" />
    </div>
  </div>
</template>

<style lang="sass">
.auth-page
  display: flex
  align-items: center
  height: 100%
  .signup
    width: 46%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    h1
      font-size: 36px
      line-height: 1.5
    .input-boxes
      display: flex
      flex-direction: column
      gap: 16px

  .image
    width: 54%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    background-color: $darkblue
    img
      width: 653px
      height: 652px
</style>
