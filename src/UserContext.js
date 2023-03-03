import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const user = {
    name: "Martin",
    job: "teacher",
  };
  return (
    <UserContext.Provider value={user}>
      {/*  pass this value to every child of Provider */}
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
