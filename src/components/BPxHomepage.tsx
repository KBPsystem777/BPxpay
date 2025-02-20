import { useNavigate } from "react-router-dom"
import "../styles/BPxHomepage.scss"

export const BPxHomepage = () => {
  const navigate = useNavigate()
  const navigateToDemo = () => {
    navigate("/demo/payment")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="font-mono">BPxFinance</h1>

      <div className="container pt-5">
        <button
          onClick={navigateToDemo}
          className="text-lg bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Payment demo
        </button>
      </div>
    </div>
  )
}
