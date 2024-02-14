"use client";
// imports methods relevant to the react framework
import * as React from "react";
// library we use to interact with the solana json rpc api
import * as web3 from "@solana/web3.js";
// allows us access to methods and components which give us access to the solana json rpc api and user's wallet data
import * as walletAdapterReact from "@solana/wallet-adapter-react";
// allows us to choose from the available wallets supported by the wallet adapter
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
// imports a component which can be rendered in the browser
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// applies the styling to the components which are rendered on the browser
require("@solana/wallet-adapter-react-ui/styles.css");

export default function WalletProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  // we specify which network we want to connect to
  const endpoint = web3.clusterApiUrl("devnet");
  // we specify which wallets we want our wallet adapter to support
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

  return (
    <walletAdapterReact.ConnectionProvider endpoint={endpoint}>
      {/* makes the wallet adapter available to the entirety of our application (wrapped in this component) */}
      <walletAdapterReact.WalletProvider wallets={wallets}>
        {/* provides components to the wrapped application */}
        <WalletModalProvider>{children}</WalletModalProvider>
      </walletAdapterReact.WalletProvider>
    </walletAdapterReact.ConnectionProvider>
  );
}
