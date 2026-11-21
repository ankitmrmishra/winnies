"use client";

import { createContext, useCallback, useContext, useState, ReactNode } from "react";

interface CallbackPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const CallbackPopupContext = createContext<CallbackPopupContextType | undefined>(
  undefined
);

export function CallbackPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => setIsOpen(true), []);
  const closePopup = useCallback(() => setIsOpen(false), []);

  return (
    <CallbackPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </CallbackPopupContext.Provider>
  );
}

export function useCallbackPopup() {
  const context = useContext(CallbackPopupContext);
  if (context === undefined) {
    throw new Error("useCallbackPopup must be used within CallbackPopupProvider");
  }
  return context;
}
