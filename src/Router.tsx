import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Homepage from "./pages/Home"
import PaymentPage from "./pages/payment"
import PayWithSonic from "./pages/pay"

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/demo" element={<PaymentPage />} />
      <Route path="/pay" element={<PayWithSonic />} />
    </Routes>
  </Router>
)

export default AppRouter
