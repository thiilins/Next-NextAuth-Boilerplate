interface DefaultValuesFromDb {
  created_at?: Date | null | string
  updated_at?: Date | null | string
  created_by?: string | null
  updated_by?: string | null
}

type ITwoFactorType = 'EMAIL' | 'APP' | 'SMS' | 'WHATSAPP'

type ISettingFeatureType = 'BOOLEAN' | 'STRING' | 'NUMBER' | 'JSON'

type IModule =
  | 'COMPANY'
  | 'USER'
  | 'PLAN'
  | 'LINK'
  | 'INTEGRATION'
  | 'OTHER'
  | 'GLOBAL'

interface ISocialMedia extends DefaultValuesFromDb {
  id: number
  name: string
  url: string
  user_id?: string
  company_id?: string
}
