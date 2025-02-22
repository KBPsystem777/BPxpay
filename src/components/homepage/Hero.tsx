import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="bg-web3-gradient py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Welcome to BPxpay
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          The Stripe of Crypto - Revolutionizing Decentralized Payments
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
