import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../Home/Products/index.module.css";
import { UseCart } from "../../hooks/UseCart";
export const Product = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const { addToCart } = UseCart();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const res = await axios({
      method: "get",
      url: `https://digitalinstitute-amazon.azurewebsites.net/api/product/products/${params.id}`,
    });
    setData(res.data);
  }
  function handleAddToCart() {
    addToCart(params.id);
  }

  return (
    <div className={classes.cont}>
      <div className={classes.images}>
        {data.images?.map((img) => (
          <img className={classes.scale} key={img.name} src={img} />
        ))}
      </div>
      <div className={classes.side}>
        <p className="text-gray">{data.name}</p>
        <h2 className="text-orange-700">{data.brand}</h2>
        <div>
          <span style={{ color: "green" }}>{data.price}$</span>
        </div>
        <button onClick={handleAddToCart} className={classes.orangeColor}>
          add to cart
        </button>
      </div>
    </div>
  );
};
