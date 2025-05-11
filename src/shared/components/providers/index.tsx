'use client'
import { PropsWithChildren } from 'react'
import { QueryClientProvider } from './query-client-provider'
import { ThemeProvider } from './theme-provider'
import NextAuthProvider from './next-auth-provider'
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <NextAuthProvider>
        <QueryClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </QueryClientProvider>
      </NextAuthProvider>
    </>
  )
}
