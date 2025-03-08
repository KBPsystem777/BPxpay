import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "@coinbase/onchainkit/styles.css"

import { Toaster } from "./components/ui/sonner"

import PaymentPage from "./pages/payment"
import PayWithSonic from "./pages/pay"
import NewHomePage from "./pages/Home/NewHomepage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewHomePage />} />
        <Route path="/demo" element={<PaymentPage />} />
        <Route path="/pay" element={<PayWithSonic />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
