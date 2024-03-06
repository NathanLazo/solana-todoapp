"use client";
import WalletProviderComponent from "~/web3/WalletProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
// import { WalletMultiButton as SolanaWalletConnectButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";
const SolanaWalletConnectButton = dynamic(() =>
  import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton)
);
import { Suspense } from "react";

// import TodoContainer from "~/components/TodoContainer";
// const TodoContainer = dynamic(() => import("~/components/TodoContainer"));

export default function Home() {
  return (
    <WalletProviderComponent>
      <>
        <nav className='px-8 bg-zinc-900 h-16'>
          <div className='flex justify-between items-center h-full'>
            <h1 className='text-white text-2xl'>Solana Todo App</h1>
            <Suspense
              fallback={
                <div className='bg-zinc-900'>
                  <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white'></div>
                </div>
              }
            >
              <SolanaWalletConnectButton
                className='bg-zinc-900'
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                }}
              />
            </Suspense>
          </div>
        </nav>
      </>
    </WalletProviderComponent>
  );
}
