import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/Use.Auth";
import { CartButton } from "./CartButton";
import { UseCart } from "../hooks/UseCart";
import { SearchInput } from "../Pages/searchInput";

export const Header = () => {
  const {
    auth: { isAuthed, tokenParsed },
    logout,
  } = useAuth();
  const { loadCart } = UseCart();
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <nav className="nav">
        <div className="links">
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/products"}>products</NavLink>
        </div>
        <SearchInput />

        <div className="header-end">
          <Link to={"/profile"}>
            <p style={{ color: "white" }}>🫥 {tokenParsed?.email}</p>
          </Link>
          <CartButton />
          {isAuthed && (
            <button
              className="logOut"
              onClick={() => {
                logout();
              }}
            >
              log out
            </button>
          )}
        </div>
      </nav>
    </>
  );
};
