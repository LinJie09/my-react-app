/* import { createContext, useContext, useState } from "react";
import SignUpContext from "../SignUpApi/Store/SignStore";
import { ButtonStyle } from "./index.style";

export const ThemeContext = createContext();
export const DarkCotext = createContext();

const ContextWork = ({ children }) => {
  const SignUpStore = SignUpContext();
  const [dark, setDark] = useState(true);
  const changeTheme = () => {
    setDark((prevDark) => !prevDark);
  };
  return (
    <div>
      <ThemeContext.Provider value={dark}>
        <ButtonStyle onClick={changeTheme}>Change</ButtonStyle>
        <DarkCotext.Provider value={SignUpStore}>
          {children}
        </DarkCotext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export const useStore = () => useContext(ThemeContext);
export default ContextWork;
*/

import { createContext, useContext, useState } from "react";
import SignUpContext from "../Container/SignUpApi/Store/SignStore";
import { ButtonStyle } from "./index.style";
export const RootStoreContext = createContext();
export const ThemeContext = createContext();

const RootStore = ({ children }) => {
  const SignUpStore = SignUpContext();
  const [dark, setDark] = useState(true);
  const changeTheme = () => {
    setDark((prev) => !prev);
    console.log(dark);
  };
  return (
    <ThemeContext.Provider value={dark}>
      <ButtonStyle onClick={changeTheme}>Change</ButtonStyle>
      <RootStoreContext.Provider value={{ SignUpStore }}>
        {children}
      </RootStoreContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useStore = () => useContext(RootStoreContext);
export default RootStore;
