import roadmapImg from "@/imgs/roadmap.png"

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="py-20 bg-gradient-to-r from-purple-600 to-white-100"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Product Roadmap</h2>
        <p className="text-xl mb-8 text-gray-200">
          Here is our roadmap for the upcoming developments and features.
        </p>
        <img
          src={roadmapImg}
          alt="Product Roadmap"
          className="mx-auto border-spacing-5"
        />
      </div>
    </section>
  )
}
