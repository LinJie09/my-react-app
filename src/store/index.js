import { createContext, useContext } from "react";
import SignUpContext from "./SignStore";

export const RootStoreContext = createContext();
const RootStore = ({ children }) => {
  const SignUpStore = SignUpContext();
  return (
    <RootStoreContext.Provider value={{ SignUpStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useStore = () => useContext(RootStoreContext);
export default RootStore;
