import React, { createContext, useContext, useState } from "react";

const SenderContext = createContext();

export function SenderProvider({ children }) {
  const [sender, setSender] = useState("me");

  return (
    <SenderContext.Provider value={{ sender, setSender }}>
      {children}
    </SenderContext.Provider>
  );
}

export function useSender() {
  return useContext(SenderContext);
}
