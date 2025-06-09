export type tokenContentType =
  ({
    id: number,
    name: string,
    email: string,
    iat: number,
    exp: number
  }) | null

export type loginPayload = {
  email: string,
  password: string
}

export type loginResponse = {
  status: number,
  data: {
    accessToken: string,
    isTwoFAEnabled: boolean
  },
  message: string
}

export type singupFirstStep = {
  fullName: string,
  email: string,
  password: string
}

export type signupFirstStepResponse = {
  status: number,
  data: {
    id: number,
    qrCode: string
  },
  message: string
}
