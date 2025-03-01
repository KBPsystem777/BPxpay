import { useState } from "react"
import { toast } from "sonner"

import { supabase } from "@/config/supabase"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")

  const addSubscriber = async (email: string) => {
    const { error } = await supabase.from("bpxpay_email_subscriptions").insert([
      {
        email,
      },
    ])

    if (error) {
      if (error?.code === "23505") {
        toast.info("You're already subscribed! Thank you 💙")
      }
      console.error("Error adding subscriber: ", error)
    } else {
      toast.success("Thank you for joining our waitlist💙")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addSubscriber(email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-web3-gradient">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          Be the first to experience BPxPay!
        </h2>
        <p className="text-xl mb-8 text-black-200">
          Something big is coming!{" "}
          <span className="font-bold">Join our exclusive waiting list</span> and
          be the first to experience BPxPay. Subscribe to our newsletter for
          early access, updates, and insider news. Sign up now and stay ahead of
          the curve! 📩
        </p>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-r-lg font-semibold text-white"
            >
              Join the waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
