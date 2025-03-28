"use client"

import { motion } from "framer-motion"
import { Zap, Layout, Users, Lock, Palette, Share2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Create professional presentations in minutes, not hours, with our intuitive editor and smart templates.",
  },
  {
    icon: Layout,
    title: "Beautiful Templates",
    description: "Choose from hundreds of professionally designed templates to get started quickly.",
  },
  {
    icon: Palette,
    title: "Brand Control",
    description: "Maintain brand consistency with custom color palettes, fonts, and design elements.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time, no matter where they are located.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share your presentations with anyone, anywhere, with just a link.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Keep your data safe with enterprise-grade security and compliance features.",
  },
]

export function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Everything you need to create winning presentations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Pitch combines powerful presentation tools with seamless collaboration features to help your team create
            stunning presentations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

