import React, { useState } from "react";
import useAuth from "../../../hooks/Use.Auth";

export const SignUp = () => {
  const { signup } = useAuth();
  const [data, setData] = useState({ userName: "", password: "", email: "" });

  return (
    <div className="container">
      <div className="login-box">
        <input
          onChange={(e) => setData({ ...data, userName: e.target.value })}
          value={data.userName}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          placeholder="your password"
          value={data.password}
        />
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          type="email"
          placeholder="your email"
        />

        <button
          className="btn-login"
          onClick={() => {
            signup(data);
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
