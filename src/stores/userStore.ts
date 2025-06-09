import axios from "axios";
import { defineStore } from "pinia";
import router from '@/router';
import type { loginPayload, singupFirstStep, tokenContentType } from "@/types";
import noAuthApi from "@/api/NoAuth";

const parseJwt = (token: string): tokenContentType => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return null
  }
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    tempAccessToken: '' as String | null,
    accessToken: '' as String | null,
    loading: false,
    error: '' as String | undefined,
    tokenContent: {} as tokenContentType,
    qrCode: '' as String,
    tempSignUpData: {} as singupFirstStep
  }),

  actions: {
    async login(payload: loginPayload) {
      this.loading = true
      const { data: res } = await noAuthApi.login(payload)

      if (res.status === 200) {
        if (res.data.isTwoFAEnabled) {
          this.tempAccessToken = res.data.accessToken
          router.push('/otp')
        }
      }
      this.loading = false
    },
    async signupFirstStep(payload: singupFirstStep) {
      this.loading = true
      const { data: res } = await noAuthApi.signup(payload)

      if (res.status === 201) {
        this.tempSignUpData = payload
        router.push('/auth/2fa')
      }
      this.loading = false
    },

    async setAccessToken(token: string) {
      this.accessToken = token
      this.tokenContent = parseJwt(token)
    },

    async googleSSOLogin() {
      try {
        window.open('/api/auth/google-sso', '_self', 'noopener,noreferrer');
      } catch (err: any) {
        // logMessage(err.message || 'Login failed.', 'error');
        throw new Error(err.message || 'Login failed.');

      }
    },

    async refreshToken() {
      this.loading = true
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`).then((res) => {

        if (res.status == 201) {
          this.setAccessToken(res.data.accessToken)
        }
        this.loading = false
      }
      ).catch((res) => {
        console.log(res.response.data.message);

      })

      this.loading = false
    }

  }

})
