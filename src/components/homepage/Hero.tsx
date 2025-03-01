import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="bg-web3-gradient py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Next-Gen Payments: Faster, Safer, and More Affordable
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          BPxPay is a modern payment solution designed to be fast, safe, and
          cost-effective. Send and receive payments in crypto with ease and
          security.
        </p>
        <Link
          to="/demo"
          className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Try Our Demo
        </Link>
      </div>
    </section>
  )
}
