import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { useNavigate } from "react-router-dom"
import { injected, useAccount, useConnect, useSwitchChain } from "wagmi"

import jsPDF from "jspdf"

import { stringToHex } from "viem"
import { customBlazeNet } from "@/wagmi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { WalletConnect } from "@/components/wallets/WalletConnect"
import { Coinbase } from "@/components/wallets/Coinbase"

import { shortenHash } from "@/utils/shortenHash.utils"

import sLogo from "@/imgs/s-logo.png"

export default function PayWithSonic() {
  const [walletAddress, setWalletAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [plan, setPlan] = useState("")
  const [txHash, setTxHash] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("pending")

  const { isConnected } = useAccount()
  const { connect } = useConnect()
  const { switchChain } = useSwitchChain()
  const { chainId } = useAccount()
  const navigate = useNavigate()

  useEffect(() => {
    // TODO: Fetch wallet address from your backend or payment provider
    // @note This is a hardcoded address of kbpsystem777.base.eth
    setWalletAddress("0x78D1F9807A72188ac2B634eE9eAfFA2cbCE2c0B5")

    // Get the amount and plan from the URL
    const urlParams = new URLSearchParams(window.location.search)
    const amountParam = urlParams.get("amount")
    const planParam = urlParams.get("plan")
    if (amountParam) setAmount(amountParam)
    if (planParam) setPlan(planParam)
  }, [])

  const handlePaymentCheck = async () => {
    // TODO: Implement payment verification logic
    // This should communicate with your backend to check the payment status
    setPaymentStatus("success")
    // generateReceipt(txHash)
  }

  const generateReceipt = (hash: string) => {
    const doc = new jsPDF()
    const fileId = Math.random().toString(16).substr(2, 9)

    console.log("Generating receipt...")
    // Add StreamFlix logo (assuming you have a logo.png in your public folder)
    // doc.addImage("/streamflix-logo.png", "PNG", 10, 10, 50, 20)
    doc.setFontSize(22)
    doc.text("Netflix Receipt", 105, 30, { align: "center" })

    doc.setFontSize(12)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50)
    doc.text(
      `Transaction ID: ${Math.random().toString(36).substr(2, 9)}`,
      20,
      60
    )

    doc.text("Customer Details:", 20, 80)
    doc.text(`Plan: ${plan}`, 30, 90)
    doc.text(`Amount Paid: $${amount} S`, 30, 100)

    doc.text("Payment Details:", 20, 120)
    doc.text(`Method: S`, 30, 130)
    doc.text(`Wallet Address: ${walletAddress}`, 30, 140)

    const transactionHashText = `Transaction hash: https://testnet.sonicscan.org/tx/${hash}`
    const splitTransactionHashText = doc.splitTextToSize(
      transactionHashText,
      180
    )
    doc.text(splitTransactionHashText, 20, 150)

    doc.setFontSize(10)
    doc.text("Thank you for subscribing to Netflix!", 105, 180, {
      align: "center",
    })

    // Save the PDF
    doc.save(`BPxpay__Netflix_Receipt-${fileId}.pdf`)
  }

  const sendEther = async () => {
    if (chainId != customBlazeNet?.id) {
      console.log("Switching to blaze network...")
      // @note Swithing the wallet on BlazeNet
      switchChain({ chainId: customBlazeNet.id })
      return
    }
    try {
      // Create a provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()

      const msg = `Payment for Netflix ${plan} subscription via BPxPay`
      const hexdMsg = stringToHex(msg)

      // @note Send the transaction
      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.parseEther("0.003"),
        data: hexdMsg,
      })

      await tx.wait()

      setTxHash(tx.hash)
      handlePaymentCheck()
    } catch (error) {
      console.error("Transaction payment failed: ", error)
    }
  }

  const isWalletConnected = isConnected

  const ConnectWalletComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 space-y-4">
        <img src={sLogo} alt="Sonic" className="w-12 h-12 inline-block mb-2" />
        <p className="text-2xl font-bold mb-4 text-slate-50">
          Connect your wallet to pay using $S
        </p>
        <Button
          onClick={() => connect({ connector: injected(), chainId: 57054 })}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Connect Wallet
        </Button>
        <Coinbase />
        <WalletConnect />
      </div>
    )
  }

  const PaymentForm = () => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white space-y-4">
        {
          // @note @todo Make this logo dynamic depending on the payment method
        }
        <img src={sLogo} alt="Sonic" className="w-12 h-12 inline-block mb-4" />
        {
          // @note End of dynamic logo
        }
        <h1 className="text-2xl font-bold mb-4">Pay with $S</h1>
        <div className="mb-4 w-full max-w-xs">
          <Label htmlFor="plan">Selected Plan</Label>
          <Input
            id="plan"
            value={plan}
            readOnly
            className="w-full bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="mb-4 w-full max-w-xs">
          <Label htmlFor="wallet-address">Wallet Address</Label>
          <Input
            id="wallet-address"
            value={walletAddress}
            readOnly
            className="w-full bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="mb-4 w-full max-w-xs">
          <Label htmlFor="amount">Amount </Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            readOnly
            className="w-full bg-gray-800 border-gray-700 text-white"
          />
        </div>
        <div className="flex space-x-10">
          <Button
            onClick={() => navigate("/")}
            className="bg-grey-600 hover:bg-gray-700"
          >
            Back to Home
          </Button>
          <Button
            onClick={sendEther}
            className="bg-red-600 hover:bg-red-700 w-full"
          >
            Confirm Payment
          </Button>
        </div>
        {paymentStatus === "success" && (
          <div className="mt-4 p-4 border rounded-md bg-green-800 text-white w-full max-w-xs">
            <h2 className="text-xl font-bold mb-2">Payment Successful</h2>
            <p>
              Transaction hash:{" "}
              <a
                className="font-bold"
                href={`https://testnet.sonicscan.org/tx/${txHash}`}
              >
                {shortenHash(txHash, 3)}
              </a>
            </p>
            <p>
              Thank you for your payment. Your Netflix {plan} subscription is
              now active.
            </p>
            <p className="mt-2">
              A receipt has been downloaded to your device.
            </p>
          </div>
        )}
      </div>
    )
  }
  return isWalletConnected ? <PaymentForm /> : <ConnectWalletComponent />
}
