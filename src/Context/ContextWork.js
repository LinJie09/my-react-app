import { createContext, useContext, useState } from "react";
import SignUpContext from "../store/SignStore";
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
