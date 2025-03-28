"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Presentation, Paintbrush, Users, BarChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tabs = [
  {
    id: "pitch",
    label: "PITCH",
    icon: Presentation,
    content: {
      title: "Create beautiful presentations in minutes",
      description:
        "Pitch makes it easy to create stunning presentations with our intuitive editor, smart templates, and powerful collaboration tools.",
      image: "/images/dashboard-preview.png",
      link: "/product/features",
    },
  },
  {
    id: "design",
    label: "DESIGN",
    icon: Paintbrush,
    content: {
      title: "Design with brand consistency",
      description:
        "Keep your presentations on-brand with custom templates, color palettes, and font settings that ensure consistency across your team.",
      image: "/images/feature-design.png",
      link: "/product/design",
    },
  },
  {
    id: "collaborate",
    label: "COLLABORATE",
    icon: Users,
    content: {
      title: "Work together seamlessly",
      description:
        "Collaborate in real-time with your team, leave comments, and track changes to create the perfect presentation together.",
      image: "/images/feature-collaborate.png",
      link: "/product/collaborate",
    },
  },
  {
    id: "analyze",
    label: "ANALYZE",
    icon: BarChart,
    content: {
      title: "Measure presentation performance",
      description:
        "Track engagement, gather feedback, and analyze how your presentations perform to continuously improve your content.",
      image: "/images/feature-analyze.png",
      link: "/product/analyze",
    },
  },
]

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium",
                    "focus:z-10 focus:outline-none transition-colors duration-200",
                    activeTab === tab.id
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-primary",
                  )}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" layoutId="activeTab" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="md:w-1/2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">{tab.content.title}</h3>
                      <p className="text-gray-600 mb-6">{tab.content.description}</p>
                      <Link href={tab.content.link}>
                        <Button>Learn more</Button>
                      </Link>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src={tab.content.image || "/placeholder.svg"}
                        alt={tab.content.title}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

