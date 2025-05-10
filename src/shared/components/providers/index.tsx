'use client'
import { PropsWithChildren } from 'react'
import { QueryClientProvider } from './query-client-provider'
import { ThemeProvider } from './theme-provider'
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <QueryClientProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
