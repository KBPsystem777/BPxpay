export default function HowBpxPayWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
          How BPxpay Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-lg border border-purple-500">
            <h3 className="text-xl font-semibold mb-4 text-black">
              1. Integration
            </h3>
            <p className="text-black">
              Easily integrate BPxpay into your website or app with our simple
              API and SDKs.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-purple-500">
            <h3 className="text-xl font-semibold mb-4 text-black">
              2. Transaction
            </h3>
            <p className="text-black">
              Customers choose their preferred cryptocurrency to make fast and
              secure payments.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-purple-500">
            <h3 className="text-xl font-semibold mb-4 text-black">
              3. Settlement
            </h3>
            <p className="text-black">
              Receive funds in your preferred currency - crypto or fiat - with
              low transaction fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
