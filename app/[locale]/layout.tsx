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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // First, await the params object
  const { locale } = await params

  // Await both the locale validation and messages
  const [validatedLocale, messages] = await Promise.all([
    validateLocale(locale),
    // Providing all messages to the client
    // side is the easiest way to get started
    getMessages(),
  ])

  return (
    <html lang={validatedLocale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn("min-h-screen bg-background", inter.className)}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          {/* <FooterSection /> */}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
