import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "@coinbase/onchainkit/styles.css"

import { Toaster } from "./components/ui/sonner"

import Homepage from "./pages/Home"
import PaymentPage from "./pages/payment"
import PayWithSonic from "./pages/pay"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/demo" element={<PaymentPage />} />
        <Route path="/pay" element={<PayWithSonic />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
