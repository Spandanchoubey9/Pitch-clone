"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for templates
const templates = [
  {
    id: 1,
    title: "Business Pitch",
    category: "Business",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 12,
  },
  {
    id: 2,
    title: "Marketing Plan",
    category: "Marketing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 15,
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Product",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 10,
  },
  {
    id: 4,
    title: "Sales Deck",
    category: "Sales",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 8,
  },
  {
    id: 5,
    title: "Company Overview",
    category: "Business",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 14,
  },
  {
    id: 6,
    title: "Quarterly Report",
    category: "Finance",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 18,
  },
  {
    id: 7,
    title: "Creative Portfolio",
    category: "Design",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 20,
  },
  {
    id: 8,
    title: "Project Proposal",
    category: "Business",
    thumbnail: "/placeholder.svg?height=200&width=300",
    slides: 9,
  },
]

const categories = ["All", "Business", "Marketing", "Product", "Sales", "Finance", "Design"]

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || template.category === selectedCategory),
  )

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Templates</h1>
            <p className="text-gray-500">Choose from our professionally designed templates</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-64"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={template.thumbnail || "/placeholder.svg"}
                  alt={template.title}
                  className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button>Use Template</Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{template.category}</span>
                  <span className="text-sm text-gray-500">{template.slides} slides</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("All")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

