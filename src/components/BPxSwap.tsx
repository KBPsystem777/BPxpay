import { SwapDefault } from "@coinbase/onchainkit/swap";
import { Token } from "@coinbase/onchainkit/token";

import gcashLogo from "../icons/gcash.png";
import mayaLogo from "../icons/maya.png";

// @note We need to deploy ERC20 tokens that pegs GCASH and Paymaya
const eth: Token = {
  name: "ETH",
  address: "",
  symbol: "ETH",
  decimals: 18,
  image:
    "https://wallet-api-production.s3.amazonaws.com/uploads/tokens/eth_288.png",
  chainId: 8453,
};

const gcash: Token = {
  name: "GCash",
  address: "",
  symbol: "GCASH",
  decimals: 18,
  image: gcashLogo,
  chainId: 8453,
};

const maya: Token = {
  name: "PayMaya",
  address: "",
  symbol: "MAYA",
  decimals: 18,
  image: mayaLogo,
  chainId: 8453,
};

const usdc: Token = {
  name: "USDC",
  address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  symbol: "USDC",
  decimals: 6,
  image:
    "https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2",
  chainId: 8453,
};

export const BPxSwap = () => {
  return <SwapDefault from={[gcash, maya, eth]} to={[usdc]} />;
};
