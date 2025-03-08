import bpxPayLogo from "@/imgs/bpxpay-logo.png"
import gcashLogo from "@/imgs/gcash.png"
import mayaLogo from "@/imgs/maya.png"

export const ComparisonChart = () => {
  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How We Compare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            See why BPxPay will be the preferred payment solution for Philippine
            businesses.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 gap-4 rounded-lg bg-white p-6 shadow-lg">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-700 mb-2">
                    <img src={bpxPayLogo} />
                  </div>
                  <h3 className="font-bold">BPxPay</h3>
                </div>
              </div>
              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 ">
                    <img src={gcashLogo} className="filter grayscale" />
                  </div>
                  <h3 className="font-medium text-muted-foreground">GCash</h3>
                </div>
              </div>
              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12">
                    <img src={mayaLogo} className="filter grayscale" />
                  </div>
                  <h3 className="font-medium text-muted-foreground">PayMaya</h3>
                </div>
              </div>
              <div className="col-span-1 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mb-2"></div>
                  <h3 className="font-medium text-muted-foreground">
                    InstaPay/PESONet
                  </h3>
                </div>
              </div>

              {/* Transaction Fee */}
              <div className="col-span-1 flex items-center border-t pt-4 mt-4">
                <p className="font-medium">Transaction Fee</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="font-bold text-green-600">Less than ₱1</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">₱15</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">₱15</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">₱25-50 flat</p>
              </div>

              {/* Settlement Time */}
              <div className="col-span-1 flex items-center border-t pt-4 mt-4">
                <p className="font-medium">Settlement Time</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="font-bold text-green-600">Ultra fast!</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Fast</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Fast</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">1-2 business days</p>
              </div>

              {/* Integration Ease */}
              <div className="col-span-1 flex items-center border-t pt-4 mt-4">
                <p className="font-medium">Integration Ease</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="font-bold text-green-600">Simple API</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Moderate</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Moderate</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Complex</p>
              </div>

              {/* Payment Methods */}
              <div className="col-span-1 flex items-center border-t pt-4 mt-4">
                <p className="font-medium">Payment Methods</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="font-bold text-green-600">All Local Methods</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Limited</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Limited</p>
              </div>
              <div className="col-span-1 text-center border-t pt-4 mt-4">
                <p className="text-muted-foreground">Bank Only</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
