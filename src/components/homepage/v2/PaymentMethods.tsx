import { TokenIcon } from "@web3icons/react"

import { coins } from "@/components/constants/coins.const"

export const PaymentMethods = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Accept All Payment Methods
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Provide your customers with flexible payment options to increase
            conversion rates.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {coins.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm"
            >
              <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center mb-3">
                <TokenIcon symbol={method.symbol} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-center">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
