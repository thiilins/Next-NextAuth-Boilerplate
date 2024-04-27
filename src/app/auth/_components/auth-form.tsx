/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Input } from '@ui/input'
import { Button } from '@ui/button'

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import {
  IoLogoApple,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWordpress
} from 'react-icons/io5'
import { HorizontalLogoSvg } from '@/components/logo/svgs/logo-horizontal'
import { RiMailSendLine } from 'react-icons/ri'
import { toast } from '@ui/use-toast'
import { Toaster } from '@ui/toaster'
export function AuthForm() {
  const form = useForm()
  const handleLoginWithProvider = async (provider: IAuthProviders) => {
    console.log(provider)
    try {
      await signIn(provider, { callbackUrl: '/app' })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = form.handleSubmit(async data => {
    try {
      await signIn('nodemailer', { email: data.email, redirect: false })

      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the magic link to login'
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.'
      })
    }
  })
  return (
    <main className="grid h-screen md:grid-cols-2">
      <div className="relative hidden h-screen flex-1 items-center justify-center bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <HorizontalLogoSvg color="#fff" width={250} />{' '}
          <div className=" mt-7 space-y-3">
            <h3 className="text-2xl font-bold text-white">
              Comece a expandir seu negócio rapidamente
            </h3>
            <p className="text-wrap text-gray-300">
              Crie uma conta e tenha acesso a todos os recursos por 30 dias, não
              é necessário cartão de crédito
            </p>
            <div className="flex items-center -space-x-2 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/79.jpg"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/86.jpg"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <p className="translate-x-5 text-sm font-medium text-gray-400">
                Junte-se a mais de 5.000 usuários
              </p>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background:
              'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
            filter: 'blur(118px)'
          }}></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-6">
        <div className="w-full max-w-sm space-y-4">
          <h3 className=" text-center text-2xl font-bold sm:text-3xl">Login</h3>
        </div>
        <div className="grid-flow-rows grid grid-flow-col gap-1">
          <Button size="default" className="py-7" variant="outline">
            <IoLogoApple size={20} />
          </Button>
          <Button
            size="default"
            onClick={async () => await handleLoginWithProvider('github')}
            className="py-7"
            variant="outline">
            <IoLogoGithub size={20} />
          </Button>
          <Button size="default" className="py-7" variant="outline">
            <IoLogoTwitter size={20} />
          </Button>
          <Button size="default" className="py-7" variant="outline">
            <IoLogoGoogle size={20} />
          </Button>
          <Button size="default" className="py-7" variant="outline">
            <IoLogoWordpress size={20} />
          </Button>
          <Button size="default" className="py-7" variant="outline">
            <IoLogoInstagram size={18} />
          </Button>
        </div>
        <div className="my-2 w-full max-w-sm space-y-4"></div>
        <div className="my-3 w-full max-w-sm space-y-4">
          <div className="relative">
            <span className="block h-px w-full bg-gray-300"></span>
            <p className="absolute inset-x-0 -top-2.5  mx-auto inline-block w-fit bg-white px-2 text-sm dark:bg-slate-950">
              ou continue com
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            id="send-magic-link"
            className="space-y-2">
            <h3 className="text-center">Login via Magic Link</h3>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              {...form.register('email', { required: true })}
            />

            <Button
              className="w-full hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-neutral-700"
              variant="default"
              type="submit"
              form="send-magic-link"
              disabled={form.formState.isSubmitting}>
              <RiMailSendLine className="mr-2 h-4 w-4" />
              {form.formState.isSubmitting
                ? 'Enviando...'
                : 'Enviar Magic Link'}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
