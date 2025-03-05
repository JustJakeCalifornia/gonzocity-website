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

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-16 items-center justify-between max-w-7xl mx-auto px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <path
              d="M19.9535 0C12.0293 0 5.24931 5.58933 3.87613 13.0293C3.87613 13.0293 3.87613 13.0293 3.87613 13.0293C3.72379 13.7333 3.64762 14.4373 3.64762 15.1413C3.64762 20.0373 7.1339 24 11.9677 24C15.3065 24 18.1903 22.0693 19.5635 19.2C19.5635 19.2 19.5635 19.2 19.5635 19.2C20.9367 22.0693 23.8206 24 27.1593 24C31.9932 24 35.4794 20.0373 35.4794 15.1413C35.4794 14.4373 35.4033 13.7333 35.2509 13.0293C33.8777 5.58933 27.0977 0 19.1735 0H19.9535Z"
              fill="#000000"
            />
          </svg>
          <span className="ml-2 text-xl font-semibold">GonzoCity</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-700 hover:text-black">
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Link Management
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Create, share and track short links with custom
                          domains
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/" title="Analytics">
                    Real-time analytics for your links
                  </ListItem>
                  <ListItem href="/" title="QR Codes">
                    Generate and customize QR codes
                  </ListItem>
                  <ListItem href="/" title="Link in Bio">
                    Create a custom landing page
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-700 hover:text-black">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/" title="Blog">
                    Latest news and updates
                  </ListItem>
                  <ListItem href="/" title="Changelog">
                    See what&apos;s new
                  </ListItem>
                  <ListItem href="/" title="Developers">
                    API documentation and resources
                  </ListItem>
                  <ListItem href="/" title="Help Center">
                    Get support and answers
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-gray-700 hover:text-black">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/" title="About">
                    Our mission and team
                  </ListItem>
                  <ListItem href="/" title="Customers">
                    See who uses Dub
                  </ListItem>
                  <ListItem href="/" title="Careers">
                    Join our team
                  </ListItem>
                  <ListItem href="/" title="Contact">
                    Get in touch
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-sm font-medium text-gray-700 hover:text-black"
                  )}
                >
                  Enterprise
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-sm font-medium text-gray-700 hover:text-black"
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] px-0">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                Product
              </Link>
              <Link
                href="/"
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                Resources
              </Link>
              <Link
                href="/"
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                Company
              </Link>
              <Link
                href="/"
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                Enterprise
              </Link>
              <Link
                href="/"
                className="border-b border-gray-100 px-6 py-4 text-sm font-medium text-gray-700 hover:text-black"
              >
                Pricing
              </Link>
              <div className="flex items-center gap-1 px-2">
                <Button variant="secondary" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="secondary" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
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
