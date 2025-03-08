export const Timeline = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Launch Timeline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-[700px]">
            We're working hard to bring BPxPay to the Philippine market. Here's
            what to expect:
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-purple-200"></div>

          {/* Timeline items */}
          {[
            {
              date: "Q1 2025",
              title: "MVP Development",
              description: "Initial development",
              active: true,
            },
            {
              date: "Q2 2025",
              title: "Parnership Launch",
              description: "Early access for waitlist members and partners",
              active: false,
            },
            {
              date: "Q3 2025",
              title: "Continuous product development",
              description: "Developing core features and integrations",
              active: false,
            },
            {
              date: "Q4 2025",
              title: "MVP Preview",
              description: "Product available for public preview",
              active: false,
            },
          ].map((item, index) => (
            <div key={index} className="relative grid grid-cols-5 gap-4 py-8">
              <div
                className={`col-span-2 text-right pr-8 ${index % 2 === 1 ? "md:col-start-4 md:text-left md:pl-8 md:pr-0" : ""}`}
              >
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.active ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}`}
                >
                  {item.date}
                </span>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="col-span-1 flex justify-center">
                <div
                  className={`relative top-4 h-4 w-4 rounded-full border-2 ${item.active ? "border-purple-600 bg-purple-600" : "border-gray-300 bg-white"}`}
                ></div>
              </div>
              <div
                className={`col-span-2 pl-8 ${index % 2 === 1 ? "md:col-start-1 md:text-right md:pr-8 md:pl-0" : ""}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <h3 className="text-lg font-bold mt-1 md:hidden">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground md:hidden">
                      {item.description}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold mt-1 hidden md:block">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground hidden md:block">
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
