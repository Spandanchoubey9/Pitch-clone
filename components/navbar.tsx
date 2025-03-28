"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "Product",
    href: "/product",
    items: [
      { name: "Features", href: "/product/features" },
      { name: "Integrations", href: "/product/integrations" },
      { name: "Enterprise", href: "/product/enterprise" },
      { name: "Security", href: "/product/security" },
    ],
  },
  {
    name: "Use Cases",
    href: "/use-cases",
    items: [
      { name: "Sales", href: "/use-cases/sales" },
      { name: "Marketing", href: "/use-cases/marketing" },
      { name: "Product", href: "/use-cases/product" },
      { name: "Design", href: "/use-cases/design" },
    ],
  },
  {
    name: "Templates",
    href: "/templates",
    items: [
      { name: "Pitch Deck", href: "/templates/pitch-deck" },
      { name: "Sales Deck", href: "/templates/sales-deck" },
      { name: "Marketing Plan", href: "/templates/marketing-plan" },
      { name: "Company Overview", href: "/templates/company-overview" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    items: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Help Center", href: "/resources/help-center" },
      { name: "Webinars", href: "/resources/webinars" },
      { name: "Community", href: "/resources/community" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-pitch-gradient text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/images/pitch-logo.png" alt="Pitch" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold">Pitch</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.items ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-white hover:text-white/80 transition-colors">
                        {item.name}
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.name}>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-white hover:text-white/80 transition-colors",
                      pathname === item.href && "font-semibold",
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-white hover:text-white/80">
                Log in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-white text-primary hover:bg-white/90">Sign up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button type="button" className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navItems.map((item) => (
            <div key={item.name} className="py-2">
              <Link href={item.href} className="block text-white hover:text-white/80">
                {item.name}
              </Link>
              {item.items && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.items.map((subItem) => (
                    <Link key={subItem.name} href={subItem.href} className="block text-white/80 hover:text-white">
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 flex flex-col space-y-2">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-white justify-start w-full">
                Log in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-white text-primary hover:bg-white/90 w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

