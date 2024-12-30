import { useAccount, useConnect, useDisconnect } from "wagmi";

import "@coinbase/onchainkit/styles.css";
import { BPxHomepage } from "./BPxHomepage";
import { BPxSwap } from "./components/BPxSwap";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const DefaultView = () => {
    return (
      <div>
        <div>
          <h2>Account</h2>

          <div>
            status: {account.status}
            <br />
            addresses: {JSON.stringify(account.addresses)}
            <br />
            chainId: {account.chainId}
          </div>

          {account.status === "connected" && (
            <button type="button" onClick={() => disconnect()}>
              Disconnect
            </button>
          )}
        </div>

        <div>
          <h2>Connect</h2>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              type="button"
            >
              {connector.name}
            </button>
          ))}
          <div>{status}</div>
          <div>{error?.message}</div>
        </div>
      </div>
    );
  };
  return (
    <>
      <BPxHomepage />
    </>
  );
}

export default App;
