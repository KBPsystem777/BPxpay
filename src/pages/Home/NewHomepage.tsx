import { HomepageHeader } from "@/components/homepage/v2/HomepageHeader"
import { Hero } from "@/components/homepage/v2/Hero"
import { ContactUs } from "@/components/homepage/v2/ContactUs"
import { Waitlist } from "@/components/homepage/v2/Waitlist"
import { CurrentPartners } from "@/components/homepage/v2/CurrentPartners"
import { Timeline } from "@/components/homepage/v2/Timeline"
import { Partnership } from "@/components/homepage/v2/Partnership"
import { TrustIndicator } from "@/components/homepage/v2/TrustIndicator"
import { PaymentMethods } from "@/components/homepage/v2/PaymentMethods"
import { ValuePropositions } from "@/components/homepage/v2/ValuePropositions"
import { DemoSection } from "@/components/homepage/v2/DemoSection"
import { ComparisonChart } from "@/components/homepage/v2/ComparisonChart"
import { FAQ } from "@/components/homepage/v2/FAQ"
import { FinalCta } from "@/components/homepage/v2/FinalCta"

export default function NewHomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <HomepageHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        {/* Trust Indicators */}
        <TrustIndicator />
        {/* Value Proposition */}
        <ValuePropositions />
        {/* Payment Methods */}
        <PaymentMethods />
        {/* Comparison Chart */}
        <ComparisonChart />
        {/* Current Partners */}
        <CurrentPartners />
        {/* Demo Section */}
        <DemoSection />
        {/* Waitlist Section */}
        <Waitlist />
        {/* Coming Soon Timeline */}
        <Timeline />
        {/* Partners Section */}
        <Partnership />
        {/* Contact Us Section */}
        <ContactUs />
        {/* FAQ Section */}
        <FAQ />
        {/* Final CTA */}
        <FinalCta />
      </main>
    </div>
  )
}
