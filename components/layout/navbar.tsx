"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavigationConfig } from "@/config/navigation"
import { useState } from "react"
import ContactDialog from "../dialogs/contact-dialog"
import Logo from "../ui/logo"

interface NavItemProps {
  item: (typeof NavigationConfig.mainNav)[number]
}

const DesktopNavItem = ({ item }: NavItemProps) => {
  if (!("items" in item)) {
    return (
      <NavigationMenuItem>
        <Link href={item.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-sm font-medium text-gray-700 hover:text-black"
            )}
          >
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-700 hover:text-black">
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {item.featured && (
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href={item.featured.href}
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    {item.featured.title}
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {item.featured.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          )}
          {item.items.map((subItem) => (
            <ListItem
              key={subItem.title}
              href={subItem.href}
              title={subItem.title}
            >
              {subItem.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

const DesktopNav = () => (
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList>
      {NavigationConfig.mainNav.map((item) => (
        <DesktopNavItem key={item.title} item={item} />
      ))}
    </NavigationMenuList>
  </NavigationMenu>
)

const MobileNav = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] px-0">
          <nav className="flex flex-col gap-4">
            {NavigationConfig.mainNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex items-center gap-1 px-2">
              <Button variant="secondary" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <ContactDialog
                open={isContactDialogOpen}
                onOpenChange={setIsContactDialogOpen}
              >
                <Button>Get Started</Button>
              </ContactDialog>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

const AuthButtons = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)

  return (
    <>
      <div className="hidden items-center gap-2 md:flex">
        <Button variant="secondary" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <ContactDialog
          open={isContactDialogOpen}
          onOpenChange={setIsContactDialogOpen}
        >
          <Button>Get Started</Button>
        </ContactDialog>
      </div>
    </>
  )
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-5 sm:px-8">
        <Logo />
        <DesktopNav />
        <MobileNav />
        <AuthButtons />
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
