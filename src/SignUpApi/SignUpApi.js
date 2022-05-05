import React from "react";
import { SignBtn } from "./signUp.style";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import axios from "axios";
function SignUpApi() {
  const {
    SingUpStore: { email, phone, password, updateData },
  } = useStore();
  const onSubmit = (e) => {
    e.preventDefault();
    const postData = { phone, password, email };
    console.log(postData);
    // 即刻函式
    (async () => {
      try {
        const signUpResult = await axios({
          method: "POST",
          url: "https://evening-cliffs-38545.herokuapp.com/api/user",
          data: postData,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });
        if (signUpResult.status === 200 && signUpResult.data.id) {
          alert("註冊成功");
        }
      } catch (e) {
        console.error(e);
        if (e.respone.data) {
          console.log("Server error:", e.respone.data);
        }
      }
    })();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Phone:</label>
          <input
            type="text"
            onChange={(e) => {
              updateData(e.target.value);
            }}
            value={phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={(e) => {
              updateData(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => updateData(e.target.value)}
            value={password}
          />
        </div>
        <SignBtn>
          <button type="submit">Sign Up</button>
        </SignBtn>
      </div>
    </form>
  );
}

export default observer(SignUpApi);
