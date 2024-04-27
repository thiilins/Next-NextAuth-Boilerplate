interface IUser extends DefaultValuesFromDB {
  id: string
  name?: string
  email?: string
  emailVerified?: string
  image?: string
  password?: string
  company_id?: string
  plan_id?: string
  plan_expiration_date: string
  language_id?: number
  user_role?: number
  api_key?: string
  is_master?: boolean
  billing_info_id?: number
  subscription_id?: number
  active?: boolean
  admin?: boolean
  super_admin?: boolean
  currency_id?: number
  last_login?: string
  created_at_user_id?: string
}
interface IAccount extends DefaultValuesFromDB {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token?: string
  access_token?: string
  expires_at?: number
  token_type?: string
  scope?: string
  id_token?: string
  session_state?: string
}
