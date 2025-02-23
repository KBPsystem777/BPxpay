export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  const footerText = `${getCurrentYear()} BPxpay. All rights reserved | `

  return (
    <footer className="bg-white text-black py-6 border-t">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {footerText}
          <a
            href="https://linktr.ee/koleenbp"
            className="text-blue-600 hover:underline"
          >
            Koleen Paunon
          </a>
        </p>
      </div>
    </footer>
  )
}
