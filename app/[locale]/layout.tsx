import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { FooterSection } from "@/components/layout/sections/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GonzoCity",
  description: "GonzoCity",
}

async function validateLocale(locale: string) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    notFound()
  }
  return locale
}

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params
  const validatedLocale = validateLocale(locale)
  const messages = getMessages()

  const [validLocale, msgs] = await Promise.all([validatedLocale, messages])

  return (
    <html lang={validLocale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn("min-h-screen bg-background", inter.className)}
      >
        <NextIntlClientProvider messages={msgs}>
          <Navbar />
          {children}
          <FooterSection />
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
