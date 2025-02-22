export default function SubscriptionForm() {
  return (
    <section className="py-20 bg-web3-gradient">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Stay Updated</h2>
        <p className="text-xl mb-8 text-gray-200">
          Subscribe to our newsletter for the latest updates and features.
        </p>
        <form
          className="max-w-md mx-auto"
          action="/api/subscribe"
          method="POST"
        >
          <div className="flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-r-lg font-semibold text-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
