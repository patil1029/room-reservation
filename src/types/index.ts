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
  fullname: string,
  email: string,
  password: string
}

export type signupFirstStepResponse = {
  status: number,
  data: {
    id: 1,
    qrCode: string
  },
  message: string

}
