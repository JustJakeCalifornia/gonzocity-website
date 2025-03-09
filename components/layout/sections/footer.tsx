"use client"

import * as React from "react"
import { FileText, Shield, Instagram, Scale } from "lucide-react"
import Logo from "@/components/ui/logo"
import { useTranslations } from "next-intl"
import LocalizedLink from "@/components/navigation/localized-link"

export function FooterSection() {
  const t = useTranslations("footer")

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <Logo withName={false} />
              <span className="text-xl font-semibold tracking-tight">
                {t("company.name")}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("company.description")}
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* <div className="space-y-6">
              <h3 className="text-sm font-medium">Features</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Asset Tracking", Icon: Building2 },
                  { name: "Tree Management", Icon: TreePine },
                  { name: "Waste Management", Icon: Trash2 },
                  { name: "Team Access", Icon: Users },
                ].map(({ name, Icon }) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* <div className="space-y-6">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "About Us", Icon: FileText },
                  { name: "Contact", Icon: Mail },
                  { name: "Locations", Icon: MapPin },
                  { name: "Support", Icon: Phone },
                ].map(({ name, Icon }) => (
                  <li key={name}>
                    <a
                      href="#"
                      className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="space-y-6">
              <h3 className="text-sm font-medium">
                {t("sections.socials.title")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { name: t("sections.socials.instagram"), Icon: Instagram },
                ].map(({ name, Icon }) => (
                  <li key={name}>
                    <LocalizedLink
                      href="https://instagram.com/gullygonzo"
                      className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-medium">
                {t("sections.legal.title")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    name: t("sections.legal.legalNotice"),
                    Icon: Scale,
                    href: "/legal/legalnotice",
                  },
                  {
                    name: t("sections.legal.privacyPolicy"),
                    Icon: Shield,
                    href: "/legal/privacypolicy",
                  },
                  {
                    name: t("sections.legal.termsOfService"),
                    Icon: FileText,
                    href: "/legal/termsofservice",
                  },
                ].map(({ name, Icon, href }) => (
                  <li key={name}>
                    <LocalizedLink
                      href={href}
                      className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
