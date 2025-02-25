export default function DemoHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-white font-bold text-xl">
          Netflix
        </a>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
