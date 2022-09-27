import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

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
        <input
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic URL (optional)"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />
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
