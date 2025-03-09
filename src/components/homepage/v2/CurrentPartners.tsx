import { PARTNERS_WEBSITE } from "@/components/constants/urls.const"

import sonicLogo from "@/imgs/s-logo.png"
import baseLogo from "@/imgs/base-logo.png"
import victionLogo from "@/imgs/viction-logo.png"

export const CurrentPartners = () => {
  const redirectToPartner = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Current Partners
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            We're proud to be working with industry leaders to bring you the
            best payment experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {/* Viction */}
          <div
            className="flex flex-col items-center p-8 rounded-xl border bg-white shadow-md hover:shadow-lg transition-shadow"
            onClick={() => redirectToPartner(PARTNERS_WEBSITE.VICTION)}
          >
            <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gradient-to-br rounded-full p-4">
              <img src={victionLogo} alt="Viction" />
            </div>
            <h3 className="text-xl font-bold mb-2">Viction</h3>
            <p className="text-center text-muted-foreground">
              Viction stands out by offering zero-gas transactions, high
              scalability, and enhanced security.
            </p>
          </div>

          {/* Coinbase */}
          <div
            className="flex flex-col items-center p-8 rounded-xl border bg-white shadow-md hover:shadow-lg transition-shadow"
            onClick={() => redirectToPartner(PARTNERS_WEBSITE.BASE)}
          >
            <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gradient-to-br rounded-full p-4">
              <img src={baseLogo} alt="Base" />
            </div>
            <h3 className="text-xl font-bold mb-2">Base</h3>
            <p className="text-center text-muted-foreground">
              Base ensures faster transactions, enhanced security, and lower
              fees, providing consumers with a seamless and efficient payment
              experience.
            </p>
          </div>

          {/* Sonic */}
          <div
            className="flex flex-col items-center p-8 rounded-xl border bg-white shadow-md hover:shadow-lg transition-shadow"
            onClick={() => redirectToPartner(PARTNERS_WEBSITE.SONIC)}
          >
            <div className="w-32 h-32 mb-6 flex items-center justify-center prim rounded-full p-4">
              <img src={sonicLogo} alt="Sonic" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sonic</h3>
            <p className="text-center text-muted-foreground">
              Sonic is the highest performing Layer 1 blockchain that combines
              speed, incentives and world class infrastructure.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Interested in becoming a partner?{" "}
            <a href="#contact" className="text-purple-600 hover:underline">
              Contact us
            </a>{" "}
            to explore collaboration opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
