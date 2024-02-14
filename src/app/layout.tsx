import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";
import ToasterProvider from "~/lib/ToasterProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Solana Todo App",
  description: "By Nathan Lazo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <ToasterProvider>
        <body
          className={cn(" bg-zinc-950 text-zinc-100", spaceGrotesk.className)}
        >
          {children}
        </body>
      </ToasterProvider>
    </html>
  );
}
