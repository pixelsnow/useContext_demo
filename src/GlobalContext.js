import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider value={"Test ABC"}>
      {/*  pass this value to every child of Provider */}
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
