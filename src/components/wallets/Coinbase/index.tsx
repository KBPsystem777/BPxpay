import { useConnect } from "wagmi"
import { coinbaseWallet } from "wagmi/connectors"

import { Button } from "@/components/ui/button"

export function Coinbase() {
  const { connect } = useConnect()
  const coinbaseConnector = coinbaseWallet()

  return (
    <Button
      className="bg-blue-700"
      onClick={() => connect({ connector: coinbaseConnector })}
    >
      Coinbase
    </Button>
  )
}
