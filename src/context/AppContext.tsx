import React, { createContext, useState, ReactNode } from "react";

export type ContextProps = {
	isAuthenticated: boolean,
	setisAuthenticated: (_value: boolean) => void,
	userName: string,
	setUserName: (_value: string) => void
};

export const AppContext = createContext<ContextProps>({
	isAuthenticated: false,
	setisAuthenticated: (_value: boolean) => { },
	userName: "",
	setUserName: (_value: string) => { }
});

const AppContextProvider = ({ children }: { children: ReactNode}) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setisAuthenticated,
        userName,
        setUserName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
