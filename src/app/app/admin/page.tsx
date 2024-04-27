import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain
} from '@/components/dashboard/page'
export default async function Page() {
  const pageName = 'Admin Settings'

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>{pageName}</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <h1>{pageName}</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}
