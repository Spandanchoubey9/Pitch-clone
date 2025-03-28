"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Presentation, Paintbrush, Users, BarChart, Zap, Layout, Lock } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ProductPage() {
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
                The complete presentation platform for modern teams
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl mb-8"
              >
                Create, collaborate, and present with Pitch. Our powerful features help you build beautiful
                presentations that drive results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Get a demo
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful features for every team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Pitch combines powerful presentation tools with seamless collaboration features to help your team create
                stunning presentations.
              </p>
            </div>

            <Tabs defaultValue="create" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="create" className="flex items-center gap-2">
                  <Presentation className="h-4 w-4" />
                  <span>Create</span>
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Paintbrush className="h-4 w-4" />
                  <span>Design</span>
                </TabsTrigger>
                <TabsTrigger value="collaborate" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Collaborate</span>
                </TabsTrigger>
                <TabsTrigger value="analyze" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  <span>Analyze</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="create">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Create beautiful presentations in minutes</h3>
                    <p className="text-gray-600 mb-6">
                      Pitch makes it easy to create stunning presentations with our intuitive editor, smart templates,
                      and powerful collaboration tools. Start from scratch or choose from hundreds of professionally
                      designed templates.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Intuitive drag-and-drop editor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layout className="h-5 w-5 text-primary" />
                        <span>Professional templates for every use case</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <span>Brand controls for consistent design</span>
                      </li>
                    </ul>
                    <Link href="/product/features">
                      <Button>Learn more</Button>
                    </Link>
                  </div>
                  <div>
                    <img
                      src="/images/dashboard-preview.png"
                      alt="Create beautiful presentations"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Design with brand consistency</h3>
                    <p className="text-gray-600 mb-6">
                      Keep your presentations on-brand with custom templates, color palettes, and font settings that
                      ensure consistency across your team. Create and enforce brand guidelines with ease.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Custom brand templates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layout className="h-5 w-5 text-primary" />
                        <span>Color palette management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <span>Font and typography controls</span>
                      </li>
                    </ul>
                    <Link href="/product/design">
                      <Button>Learn more</Button>
                    </Link>
                  </div>
                  <div>
                    <img
                      src="/images/feature-design.png"
                      alt="Design with brand consistency"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="collaborate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Work together seamlessly</h3>
                    <p className="text-gray-600 mb-6">
                      Collaborate in real-time with your team, leave comments, and track changes to create the perfect
                      presentation together. No more emailing files back and forth or dealing with version control
                      issues.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Real-time collaboration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layout className="h-5 w-5 text-primary" />
                        <span>Comments and feedback</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <span>Version history and control</span>
                      </li>
                    </ul>
                    <Link href="/product/collaborate">
                      <Button>Learn more</Button>
                    </Link>
                  </div>
                  <div>
                    <img
                      src="/images/feature-collaborate.png"
                      alt="Work together seamlessly"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analyze">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Measure presentation performance</h3>
                    <p className="text-gray-600 mb-6">
                      Track engagement, gather feedback, and analyze how your presentations perform to continuously
                      improve your content. Get insights into how your audience interacts with your presentations.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span>Engagement analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layout className="h-5 w-5 text-primary" />
                        <span>Audience feedback collection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        <span>Performance reporting</span>
                      </li>
                    </ul>
                    <Link href="/product/analyze">
                      <Button>Learn more</Button>
                    </Link>
                  </div>
                  <div>
                    <img
                      src="/images/feature-analyze.png"
                      alt="Measure presentation performance"
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your presentations?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams who use Pitch to create, collaborate, and present better.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get started for free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get a demo
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

