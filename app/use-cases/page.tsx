"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const useCases = [
  {
    id: "sales",
    title: "Sales",
    description: "Close more deals with compelling sales presentations",
    image: "/images/dashboard-preview.png",
    benefits: [
      "Create professional sales decks in minutes",
      "Customize templates to match your brand",
      "Track engagement and follow up with prospects",
      "Share presentations with a single link",
    ],
    link: "/use-cases/sales",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Create stunning marketing presentations that drive results",
    image: "/images/feature-design.png",
    benefits: [
      "Build beautiful campaign presentations",
      "Maintain brand consistency across all materials",
      "Collaborate with internal and external stakeholders",
      "Measure campaign performance",
    ],
    link: "/use-cases/marketing",
  },
  {
    id: "product",
    title: "Product",
    description: "Showcase your product vision and roadmap with clarity",
    image: "/images/feature-collaborate.png",
    benefits: [
      "Visualize product roadmaps and strategies",
      "Share updates with stakeholders",
      "Gather feedback and iterate quickly",
      "Keep everyone aligned on product vision",
    ],
    link: "/use-cases/product",
  },
  {
    id: "design",
    title: "Design",
    description: "Present design concepts that impress clients and stakeholders",
    image: "/images/feature-analyze.png",
    benefits: [
      "Create visually stunning design presentations",
      "Maintain pixel-perfect layouts",
      "Collaborate with clients in real-time",
      "Get feedback and approval faster",
    ],
    link: "/use-cases/design",
  },
]

export default function UseCasesPage() {
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
                Pitch for every team and use case
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl mb-8"
              >
                Discover how teams across different departments use Pitch to create better presentations and drive
                results.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <div key={useCase.id} className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={index % 2 === 0 ? "md:order-1" : "md:order-2"}
                  >
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={index % 2 === 0 ? "md:order-2" : "md:order-1"}
                  >
                    <h2 className="text-3xl font-bold mb-4">Pitch for {useCase.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-3 mb-8">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={useCase.link}>
                      <Button className="group">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What our customers say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from teams who use Pitch to create better presentations and achieve their goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    AB
                  </div>
                  <div>
                    <h3 className="font-semibold">Alex Brown</h3>
                    <p className="text-sm text-gray-500">Sales Director, TechCorp</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Pitch has transformed how our sales team creates and delivers presentations. We've seen a 30%
                  increase in close rates since switching to Pitch."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SJ
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Marketing Manager, GrowthLabs</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a marketing team, brand consistency is crucial. Pitch helps us maintain our brand guidelines
                  across all presentations while allowing for creativity."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    DK
                  </div>
                  <div>
                    <h3 className="font-semibold">David Kim</h3>
                    <p className="text-sm text-gray-500">Product Lead, InnovateCo</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Pitch has streamlined our product team's workflow. We can collaborate in real-time, get feedback
                  quickly, and iterate on our roadmap presentations."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to transform your presentations?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams who use Pitch to create better presentations and achieve their goals.
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

