import React from "react";
import { UseCart } from "../../hooks/UseCart";
import { ProductCard } from "../Home/Products/ProductCard";

export const Cart = () => {
  const { cart, deleteCart } = UseCart();

  return cart.length > 0 ? (
    <div className="cartlist">
      {cart.map((el) => (
        <div className="relative" key={el.id}>
          <ProductCard key={el.id} data={el} />
          <button onClick={() => deleteCart(el.id)} className="delbtn">
            x
          </button>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-center text-red-500 mt-[200px] text-[50px] ">
      🛒 cart is empty!
    </h1>
  );
};
