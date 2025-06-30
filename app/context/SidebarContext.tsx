"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <SidebarContext value={{ isOpen, setIsOpen }}>{children}</SidebarContext>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
