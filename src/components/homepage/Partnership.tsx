export default function Partnership() {
  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
          Partnership
        </h2>
        <p className="text-xl mb-4 text-black">
          We are open for partnerships! If you are a blockchain project looking
          to list your native tokens on our payment platform or a stablecoin
          issuer, we would love to collaborate with you.
        </p>
        <p className="text-lg mb-4 text-black">
          Email:{" "}
          <a
            href="mailto:bpxailabs@gmail.com"
            className="font-bold mb-8 text-center text-gradient"
          >
            bpxailabs@gmail.com
          </a>
        </p>
        <p className="text-lg mb-8 text-black">Or book a meeting with us:</p>
        <a
          href="https://calendly.com/bpxailabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold text-white"
        >
          Book a Meeting
        </a>
      </div>
    </section>
  )
}
