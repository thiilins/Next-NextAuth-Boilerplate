interface IFeatures extends DefaultValuesFromDb {
  id: number
  name: string
  description: string
  module: IModule
  type: ISettingFeatureType
  created_at: string
  updated_at: string
}
