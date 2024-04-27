interface ICreateLinkData extends DefaultValuesFromDb {
  original_url: string
  short_url: string
  original_url: string
  name?: string | null
  company_id?: string | null
  expiration_date?: Date | null
  email_list_id?: string | null
  qr_code_url?: string | null
}

interface ILink extends ICreateLinkData {
  id: string
  user_id: string
}
