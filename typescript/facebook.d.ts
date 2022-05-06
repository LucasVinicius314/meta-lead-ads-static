export type LoginResponse = {
  authResponse: AuthResponse
  status: string
}

export type AuthResponse = {
  accessToken: string
  data_access_expiration_time: number
  expiresIn: number
  graphDomain: string
  signedRequest: string
  userID: string
}

export type UserResponse = {
  id: string
  name: string
}

declare global {
  interface FB {
    login: (response: LoginResponse) => void
  }
}
