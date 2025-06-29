import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Providers } from '@/shared/components'
import { BlogsHeader } from '@/widgets/header'
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Music news by Damaroo',
    default: 'Music news by Damaroo',
  },
  description: 'Music news by Damaroo',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  const { locale } = await params
  const messages = await getMessages()
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} bg-background text-foreground  min-h-[150vh]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <BlogsHeader />
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
