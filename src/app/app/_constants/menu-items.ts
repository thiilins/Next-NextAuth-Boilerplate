import { IoHomeOutline, IoRocket } from 'react-icons/io5'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { TbSettingsCheck } from 'react-icons/tb'

export const mainMenuItems = [
  {
    name: 'Dashboard',
    icon: IoHomeOutline,
    route: '/app'
  }
]

export const userMenuItem = [
  {
    name: 'Admin',
    icon: MdOutlineAdminPanelSettings,
    route: '/app',
    role: ['admin']
  },
  {
    name: 'Configurações',
    icon: TbSettingsCheck,
    route: '/app',
    role: ['user']
  },
  {
    name: 'Upgrade',
    icon: IoRocket,
    route: '/app',
    role: ['user']
  }
]
