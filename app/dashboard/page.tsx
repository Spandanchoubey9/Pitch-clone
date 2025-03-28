"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Clock, Star, Folder, Share2, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for presentations
const presentations = [
  {
    id: 1,
    title: "Q1 2023 Business Review",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-03-15T10:30:00Z",
    starred: true,
  },
  {
    id: 2,
    title: "Product Roadmap 2023",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-03-10T14:45:00Z",
    starred: false,
  },
  {
    id: 3,
    title: "Marketing Strategy",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-03-05T09:15:00Z",
    starred: true,
  },
  {
    id: 4,
    title: "Team Onboarding",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-02-28T16:20:00Z",
    starred: false,
  },
  {
    id: 5,
    title: "Investor Pitch Deck",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-02-20T11:10:00Z",
    starred: true,
  },
  {
    id: 6,
    title: "Company Overview",
    thumbnail: "/placeholder.svg?height=200&width=300",
    updatedAt: "2023-02-15T13:25:00Z",
    starred: false,
  },
]

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("recent")

  const filteredPresentations = presentations.filter((presentation) =>
    presentation.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Manage your presentations</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search presentations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-64"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Presentation
            </Button>
          </div>
        </div>

        <Tabs defaultValue="recent" className="mb-8">
          <TabsList>
            <TabsTrigger value="recent" onClick={() => setActiveTab("recent")} className="flex items-center">
              <Clock className="mr-2 h-4 w-4" /> Recent
            </TabsTrigger>
            <TabsTrigger value="starred" onClick={() => setActiveTab("starred")} className="flex items-center">
              <Star className="mr-2 h-4 w-4" /> Starred
            </TabsTrigger>
            <TabsTrigger value="shared" onClick={() => setActiveTab("shared")} className="flex items-center">
              <Share2 className="mr-2 h-4 w-4" /> Shared
            </TabsTrigger>
            <TabsTrigger value="folders" onClick={() => setActiveTab("folders")} className="flex items-center">
              <Folder className="mr-2 h-4 w-4" /> Folders
            </TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPresentations.map((presentation) => (
                <motion.div
                  key={presentation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={presentation.thumbnail || "/placeholder.svg"}
                      alt={presentation.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                        onClick={() => {}}
                      >
                        <Star className={`h-4 w-4 ${presentation.starred ? "fill-yellow-400 text-yellow-400" : ""}`} />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 truncate">{presentation.title}</h3>
                    <p className="text-sm text-gray-500">Updated {formatDate(presentation.updatedAt)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="starred" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPresentations
                .filter((p) => p.starred)
                .map((presentation) => (
                  <motion.div
                    key={presentation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={presentation.thumbnail || "/placeholder.svg"}
                        alt={presentation.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                          onClick={() => {}}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 bg-white/80 hover:bg-white text-gray-700 rounded-full"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Rename</DropdownMenuItem>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 truncate">{presentation.title}</h3>
                      <p className="text-sm text-gray-500">Updated {formatDate(presentation.updatedAt)}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="shared" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No shared presentations yet</h3>
              <p className="text-gray-500 mb-6">Share your presentations with others to see them here</p>
              <Button>
                <Share2 className="mr-2 h-4 w-4" /> Share a presentation
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="folders" className="mt-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No folders yet</h3>
              <p className="text-gray-500 mb-6">Create folders to organize your presentations</p>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Create folder
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

