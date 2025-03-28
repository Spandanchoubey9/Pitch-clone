"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined)

export function SidebarProvider({
  children,
  defaultOpen = true,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function Sidebar({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = useSidebar()

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-white transition-all duration-300 dark:bg-gray-900",
        open ? "w-64" : "w-16",
        className,
      )}
    >
      {children}
    </aside>
  )
}

export function SidebarHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex items-center p-4", className)}>{children}</div>
}

export function SidebarContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex-1 overflow-auto", className)}>{children}</div>
}

export function SidebarFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("border-t", className)}>{children}</div>
}

export function SidebarTrigger({ className }: { className?: string }) {
  const { open, setOpen } = useSidebar()

  return (
    <button
      type="button"
      className={cn("text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100", className)}
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Toggle sidebar</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {open ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )
}

export function SidebarGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("py-2", className)}>{children}</div>
}

export function SidebarGroupLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  const { open } = useSidebar()

  if (!open) return null

  return (
    <div className={cn("px-4 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400", className)}>
      {children}
    </div>
  )
}

export function SidebarGroupContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("", className)}>{children}</div>
}

export function SidebarMenu({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ul className={cn("space-y-1 px-2", className)}>{children}</ul>
}

export function SidebarMenuItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <li className={cn("", className)}>{children}</li>
}

export function SidebarMenuButton({
  children,
  className,
  asChild = false,
  isActive = false,
  tooltip,
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  isActive?: boolean
  tooltip?: string
}) {
  const { open } = useSidebar()
  const Comp = asChild ? React.Fragment : "button"
  const props = asChild ? {} : { type: "button" }

  return (
    <div className="relative group">
      <Comp
        {...props}
        className={cn(
          "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50",
          !open && "justify-center",
          className,
        )}
      >
        {children}
      </Comp>
      {!open && tooltip && (
        <div className="absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
          {tooltip}
        </div>
      )}
    </div>
  )
}

