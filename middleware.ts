import { NextRequest, NextResponse } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { routing } from "./i18n/routing"

// Define supported locales (match your existing configuration)
const locales = ["en", "de"]
const defaultLocale = "en"

// Get preferred locale from request headers
function getLocale(request: Request) {
  // Negotiator expects a plain object so we need to transform headers
  const headers = Object.fromEntries(request.headers)
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if a locale is already in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // If path already has locale, use next-intl middleware
    return createMiddleware(routing)(request)
  }

  // Redirect to locale-specific path if no locale is present
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  // e.g. incoming request is /products
  // The new URL will be /en/products or /de/products
  return NextResponse.redirect(request.nextUrl)
}

// Import function at the end to avoid initialization issues
import createMiddleware from "next-intl/middleware"

export const config = {
  // Match all paths except those that start with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  //
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
