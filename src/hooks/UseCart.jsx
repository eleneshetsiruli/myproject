import { useContext, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import axios from "axios";
import useAuth from "./Use.Auth";

export const UseCart = () => {
  const { setCart, cart } = useContext(CartContext);
  const { auth, logout } = useAuth();

  async function addToCart(productId) {
    if (!checkAuth()) return;
    alert("these item add to your cart");
    try {
      let res = await axios({
        method: "post",
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/cart/addincart",
        data: {
          productId,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      loadCart();

      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async function loadCart() {
    try {
      const res = await axios({
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/cart/getmycartproducts",
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setCart(res.data);
    } catch (e) {
      console.error("error loading", e);
      return false;
    }
  }
  async function deleteCart(id) {
    try {
      const res = await axios({
        method: "delete",
        url: "https://digitalinstitute-amazon.azurewebsites.net/api/cart/removefromcart",
        data: {
          productId: id,
        },
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      loadCart();
    } catch (e) {
      console.error("error loading", e);
      return false;
    }
  }

  function checkAuth() {
    const isTokenExpoired = auth.tokenParsed.exp < new Date().getTime() / 1000;
    if (isTokenExpoired) {
      logout();
    }
    return !isTokenExpoired;
  }

  return { addToCart, cart, deleteCart, loadCart };
};
