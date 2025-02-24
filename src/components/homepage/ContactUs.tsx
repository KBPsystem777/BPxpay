export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-web3-gradient">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Us</h2>
        <p className="text-xl mb-4 text-gray-200">
          Have questions or need assistance? Reach out to us!
        </p>
        <p className="text-lg mb-4 text-gray-200">
          Email:{" "}
          <a
            href="mailto:bpxailabs@gmail.com"
            className="text-white hover:underline font-bold"
          >
            bpxailabs@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
