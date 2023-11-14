import { createContext, useState } from "react";
import { iAppContext, iAppContextProps } from "./type";

export const AppContext = createContext({} as iAppContext);

export const AppProviders = ({ children }: iAppContextProps) => {
  // Test - Apagar depois
  const [testState, setTestState] = useState<boolean>(true);

  const handleChangeFunction = (state: string, value: boolean) => {
    switch (state) {
      case "testState":
        setTestState(value);
        break;
    }
  };

  return (
    <AppContext.Provider value={{ testState, handleChangeFunction }}>
      {children}
    </AppContext.Provider>
  );
};
