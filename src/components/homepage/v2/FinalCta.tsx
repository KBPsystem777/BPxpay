import { Button } from "@/components/ui/button"

import { redirectToWaitlistForm } from "@/utils/redirectToWaitlistForm"

export const FinalCta = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-3xl mx-auto">
          Ready to revolutionize payments for your business?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
          Join our waitlist today and be the first to experience the future of
          digital payments in the Philippines.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            onClick={redirectToWaitlistForm}
            className="bg-gradient-to-r from-primary-500 to-primary-700 hover:from-primary-600 hover:to-primary-800"
          >
            Pre-Register Now
          </Button>
        </div>
      </div>
    </section>
  )
}
