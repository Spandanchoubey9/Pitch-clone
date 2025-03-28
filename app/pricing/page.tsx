"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Free",
    description: "For individuals and small teams just getting started",
    price: { monthly: 0, annual: 0 },
    features: [
      "Up to 3 team members",
      "Unlimited presentations",
      "Basic templates",
      "1GB storage",
      "Export to PDF",
      "Community support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For teams that need more collaboration and branding features",
    price: { monthly: 8, annual: 6 },
    features: [
      "Unlimited team members",
      "Unlimited presentations",
      "Advanced templates",
      "10GB storage",
      "Export to PDF, PowerPoint",
      "Custom branding",
      "Priority support",
      "Analytics",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations that need advanced security and control",
    price: { monthly: "Custom", annual: "Custom" },
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Advanced security",
      "Dedicated account manager",
      "Custom templates",
      "Unlimited storage",
      "API access",
      "24/7 premium support",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

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
                Simple, transparent pricing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl mb-8"
              >
                Choose the plan that's right for your team. All plans include a 14-day free trial.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-2">
                <span className={billingCycle === "monthly" ? "font-medium" : "text-gray-500"}>Monthly</span>
                <Switch
                  checked={billingCycle === "annual"}
                  onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
                />
                <div className="flex items-center">
                  <span className={billingCycle === "annual" ? "font-medium" : "text-gray-500"}>Annual</span>
                  <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                    Save 25%
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                    plan.popular ? "border-primary" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-white text-center py-2 text-sm font-medium">Most Popular</div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">
                          {typeof plan.price[billingCycle] === "number"
                            ? `$${plan.price[billingCycle]}`
                            : plan.price[billingCycle]}
                        </span>
                        {typeof plan.price[billingCycle] === "number" && (
                          <span className="text-gray-500 ml-2">per user / month</span>
                        )}
                      </div>
                      {typeof plan.price[billingCycle] === "number" && billingCycle === "annual" && (
                        <p className="text-sm text-gray-500 mt-1">Billed annually</p>
                      )}
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={plan.name === "Enterprise" ? "/demo" : "/auth/signup"}>
                      <Button
                        className={`w-full ${plan.popular ? "" : "bg-gray-800 hover:bg-gray-700"}`}
                        variant={plan.popular ? "default" : "outline"}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be charged
                    the prorated difference. If you downgrade, you'll receive credit towards future billing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">How does the 14-day trial work?</h3>
                  <p className="text-gray-600">
                    Your trial gives you full access to all Pro features for 14 days. No credit card required. At the
                    end of your trial, you can choose to subscribe or your account will automatically switch to the Free
                    plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise
                    plans, we also offer invoicing.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I get a refund?</h3>
                  <p className="text-gray-600">
                    We offer a 30-day money-back guarantee. If you're not satisfied with Pitch within the first 30 days,
                    contact our support team for a full refund.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do you offer discounts for nonprofits or education?</h3>
                  <p className="text-gray-600">
                    Yes, we offer special pricing for nonprofit organizations, educational institutions, and students.
                    Please contact our sales team for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 md:py-24 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to get started with Pitch?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of teams who use Pitch to create better presentations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start your free trial
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact sales
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

