import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Loginwork, Welcome } from "./Login.style";

function LoginWork() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <Loginwork>
      {user.email !== "" ? (
        <Welcome>
          <div className="welcome">
            <h2>
              Welcome,<span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        </Welcome>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </Loginwork>
  );
}
export default LoginWork;
