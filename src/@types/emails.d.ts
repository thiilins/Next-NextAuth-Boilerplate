interface IEmailList extends DefaultValuesFromDb {
  id: string
  name: string
  alias?: string
  company_id?: string
  user_id: string
  list_id?: string
  integration_id?: number
}

interface IEmail {
  id: string
  email: string
  confirmed: boolean
}

interface IEmailCollected extends IEmail {
  collected_id: string
  link_id?: string
  collected_email_id?: string
  os?: string
  browser?: string
  device?: string
  ip?: string
  country?: string
  location?: string
  email_list_id?: string
  company_id?: string
  user_id?: string
  collected_at: string
  updated_at?: string
  created_at?: string
}
