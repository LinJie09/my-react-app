import React, { useState } from "react";
import {
  Forminner,
  Formgroup,
  Formword,
  Forminput,
  ForminnerWord,
  LoginBtn,
} from "./Login.style";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const sumbitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={sumbitHandler}>
      <Forminner>
        <ForminnerWord>Login</ForminnerWord>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <Formgroup>
          <Formword htmlFor="name">Name:</Formword>
          <Forminput
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </Formgroup>
        <Formgroup>
          <Formword htmlFor="email">Email:</Formword>
          <Forminput
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </Formgroup>
        <Formgroup>
          <Formword htmlFor="password">password:</Formword>
          <Forminput
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </Formgroup>
        <LoginBtn type="submit" value="LOGIN" />
      </Forminner>
    </form>
  );
}

export default LoginForm;
