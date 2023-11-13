import React, { useEffect } from "react";
import { UseCart } from "../hooks/UseCart";
import { Link, useNavigate } from "react-router-dom";

export const CartButton = () => {
  const { cart } = UseCart();

  return (
    <Link to={"/cart"}>
      <button className="cartIcon">
        🛒
        <span style={{ color: "orange" }}>{cart.length}</span>
      </button>
    </Link>
  );
};
