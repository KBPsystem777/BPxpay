import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import DemoHeader from "@/components/header/DemoHeader"

// Digital service plans
const servicePlans = [
  { name: "Basic", price: 8.99 },
  { name: "Standard", price: 13.99 },
  { name: "Premium", price: 17.99 },
]

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState(servicePlans[1].name)
  const [selectedPayment, setSelectedPayment] = useState("sonic")

  const currentPlan = servicePlans.find((plan) => plan.name === selectedPlan)
  const total = currentPlan ? currentPlan.price : 0

  const openPaymentWindow = () => {
    const width = 400
    const height = 600
    const left = (window.screen.width - width) / 2
    const top = (window.screen.height - height) / 2

    window.open(
      `/pay-with-sonic?amount=${total.toFixed(2)}&plan=${selectedPlan}`,
      "Sonic Payment",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    )
  }

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Metamask connected")
      } catch (error) {
        console.error("Metamask connection failed: ", error)
      }
    }
  }

  const handlePayment = () => {
    if (selectedPayment === "sonic") {
      connectMetamask()
      openPaymentWindow()
    } else {
      alert(
        `${selectedPayment.toUpperCase()} payment not implemented in this prototype.`
      )
    }
  }

  return (
    <div className="min-h-screen bg-[url('/src/imgs/stream-bg.png')] bg-cover bg-center">
      <DemoHeader />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black bg-opacity-75">
        <Card className="w-full max-w-md bg-black bg-opacity-90 text-white border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl">StreamFlix Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Label
                htmlFor="plan-select"
                className="text-lg font-semibold mb-2 block"
              >
                Select Your Plan
              </Label>
              <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                <SelectTrigger
                  id="plan-select"
                  className="bg-gray-500 border-gray-200"
                >
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent className="bg-gray-200 border-gray-600">
                  {servicePlans.map((plan) => (
                    <SelectItem key={plan.name} value={plan.name}>
                      {plan.name} - ${plan.price.toFixed(2)}/month
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-700 flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}/month</span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Select Payment Method
              </h3>
              <RadioGroup
                value={selectedPayment}
                onValueChange={setSelectedPayment}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="sonic"
                    id="sonic"
                    className="border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-white"
                  />
                  <Label htmlFor="sonic">Pay with Sonic</Label>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="credit"
                    id="credit"
                    className="border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-white"
                  />
                  <Label htmlFor="credit">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="paypal"
                    id="paypal"
                    className="border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-white"
                  />
                  <Label htmlFor="paypal">PayPal</Label>
                </div> */}
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handlePayment}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Subscribe Now
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
