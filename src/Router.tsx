import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { BPxHomepage } from "./components/BPxHomepage"

import PaymentPage from "./pages/payment"
import PayWithSonic from "./pages/pay-with-sonic"

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BPxHomepage />} />
      <Route path="/demo/payment" element={<PaymentPage />} />
      <Route path="/pay-with-sonic" element={<PayWithSonic />} />
    </Routes>
  </Router>
)

export default AppRouter
