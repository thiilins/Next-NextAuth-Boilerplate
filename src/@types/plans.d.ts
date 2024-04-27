interface IPlans extends DefaultValuesFromDb {
  id: string
  name: string
  description: string
  active: boolean
  visible: boolean
  colors: string
  monthly_price: number
  yearly_price: number
  has_trial: boolean
  trial_days: number
  currency_id: number
  recommended: boolean
}

interface IPlanFeatures extends DefaultValuesFromDb {
  plan_id: string
  feature_id: number
  value: boolean
}

interface IPlanLimits extends IPlanFeatures {}
