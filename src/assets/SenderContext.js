import React, { createContext, useContext, useState } from "react";

const SenderContext = createContext();

export function SenderProvider({ children }) {
  const [sender, setSender] = useState("me"); // 기본값은 "me"

  return (
    <SenderContext.Provider value={{ sender, setSender }}>
      {children}
    </SenderContext.Provider>
  );
}

export function useSender() {
  return useContext(SenderContext);
}
