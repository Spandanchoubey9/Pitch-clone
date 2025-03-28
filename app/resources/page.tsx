"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BookOpen, Video, Users, HelpCircle } from "lucide-react"

const resources = [
  {
    id: "blog",
    title: "Blog",
    description: "Tips, tricks, and insights to help you create better presentations",
    icon: BookOpen,
    link: "/resources/blog",
    items: [
      {
        title: "10 Tips for Creating Engaging Presentations",
        excerpt: "Learn how to captivate your audience with these presentation design tips.",
        date: "May 15, 2023",
        image: "/images/dashboard-preview.png",
      },
      {
        title: "How to Tell a Compelling Story with Data",
        excerpt: "Transform complex data into clear, persuasive narratives that drive action.",
        date: "April 28, 2023",
        image: "/images/feature-analyze.png",
      },
      {
        title: "Presentation Design Trends for 2023",
        excerpt: "Stay ahead of the curve with these emerging presentation design trends.",
        date: "March 12, 2023",
        image: "/images/feature-design.png",
      },
    ],
  },
  {
    id: "webinars",
    title: "Webinars",
    description: "Watch on-demand webinars to learn from presentation experts",
    icon: Video,
    link: "/resources/webinars",
    items: [
      {
        title: "Mastering Pitch: Advanced Features and Techniques",
        excerpt: "Discover how to leverage Pitch's advanced features to create stunning presentations.",
        date: "June 5, 2023",
        image: "/images/dashboard-preview.png",
      },
      {
        title: "Collaborative Presentation Design: Best Practices",
        excerpt: "Learn how teams can work together effectively to create impactful presentations.",
        date: "May 22, 2023",
        image: "/images/feature-collaborate.png",
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    description: "Connect with other Pitch users and share ideas",
    icon: Users,
    link: "/resources/community",
  },
  {
    id: "help-center",
    title: "Help Center",
    description: "Find answers to your questions and learn how to use Pitch",
    icon: HelpCircle,
    link: "/resources/help-center",
  },
]

export default function ResourcesPage() {
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
                Resources to help you succeed
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl mb-8"
              >
                Explore our library of resources to help you create better presentations and get the most out of Pitch.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Resources Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <Link href={resource.link}>
                      <Button variant="link" className="p-0 h-auto text-primary group">
                        Explore {resource.title}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest from our blog</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tips, tricks, and insights to help you create better presentations and get the most out of Pitch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources[0].items.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/resources/blog/${index + 1}`}>
                      <Button variant="link" className="p-0 h-auto text-primary group">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/resources/blog">
                <Button>View all blog posts</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Webinars */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">On-demand webinars</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Watch our webinars to learn from presentation experts and get the most out of Pitch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {resources[1].items.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={webinar.image || "/placeholder.svg"}
                      alt={webinar.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{webinar.date}</p>
                    <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                    <p className="text-gray-600 mb-4">{webinar.excerpt}</p>
                    <Link href={`/resources/webinars/${index + 1}`}>
                      <Button variant="link" className="p-0 h-auto text-primary group">
                        Watch webinar
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/resources/webinars">
                <Button>View all webinars</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to get started with Pitch?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams who use Pitch to create better presentations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Sign up for free
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

