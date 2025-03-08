import { Zap, CreditCard, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"

export const Partnership = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Join us in revolutionizing the payment landscape in the Philippines.
            We're looking for strategic partners to grow together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Financial Institutions",
              description:
                "Banks, credit unions, and financial service providers looking to enhance their digital payment offerings.",
              icon: <CreditCard className="h-10 w-10 text-purple-600" />,
            },
            {
              title: "Merchants & Retailers",
              description:
                "Businesses of all sizes looking for more efficient, cost-effective payment processing solutions.",
              icon: <DollarSign className="h-10 w-10 text-purple-600" />,
            },
            {
              title: "Technology Providers",
              description:
                "Software companies, e-commerce platforms, and technology solutions providers seeking payment integrations.",
              icon: <Zap className="h-10 w-10 text-purple-600" />,
            },
          ].map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm"
            >
              <div className="mb-4 p-3 rounded-full bg-purple-100">
                {partner.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
              <p className="text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Interested in partnering with BPxPay? We'd love to hear from you!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  )
}
