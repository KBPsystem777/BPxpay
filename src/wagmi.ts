import { http, createConfig } from "wagmi"
import { defineChain } from "viem"

import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors"

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
    walletConnect({
      projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    }),
    coinbaseWallet(),
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
