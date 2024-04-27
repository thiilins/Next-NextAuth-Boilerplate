type IAuthAction = 'login' | 'register'

type IAuthProviders =
  | 'github'
  | 'google'
  | 'facebook'
  | 'twitter'
  | 'apple'
  | 'wordpress'
  | 'instagram'
interface IVerificationToken {
  identifier: string
  token: string
  expires: string
}

interface IAuthenticatorValue {
  id: string
  credentialID: string
  userId: string
  providerAccountId: string
  credentialPublicKey: string
  counter: number
  credentialDeviceType: string
  credentialBackedUp: boolean
  transports: ?string?
}

interface ISession {
  id: string
  sessionToken: string
  userId: string
  expires: string
}

interface ILoginHistory {
  id: number
  user_id: string
  ip: string
  location?: string
  device: string
  os: string
  browser?: string
  logged_in_at: string
  logged_out_at?: string
}
