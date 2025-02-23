import { http, createConfig } from "wagmi"
import { injected } from "wagmi/connectors"
import { defineChain } from "viem"

export const customBlazeNet = defineChain({
  id: 57054,
  name: "Sonic Blaze Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Sonic",
    symbol: "S",
  },
  rpcUrls: {
    default: { http: ["https://rpc.blaze.soniclabs.com"] },
  },
  blockExplorers: {
    default: {
      name: "Sonic Testnet Explorer",
      url: "https://testnet.soniclabs.org/",
    },
  },
  testnet: true,
})

export const config = createConfig({
  chains: [customBlazeNet],
  connectors: [
    injected(),
    // walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [customBlazeNet.id]: http(),
    // [baseSepolia.id]: http(),
    // [base.id]: http(),
    //  [sonic.id]: http(),
  },
})

declare module "wagmi" {
  interface Register {
    config: typeof config
  }
}
