import { creatContext, useContext } from "react";
import SignContext from "./SignStore";

export const RootStoreContext = creatContext();
const RootStore = ({ children }) => {
  const SignStore = SignContext();
  return (
    <RootStoreContext.Provider value={{ SignStore }}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useStore = () => useContext(RootStoreContext);
export default RootStore;
