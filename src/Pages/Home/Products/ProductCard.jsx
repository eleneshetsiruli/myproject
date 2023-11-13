import React from "react";
import classes from "./index.module.css";
import { Link, useParams } from "react-router-dom";
import { UseCart } from "../../../hooks/UseCart";

export const ProductCard = ({ data, showAddButton }) => {
  const { addToCart, cart } = UseCart();

  const isAlredyInCart = cart.some((item) => item.id === data.id);

  const addBtn = (
    <button
      disabled={isAlredyInCart}
      className={!isAlredyInCart ? classes.addbtn : ""}
      onClick={(e) => {
        e.preventDefault();
        addToCart(data.id);
      }}
    >
      add to cart
    </button>
  );

  return (
    <Link className={classes.cardLink} to={`/products/${data.id}`}>
      <div className={classes.productCard}>
        <img className={classes.cardImg} src={data.images} alt="" />
        <p>{data.model}</p>

        <div className={classes.addprice}>
          <span>{data.price}$</span>
          {showAddButton && addBtn}
        </div>
      </div>
    </Link>
  );
};
