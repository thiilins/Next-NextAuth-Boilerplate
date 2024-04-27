'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/services/react-queries'
interface IProps {
  children: IChildren
}
export function ReactQueryProvider({ children }: IProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
