import { TbBrandLinktree } from "react-icons/tb"

export const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            Have questions or want to learn more about BPxPay? We're here to
            help.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Reach out to us with any questions, partnership inquiries, or to
                learn more about our upcoming launch.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary mt-0.5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div>
                    <a
                      href="mailto:bpxpay@gmail.com"
                      target="_blank"
                      className="text-primary hover:underline font-bold"
                    >
                      bpxpay@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest news and announcements by following
                us on social media.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://x.com/bpxpay"
                  target="_blank"
                  className="p-3 rounded-full bg-purple-100 text-primary hover:bg-blue-200 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </a>
                <a
                  href="https://linktr.ee/bpxpay"
                  className="p-3 rounded-full bg-primary-50 text-primary hover:bg-primary-200 transition-colors"
                >
                  <TbBrandLinktree className="h-5 w-5" />
                  <span className="sr-only">LinkTree</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
