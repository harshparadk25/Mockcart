import { createContext, useState } from "react";

export const ReceiptContext = createContext();

export function ReceiptProvider({ children }) {
  const [receipt, setReceipt] = useState(null);

  return (
    <ReceiptContext.Provider value={{ receipt, setReceipt }}>
      {children}
    </ReceiptContext.Provider>
  );
}
