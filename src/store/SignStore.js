import { useLocalObservable } from "mobx-react-lite";

const initialState = {
  phone: "",
  password: "",
  email: "",
};

const SignStore = () => {
  const store = useLocalObservable(() => ({
    ...initialState,
  }));
  return store;
};

export default SignStore;
