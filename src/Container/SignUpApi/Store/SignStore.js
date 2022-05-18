import axios from "axios";
import { useLocalObservable } from "mobx-react-lite";

const initialState = {
  phone: "091212133",
  password: "",
  email: "",
  number: "10",
};

const SignStore = () => {
  const store = useLocalObservable(() => ({
    ...initialState,
    PlusOne: () => {
      this.number = this.number + 1;
    },
    substractOne: () => {
      this.number = this.number - 1;
    },
    async res() {
      const data = await axios({
        phone: this.phone,
        password: this.password,
        email: this.email,
      });
      console.log(data);
    },
  }));
  return store;
};

export default SignStore;
