import React, { useContext, useState } from "react";

import useAuth from "../../../hooks/Use.Auth";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <div className="container">
      <div className="login-box">
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
          type="email"
          placeholder="your email"
        />
        <input
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          placeholder="your password"
          value={data.password}
        />
        <button
          className="btn-login"
          onClick={() => {
            login(data.email, data.password);
          }}
        >
          log in
        </button>
        <Link
          style={{ textDecoration: "none ", color: "darkblue" }}
          to={"/signup"}
        >
          registration
        </Link>
      </div>
    </div>
  );
};
