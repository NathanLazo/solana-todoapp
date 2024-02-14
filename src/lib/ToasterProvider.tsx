"use client";
import type { FC } from "react";
import { Toaster } from "sonner";

interface ToasterProviderProps {
  children: React.ReactNode;
}

const ToasterProvider: FC<ToasterProviderProps> = ({ children }) => {
  return (
    <>
      <Toaster richColors />
      {children}
    </>
  );
};
export default ToasterProvider;
