interface IIntegration extends DefaultValuesFromDb {
  id: number
  user_id: string
  service: string
  api_key: string
  secret_key?: string
  access_token?: string
  refresh_token?: string
  public_key?: string
}
