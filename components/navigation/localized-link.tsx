import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

type LocalizedLinkProps = {
  href: string
  children: React.ReactNode
  locale?: string
  className?: string
} & Omit<React.ComponentProps<typeof Link>, "href" | "locale">

const LocalizedLink: React.FC<LocalizedLinkProps> = ({
  href,
  children,
  locale: providedLocale,
  ...props
}) => {
  // Get locale from URL params instead of router
  const params = useParams()
  const currentLocale = (params?.locale as string) || "en"

  // Use provided locale or fall back to current locale
  const targetLocale = providedLocale || currentLocale

  // Handle absolute URLs
  if (href.startsWith("http")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  // Handle anchor links
  if (href.startsWith("#")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  // Normalize the path
  let normalizedPath = href

  // Remove leading locale if present (adjust regex based on your supported locales)
  const localePattern = new RegExp(`^/(en|de|fr)`) // Add your supported locales here
  normalizedPath = normalizedPath.replace(localePattern, "")

  // Ensure path starts with /
  if (!normalizedPath.startsWith("/")) {
    normalizedPath = `/${normalizedPath}`
  }

  // Construct the localized path
  const localizedPath = `/${targetLocale}${normalizedPath}`

  return (
    <Link href={localizedPath} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedLink
