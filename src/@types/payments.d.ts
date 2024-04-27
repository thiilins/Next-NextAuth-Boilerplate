interface IPaymentGateway extends DefaultValuesFromDb {
  id: number
  provider: string
  currency_id?: number
  api_key?: string
  secret_key?: string
  merchant_id?: string
  access_token?: string
  refresh_token?: string
  public_key?: string
  active: boolean
}

interface ISubscription extends DefaultValuesFromDb {
  id: string
  user_id: string
  plan_id: string
  payment_date: DateTime
  amount: number
  payment_gateway_id: number
  currency_id: number
  status: boolean
  details?: Object
  starts_at: DateTime
  ends_at: DateTime
}

interface IBillingStatus extends DefaultValuesFromDb {
  id: number
  name: string
  payment_gateway_id: number
  user_id: string
  created_at: string
  updated_at: string
}

interface IBillingInfos extends DefaultValuesFromDb {
  id: string
  user_id: string
  billing_address: string
  payment_gateway_id: number
  value: number
  status_id: number
}

interface ISubscriptionHistory extends DefaultValuesFromDb {
  id: number
  subscription_id: string
  user_id: string
  payment_date: DateTime
  amount: number
  payment_method: string
  status: string
  details?: Object
  plan_id?: string
  created_at: string
  updated_at?: string
}

interface ITransactionLogs {
  id: number
  user_id: string
  payment_gateway_id: number
  status_id: number
  amount: number
  currency: string
  created_at: DateTime
  details?: object
}
