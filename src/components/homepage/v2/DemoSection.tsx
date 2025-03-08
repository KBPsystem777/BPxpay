import { CheckCircle2, ChevronRight, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

import anotherFakeDashboard from "@/imgs/fake-dashboard-again.jpg"

export const DemoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Try BPxPay Today
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Experience the speed and simplicity of our payment solution with our
            interactive demo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center max-w-5xl mx-auto">
          <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-900 opacity-10" />
            <img
              src={anotherFakeDashboard}
              alt="BPxPay Demo Preview"
              className="object-cover filter grayscale"
            />
            <div className="absolute inset-5 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-[80%]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Interactive Demo</h3>
                    <p className="text-sm text-muted-foreground">
                      No signup required
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  🚧 ⚒️ We are working on a demo version of BPxPay. Please check
                  back soon
                  {/* See how BPxPay can streamline your payment process with
                      our guided demo. Experience the interface, try sample
                      transactions, and discover the features that set us apart. */}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl font-bold">Experience BPxPay in Action</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Process Sample Transactions</p>
                  <p className="text-muted-foreground">
                    See firsthand how quickly and seamlessly payments are
                    processed.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Explore the Dashboard</p>
                  <p className="text-muted-foreground">
                    Navigate through our intuitive merchant dashboard and
                    reporting tools.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-6 w-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Test Integration Options</p>
                  <p className="text-muted-foreground">
                    Preview our API documentation and integration samples.
                  </p>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
              >
                Launch Demo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                No registration or credit card required. Just click and explore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
