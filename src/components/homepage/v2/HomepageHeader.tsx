import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

import bpxPayLogo from "@/imgs/bpxpay-logo.png"

export const HomepageHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const redirectToWaitlistForm = () => {
    const formAddress = "https://bit.ly/bpx-waitlist"
    window.open(formAddress, "_blank")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-700">
              <img src={bpxPayLogo} alt="BPxPay" />
            </div>
            <span className="font-bold text-xl">BPxPay</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </a>
          <a
            href="#comparison"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Comparison
          </a>
          <a
            href="#waitlist"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Join Waitlist
          </a>
          <a
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:flex">
          <a href="#waitlist">
            <Button className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800">
              Pre-Register Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t py-4 px-6 bg-background">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#comparison"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comparison
            </a>
            <a
              href="#waitlist"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <a href="#waitlist">
                <Button className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800">
                  Pre-Register Now
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
