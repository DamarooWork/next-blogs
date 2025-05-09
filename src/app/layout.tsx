import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from '@/shared/components'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Blogs by Damaroo',
    default: 'Blogs by Damaroo',
  },
  description: 'Blogs by Damaroo with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} bg-background text-foreground  min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
