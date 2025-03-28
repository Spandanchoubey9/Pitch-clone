"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Mock data for templates
const templates = [
  {
    id: 1,
    title: "Business Pitch",
    category: "Business",
    thumbnail: "/images/template-preview.png",
    slides: 12,
  },
  {
    id: 2,
    title: "Marketing Plan",
    category: "Marketing",
    thumbnail: "/images/template-preview.png",
    slides: 15,
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Product",
    thumbnail: "/images/template-preview.png",
    slides: 10,
  },
  {
    id: 4,
    title: "Sales Deck",
    category: "Sales",
    thumbnail: "/images/template-preview.png",
    slides: 8,
  },
  {
    id: 5,
    title: "Company Overview",
    category: "Business",
    thumbnail: "/images/template-preview.png",
    slides: 14,
  },
  {
    id: 6,
    title: "Quarterly Report",
    category: "Finance",
    thumbnail: "/images/template-preview.png",
    slides: 18,
  },
  {
    id: 7,
    title: "Creative Portfolio",
    category: "Design",
    thumbnail: "/images/template-preview.png",
    slides: 20,
  },
  {
    id: 8,
    title: "Project Proposal",
    category: "Business",
    thumbnail: "/images/template-preview.png",
    slides: 9,
  },
  {
    id: 9,
    title: "Investor Pitch Deck",
    category: "Finance",
    thumbnail: "/images/template-preview.png",
    slides: 16,
  },
  {
    id: 10,
    title: "Agency Proposal",
    category: "Marketing",
    thumbnail: "/images/template-preview.png",
    slides: 11,
  },
  {
    id: 11,
    title: "Brand Guidelines",
    category: "Design",
    thumbnail: "/images/template-preview.png",
    slides: 22,
  },
  {
    id: 12,
    title: "Team Introduction",
    category: "HR",
    thumbnail: "/images/template-preview.png",
    slides: 7,
  },
]

const categories = ["All", "Business", "Marketing", "Product", "Sales", "Finance", "Design", "HR"]

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" || template.category === selectedCategory),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-pitch-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Beautiful templates for every use case
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl mb-8"
              >
                Start with professionally designed templates and customize them to fit your needs. Save time and create
                stunning presentations in minutes.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Browse Templates</h2>
                <p className="text-gray-500">Find the perfect template for your next presentation</p>
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
                        {category}  => (
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
                      <Link href={`/templates/${template.id}`}>
                        <Button>Use Template</Button>
                      </Link>
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
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a custom template?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team can create custom templates tailored to your brand and specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

