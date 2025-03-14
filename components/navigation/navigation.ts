import { useTranslations } from "next-intl"

interface NavItem {
  title: string
  href: string
  description?: string
}

interface NavItemWithChildren extends NavItem {
  items: NavItem[]
  featured?: {
    title: string
    href: string
    description: string
  }
}

type MainNavItem = NavItem | NavItemWithChildren

export const NavigationConfig = () => {
  const t = useTranslations("navbar.navigation")

  return {
    mainNav: [
      // {
      //   title: "Product",
      //   href: "/product",
      //   items: [
      //     {
      //       title: "Analytics",
      //       href: "/analytics",
      //       description: "Real-time analytics for your links",
      //     },
      //     {
      //       title: "QR Codes",
      //       href: "/qr-codes",
      //       description: "Generate and customize QR codes",
      //     },
      //     {
      //       title: "Link in Bio",
      //       href: "/link-in-bio",
      //       description: "Create a custom landing page",
      //     },
      //   ],
      //   featured: {
      //     title: "Link Management",
      //     href: "/link-management",
      //     description: "Create, share and track short links with custom domains",
      //   },
      // },
      // {
      //   title: "Resources",
      //   href: "/resources",
      //   items: [
      //     {
      //       title: "Blog",
      //       href: "/blog",
      //       description: "Latest news and updates",
      //     },
      //     {
      //       title: "Changelog",
      //       href: "/changelog",
      //       description: "See what's new",
      //     },
      //     {
      //       title: "Developers",
      //       href: "/developers",
      //       description: "API documentation and resources",
      //     },
      //     {
      //       title: "Help Center",
      //       href: "/help",
      //       description: "Get support and answers",
      //     },
      //   ],
      // },
      // {
      //   title: "Company",
      //   href: "/company",
      //   items: [
      //     {
      //       title: "About",
      //       href: "/about",
      //       description: "Our mission and team",
      //     },
      //     {
      //       title: "Customers",
      //       href: "/customers",
      //       description: "See who uses GonzoCity",
      //     },
      //     {
      //       title: "Careers",
      //       href: "/careers",
      //       description: "Join our team",
      //     },
      //     {
      //       title: "Contact",
      //       href: "/contact",
      //       description: "Get in touch",
      //     },
      //   ],
      // },
      {
        title: t("benefits"),
        href: "#benefits",
      },
      {
        title: t("features"),
        href: "#features",
      },
      {
        title: t("modules"),
        href: "#modules",
      },
      {
        title: t("contact"),
        href: "#contact",
      },
    ] as MainNavItem[],
  }
}
