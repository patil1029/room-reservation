<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const otpLength = 6
const otp = ref(Array(otpLength).fill(''))
const otpInput = ref<HTMLInputElement[]>([])

const handleInput = (index: number) => {
  if (otp.value[index].length === 1 && index < otpLength - 1) {
    otpInput.value[index + 1].focus()
  }
}

const handleBackspace = (index: number) => {
  if (otp.value[index]) {
    // Clear current box
    otp.value[index] = ''
  } else if (index > 0) {
    // Move back and clear
    otpInput.value[index - 1].focus()
    otp.value[index - 1] = ''
  }
}

watch(
  otp,
  () => {
    emit('update:modelValue', otp.value.join(''))
  },
  { deep: true }
)
</script>

<template>
  <div class="otp-container">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      ref="otpInput"
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="otp-box"
      v-model="otp[index]"
      @input="handleInput(index)"
      @keydown.backspace.prevent="handleBackspace(index)"
    />
  </div>
</template>

<style scoped>
.otp-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 16px;
}
.otp-box {
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: 2px solid #a3c1d1;
  border-radius: 6px;
  outline: none;
  transition: border 0.2s ease;
}
.otp-box:focus {
  border-color: #007bff;
}
</style>
