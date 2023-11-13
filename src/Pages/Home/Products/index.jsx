import React, { useContext, useEffect, useState } from "react";
import classes from "./index.module.css";
import { ProductCard } from "./ProductCard";
import ProductContext from "../../../contexts/ProductContext";

export const Products = () => {
  const { data, setData } = useContext(ProductContext);
  const [params, setParams] = useState({
    pageNumber: 1,
    pageSize: 12,
  });

  useEffect(() => {
    loadData();
  }, [params]);

  function loadData() {
    const queryParams = new URLSearchParams(params);
    fetch(
      "https://digitalinstitute-amazon.azurewebsites.net/api/product/products?" +
        queryParams
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {data.map((prod) => (
          <ProductCard data={prod} key={prod.id} showAddButton />
        ))}
      </div>
      <div className={classes.pagination}>
        {[1, 2, 3, 4, 5].map((page) => (
          <div
            className={params.pageNumber === page ? classes.active : ""}
            key={page.index}
            onClick={() => setParams({ ...params, pageNumber: page })}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};
