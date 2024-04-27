'use client'

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain
} from '@/components/dashboard/sidebar'
import { HorizontalLogo } from '@/components/logo/horizontal'
import { urlIsActive } from '@/lib/url-is-active'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { mainMenuItems } from '../../_constants/menu-items'
import { UserDropdown } from './user-dropdown'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <HorizontalLogo url="/app" />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-grow flex-col">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            {mainMenuItems.map((item, i) => {
              const Icon = item.icon
              return (
                <DashboardSidebarNavLink
                  key={`${item.name}_${i}`}
                  href={item.route}
                  className="text-sm"
                  active={urlIsActive(item.route, pathname)}>
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </DashboardSidebarNavLink>
              )
            })}
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink
              href={process?.env?.NEXT_PUBLIC_HELP_URL ?? '/'}>
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href={process?.env?.NEXT_PUBLIC_LANDING_URL ?? '/'}>
              Site
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}
