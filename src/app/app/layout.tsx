import { auth } from '@/services/auth'
import { PropsWithChildren } from 'react'
import { MainSidebar } from './(dashboard)/_components/main-sidebar'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  return (
    <div className="max-w-screen grid h-screen grid-cols-[16rem_1fr]">
      <MainSidebar user={session?.user} />
      <main className="max-h-screen min-h-screen">{children}</main>
    </div>
  )
}
