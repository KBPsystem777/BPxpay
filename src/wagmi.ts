import { http, createConfig } from "wagmi"
import { base, baseSepolia, sonic, sonicTestnet } from "wagmi/chains"
import { coinbaseWallet, injected } from "wagmi/connectors"

export const config = createConfig({
  chains: [base, baseSepolia, sonicTestnet],
  connectors: [
    injected(),
    coinbaseWallet(),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [baseSepolia.id]: http(),
    [base.id]: http(),
    [sonicTestnet.id]: http(),
    [sonic.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}
