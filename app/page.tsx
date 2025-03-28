"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { FeatureTabs } from "@/components/feature-tabs"
import { Footer } from "@/components/footer"

export default function Home() {
  // Preload images for smoother transitions
  useEffect(() => {
    const imageUrls = ["/images/dashboard-preview.png", "/images/editor-preview.png", "/images/template-preview.png"]

    imageUrls.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureTabs />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}

