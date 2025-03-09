"use client"

import { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "../forms/contact-form"
import { useTranslations } from "next-intl"

type Props = {
  children?: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ContactDialog = ({ children, open, onOpenChange }: Props) => {
  const t = useTranslations("contact-form")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] border-input">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("dialogDescription")}</DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog
