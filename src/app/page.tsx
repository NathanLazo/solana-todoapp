"use client";
import TodoList from "~/components/TodoList";
import WalletProviderComponent from "~/web3/WalletProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletMultiButton as SolanaWalletConnectButton } from "@solana/wallet-adapter-react-ui";
import TodoContainer from "~/components/TodoContainer";

export default function Home() {
  return (
    <WalletProviderComponent>
      <>
        <nav className='px-8 bg-zinc-900 h-16'>
          <div className='flex justify-between items-center h-full'>
            <h1 className='text-white text-2xl'>Solana Todo App</h1>
            <SolanaWalletConnectButton
              className='bg-zinc-900'
              style={{
                color: "white",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </nav>
        <TodoContainer />
      </>
    </WalletProviderComponent>
  );
}
