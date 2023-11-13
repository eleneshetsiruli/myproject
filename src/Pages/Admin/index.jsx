import React from "react";
import useAuth from "../../hooks/Use.Auth";
import { Navigate } from "react-router-dom";

export const Admin = () => {
  const { auth } = useAuth();

  if (auth.tokenParsed.role !== "admin") {
    return <Navigate to={"/login"} />;
  }
  return <div>admin</div>;
};
