export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Get answers to common questions about BPxPay.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "When will BPxPay be available?",
              answer:
                "We're currently in private beta testing and plan to launch our public beta in Q3 2025. Join our waitlist to be among the first to get access.",
            },
            {
              question: "How does BPxPay compare to GCash and PayMaya?",
              answer:
                "BPxPay offers lower transaction fees, faster settlements, and a more developer-friendly API compared to existing solutions. We're built specifically for Philippine businesses with local support and compliance.",
            },
            {
              question: "What payment methods will be supported?",
              answer:
                "BPxPay will support all major payment methods in the Philippines including credit/debit cards, e-wallets (GCash, PayMaya, etc.), online banking, over-the-counter payments, and QR code payments.",
            },

            {
              question: "Will there be any special offers for early adopters?",
              answer:
                "Members of our waitlist will receive special perks including NFT and token airdrops, zero transaction fees for the first 3 months, priority support, and early access to new features.",
            },
          ].map((item, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium">{item.question}</h3>
              <p className="mt-2 text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
