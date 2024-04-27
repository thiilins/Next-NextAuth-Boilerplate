interface IPermissions {
  id: number
  user_id?: string
  name: string
  description: string
}

interface IRole extends DefaultValuesFromDb {
  id: number
  name: string
  module: IModule
  for_all: boolean
}

interface IRoleControlDefault extends DefaultValuesFromDb {
  value: boolean
  for_all: boolean
}
interface IRolePermission extends DefaultValuesFromDb {
  role_id: number
  permission_id: number
}

interface ICompanyPermission extends IRoleControlDefault {
  company_id: string
}

interface IUserPermission extends IRoleControlDefault {
  user_id: string
}
