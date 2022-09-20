import React from "react";
import { useState, createContext } from "react";

export const PageHandlerContext = createContext<any>({} as any);
export const LoadingPercent = createContext<any>({} as any);

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [pageHandler, setPageHandler] = useState("0");
  const [loading, setLoading] = useState(0);
  console.log(pageHandler, "pageHandler");
  return (
    <PageHandlerContext.Provider value={{ pageHandler, setPageHandler }}>
      <LoadingPercent.Provider value={{ loading, setLoading }}>
        {children}
      </LoadingPercent.Provider>
    </PageHandlerContext.Provider>
  );
};

export default Providers;
