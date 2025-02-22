import { HomeHeader } from "@/components/header/HomeHeader"
import { Footer } from "@/components/Footer"

import Roadmap from "@/components/homepage/Roadmap"
import About from "@/components/homepage/About"
import HowBpxPayWorks from "@/components/homepage/HowBpxPayWorks"
import SubscriptionForm from "@/components/homepage/SubscriptionForm"
import Partnership from "@/components/homepage/Partnership"
import ContactUs from "@/components/homepage/ContactUs"
import Hero from "@/components/homepage/Hero"

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-500 font-serif font-light">
      <HomeHeader />
      <main className="flex-grow">
        <Hero />
        <About />
        <HowBpxPayWorks />
        <SubscriptionForm />
        <Partnership />
        <Roadmap />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
