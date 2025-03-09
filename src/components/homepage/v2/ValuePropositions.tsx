import { Zap, CheckCircle2, Shield, DollarSign } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export const ValuePropositions = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose BPxPay?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Our platform offers unmatched benefits designed specifically for the
            Philippine market.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Speed */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="mt-2 text-muted-foreground">
                Process transactions in milliseconds, ensuring your customers
                never have to wait.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Instant confirmations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Real-time processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Same-day settlements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Bank-Grade Security</h3>
              <p className="mt-2 text-muted-foreground">
                Protect your business and customers with our robust security
                infrastructure.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Secured by blockchain</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Fraud detection systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Verifiable transactions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Affordability */}
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cost-Effective</h3>
              <p className="mt-2 text-muted-foreground">
                Save on transaction fees with our competitive pricing structure.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">
                    Lower fees than traditional gateways
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">No hidden charges</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Volume-based discounts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
