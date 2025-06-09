<script lang="ts" setup>
import InputBox from '@/components/InputBox.vue'
import Button from '@/components/Button.vue'
import RightSideImage from '@/assets/image.png'
import { ref } from 'vue'
import LargeLogo from '@/components/logos/LargeLogo.vue'
import OtpInput from '@/components/OtpInput.vue'
import Googleicon from '@/components/icons/Googleicon.vue'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const props = defineProps({
  slug: {
    type: String,
  },
})

const userStore = useUserStore()

const inputValues = ref({
  email: '',
  password: '',
  confirmpassword: '',
})

const validationErrors = ref({
  email: '',
  password: '',
  confirmPassword: '',
  otp: '',
})

const otpValue = ref('')

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const name = target.name as string
  const value = target.value
  inputValues.value[name as keyof typeof inputValues.value] = value
}

const validateForm = () => {
  // Reset all errors
  validationErrors.value.email = ''
  validationErrors.value.password = ''
  validationErrors.value.confirmPassword = ''
  validationErrors.value.otp = ''

  let isValid = true
  if (props.slug === 'login' || props.slug === 'signup') {
    // Email validation
    if (!inputValues.value.email.trim()) {
      console.log(inputValues.value.email.trim())

      validationErrors.value.email = 'Email is required.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.value.email)) {
      validationErrors.value.email = 'Please enter a valid email.'
      isValid = false
    }

    // Password validation
    if (!inputValues.value.password.trim()) {
      validationErrors.value.password = 'Password is required.'
      isValid = false
    } else if (inputValues.value.password.length < 6) {
      validationErrors.value.password = 'Password must be at least 6 characters.'
      isValid = false
    }

    if (props.slug === 'signup') {
      // Confirm Password Validation
      if (!inputValues.value.confirmpassword.trim()) {
        validationErrors.value.confirmPassword = 'Password is required.'
        isValid = false
      } else if (inputValues.value.password !== inputValues.value.confirmpassword) {
        validationErrors.value.password = 'Confirm-Password should match Password field.'
        isValid = false
      }
    }
  } else if (props.slug === 'otp') {
    if (!otpValue.value.trim()) {
      validationErrors.value.otp = 'OTP is required.'
      isValid = false
    } else if (!/^\d+$/.test(otpValue.value)) {
      validationErrors.value.otp = 'OTP must contain only numbers.'
      isValid = false
    } else if (otpValue.value.length !== 6) {
      validationErrors.value.otp = 'OTP must be exactly 6 digits.'
      isValid = false
    }
  }

  if (!isValid) {
    setTimeout(() => {
      validationErrors.value = {
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
      }
    }, 5000)
  }

  return isValid
}

const handleSubmit = async () => {
  userStore.error = ''
  if (validateForm()) {
    if (props.slug === 'login') {
      await userStore.login({ email: inputValues.value.email, password: inputValues.value.password })
    } else if (props.slug === 'signup') {
      await userStore.signupFirstStep({
        fullname: 'sdad',
        email: inputValues.value.email,
        password: inputValues.value.password,
      })
    }
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="signup">
      <LargeLogo />
      <div class="input-boxes">
        <h1 v-if="slug === 'login'">Meeting Room Sign In</h1>
        <h1 v-if="slug === 'signup'">Meeting Room Sign Up</h1>
        <div v-if="slug !== 'otp'">
          <InputBox name="email" label="Email" type="email" :model-value="inputValues.email" @update="handleInput" />
          <InputBox
            name="password"
            label="Password"
            type="password"
            v-model="inputValues.password"
            @update="handleInput"
          />
        </div>
        <InputBox
          v-if="slug !== 'login' && slug !== 'otp'"
          name="confirmpassword"
          label="Confirm-Password"
          type="password"
          v-model="inputValues.confirmpassword"
          @update="handleInput"
        />
        <OtpInput v-if="slug === 'otp'" v-model="otpValue" />
        <RouterLink class="signup-link" v-if="slug === 'login'" to="/auth/signup">Create Account </RouterLink>
        <Button
          button-class="signup-btn"
          label="Signup"
          button-type="primary"
          button-size="large"
          @click="handleSubmit"
        />

        <div class="divide-line" v-if="slug === 'login'">
          <span>Or</span>
        </div>
        <button class="google-login-btn" @click="userStore.googleSSOLogin()" v-if="slug === 'login'">
          <Googleicon />
          Login with Google
        </button>
      </div>
      <div class="validation-errors">
        <span v-if="slug === 'login' || slug === 'signup'">
          <p>{{ validationErrors.email }}</p>
          <p>{{ validationErrors.password }}</p>
          <p v-if="slug === 'signup'">{{ validationErrors.confirmPassword }}</p>
        </span>
        <p v-if="slug === 'otp'">{{ validationErrors.otp }}</p>
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
  height: 100vh
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
      margin-block-end: 0px
    .input-boxes
      display: flex
      flex-direction: column
      gap: 38px
      .signup-link
        text-decoration: none
        color: $darkblue
    .google-login-btn
      display: flex
      align-items: center
      gap: 100px
    .divide-line
      display: flex;
      align-items: center;
      text-align: center;
      color: #666;
      &::before,
      &::after
        content: "";
        flex: 1;
        border-bottom: 1px solid #ccc;
      span
        padding: 0 1rem;
        font-size: 14px;
        white-space: nowrap;
    .validation-errors
      color: red

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
