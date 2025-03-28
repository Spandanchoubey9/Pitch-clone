"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function DemoPage() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
    date: undefined as Date | undefined,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const nextStep = () => {
    setFormStep(formStep + 1)
  }

  const prevStep = () => {
    setFormStep(formStep - 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Link href="/" className="inline-block mb-8">
              <img src="/images/pitch-logo.png" alt="Pitch" className="h-10 w-auto" />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get a personalized demo</h1>
            <p className="text-lg text-gray-600">
              See how Pitch can help your team create better presentations and win more deals.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Thank you for your interest!</h2>
              <p className="text-gray-600 mb-6">
                We've received your request for a demo. One of our product specialists will contact you soon to schedule
                your personalized demo.
              </p>
              <Link href="/">
                <Button>Return to homepage</Button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                      formStep >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-500",
                    )}
                  >
                    1
                  </div>
                  <span className={formStep >= 1 ? "text-gray-900 font-medium" : "text-gray-500"}>Your info</span>
                </div>
                <div className="h-0.5 w-12 bg-gray-200 mx-2"></div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                      formStep >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-500",
                    )}
                  >
                    2
                  </div>
                  <span className={formStep >= 2 ? "text-gray-900 font-medium" : "text-gray-500"}>Details</span>
                </div>
                <div className="h-0.5 w-12 bg-gray-200 mx-2"></div>
                <div className="flex items-center">
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-2",
                      formStep >= 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-500",
                    )}
                  >
                    3
                  </div>
                  <span className={formStep >= 3 ? "text-gray-900 font-medium" : "text-gray-500"}>Schedule</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {formStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
                        <SelectTrigger id="role" className="mt-1">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive">Executive</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="individual">Individual Contributor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => handleSelectChange("teamSize", value)}
                      >
                        <SelectTrigger id="teamSize" className="mt-1">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-200">51-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="501+">501+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">What are you looking to achieve with Pitch?</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="mt-1"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="button" onClick={nextStep}>
                        Next
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label>Select a preferred date for your demo</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full mt-1 justify-start text-left font-normal",
                              !formData.date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? format(formData.date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={handleDateSelect}
                            initialFocus
                            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-sm text-gray-500 mt-2">
                        Our team will follow up to confirm the exact time for your demo.
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm text-gray-500 mb-6">
                        By submitting this form, you agree to our{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit">Request Demo</Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

