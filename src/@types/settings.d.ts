interface ISettings extends DefaultValuesFromDb {
  id: number
  name: string
  description?: string
  module: IModule
  type: ISettingFeatureType
}
