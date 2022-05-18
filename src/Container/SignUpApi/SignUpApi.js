import { SignBtn, SignUpMainDiv } from "./signUp.style.js";
import { observer } from "mobx-react-lite";
import { useStore, ThemeContext } from "../../store";
import React, { useContext } from "react";
import axios from "axios";
function SignUpApi() {
  const {
    SignUpStore: { email, phone, password, updateData },
  } = useStore();

  const postData = { phone, password, email };
  const mainTheme = useContext(ThemeContext);
  const Theme = {
    background: mainTheme ? "#fff" : "#000",
  };
  /*
  const onSubmit = (e) => {
    e.preventDefault();
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
*/
  return (
    <SignUpMainDiv style={Theme}>
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
          <button
            onClick={async () => {
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
            }}
          >
            Sign Up
          </button>
          <button
            onClick={async () => {
              try {
                const signUpResult = await axios({
                  method: "POST",
                  url: "https://evening-cliffs-38545.herokuapp.com/api/user/login",
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
            }}
          >
            Sign in
          </button>
        </SignBtn>
      </div>
    </SignUpMainDiv>
  );
}

export default observer(SignUpApi);
