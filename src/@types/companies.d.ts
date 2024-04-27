interface ICompany extends DefaultValuesFromDb {
  id: string
  name: string
  alias?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  subdomain?: string
  recaptcha_key?: string
  recaptcha_secret?: string
  logo?: string
  language_id: number
  background?: string
  active: boolean
  social_medias?: ISocialMedia[]
  email: string
  owner_user_id: string
  privacy_policy_url?: string
  privacy_policy_description?: string
  company_role?: number
}

interface ICompanyFeatures extends DefaultValuesFromDb {
  company_id: string
  feature_id: number
  value: boolean
}

interface ICompanySettings extends ICompanyFeatures {
  company_id: string
  setting_id: number
  value: string
}
interface ICompanyLimits extends ICompanyFeatures {}
