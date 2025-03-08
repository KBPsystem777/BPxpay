import { useState } from "react"
import { toast } from "sonner"

import { supabase } from "@/config/supabase"

import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
export const Waitlist = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [interest, setInterest] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const addSubscriber = async () => {
    const { error } = await supabase.from("bpxpay_email_subscriptions").insert([
      {
        email,
        name,
        company,
        interest,
        wallet_address: walletAddress,
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
    addSubscriber()
    setSubmitted(true)
    setEmail("")
    setInterest("")
    setName("")
    setCompany("")
    setWalletAddress("")
  }

  return (
    <section
      id="waitlist"
      className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-50"
    >
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 md:p-12 lg:p-16 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Be the First to Experience BPxPay
              </h2>
              <p className="text-lg text-purple-100 md:text-xl">
                Join our exclusive waitlist and get early access when we launch.
                Plus, receive special perks for being an early adopter.
              </p>
              <ul className="space-y-2 text-purple-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-200 flex-shrink-0" />
                  <span>Early access to our platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-200 flex-shrink-0" />
                  <span>Zero transaction fees for the first 3 months</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-200 flex-shrink-0" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md border-0 bg-white/10 px-3 py-2 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border-0 bg-white/10 px-3 py-2 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-white"
                    >
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      className="w-full rounded-md border-0 bg-white/10 px-3 py-2 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium text-white"
                      htmlFor="walletAddress"
                    >
                      Wallet Address (Optional)
                    </label>
                    <input
                      className="w-full rounded-md border-0 bg-white/10 px-3 py-2 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Your Ethereum or Solana wallet address"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">
                      I'm interested as a:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="business"
                          name="interest"
                          className="text-purple-900"
                          value="business"
                          onChange={(e) => setInterest(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="business"
                          className="text-sm text-white"
                        >
                          Business
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="individual"
                          name="interest"
                          className="text-purple-900"
                          value="individual"
                          onChange={(e) => setInterest(e.target.value)}
                          required
                        />
                        <label
                          htmlFor="individual"
                          className="text-sm text-white"
                        >
                          Individual
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white text-purple-900 hover:bg-purple-50"
                  >
                    Join the Waitlist
                  </Button>
                  <p className="text-xs text-purple-200 text-center">
                    By joining, you agree to receive updates about our launch.
                    We'll never spam you or share your information.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-white">
                    <CheckCircle2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You for Joining!
                  </h3>
                  <p className="text-purple-100">
                    You're now on our waitlist. We'll notify you as soon as
                    BPxPay is ready to launch.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4 border-white text-gray-700 hover:bg-white/20"
                  >
                    Add Another Email
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
