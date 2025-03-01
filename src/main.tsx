import React from "react"
import ReactDOM from "react-dom/client"

import { Buffer } from "buffer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { WagmiProvider } from "wagmi"
import { OnchainKitProvider } from "@coinbase/onchainkit"
import { base } from "wagmi/chains"

import { config } from "./wagmi.ts"

import App from "./App.tsx"

import "./index.css"

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OnchainKitProvider
      chain={base}
      apiKey={import.meta.env.VITE_PUBLIC_ONCHAINKIT_API_KEY}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </OnchainKitProvider>
  </React.StrictMode>
)
