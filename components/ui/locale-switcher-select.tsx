"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const locales = [
  {
    value: "en",
    label: "English",
    flag: "🇺🇸",
  },
  {
    value: "de",
    label: "Deutsch",
    flag: "🇩🇪",
  },
]

export function LocaleSwitcherSelect() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = pathname.split("/")[1] || "en"

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem
            key={locale.value}
            value={locale.value}
            className="cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{locale.flag}</span>
              {locale.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
