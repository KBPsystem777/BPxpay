import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false)

  function MobileNav() {
    return (
      <div className="flex flex-col space-y-3">
        <a
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
        >
          About
        </a>
        <a
          href="#how-it-works"
          className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
        >
          How It Works
        </a>
        <a
          href="#partnership"
          className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
        >
          Partnerships
        </a>
        <a href="/demo">
          <Button
            variant="default"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
          >
            Demo
          </Button>
        </a>
      </div>
    )
  }

  const NavItems = () => (
    <>
      <a
        href="/"
        className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        About
      </a>
      <a
        href="#how-it-works"
        className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        How It Works
      </a>
      <a
        href="#partnership"
        className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        Parnerships
      </a>
      <Link to="/demo">
        <Button
          variant="default"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
        >
          Demo
        </Button>
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white backdrop-blur-sm px-4">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-purple-600">BPxpay</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <NavItems />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
