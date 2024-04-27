import { notFound, redirect } from 'next/navigation'
import { AuthForm } from './_components/auth-form'

export default function Page() {
  return <AuthForm />
}
