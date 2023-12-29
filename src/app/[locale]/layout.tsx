import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { useLocale } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Intl App',
  description: 'Made with love by Nelli',
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
