import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");

  const Register = () => {};

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt=""
      />

      <form>
        <input placeholder="Full name" type="text" />
        <input type="text" placeholder="Profile Pic URL (optional)" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={Register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
};
