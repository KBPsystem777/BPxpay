import { useConnect } from "wagmi"
import { walletConnect } from "wagmi/connectors"

import { Button } from "@/components/ui/button"

export function WalletConnect() {
  const { connect } = useConnect()

  const walletConnectConnector = walletConnect({
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  })

  return (
    <Button onClick={() => connect({ connector: walletConnectConnector })}>
      WalletConnect
    </Button>
  )
}
