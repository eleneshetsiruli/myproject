import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { UseCart } from "../../../hooks/UseCart";

export const MostDemandProducts = () => {
  const [mostProducts, setMostProducts] = useState([]);
  const { addToCart } = UseCart();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  function loadData() {
    fetch(
      "https://digitalinstitute-amazon.azurewebsites.net/api/product/mostdemandproducts"
    )
      .then((res) => res.json())
      .then((data) => setMostProducts(data));
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="w-3/4 m-auto pb-[200px] ">
        <div className="mt-5 ">
          <h1 className="font-bold text-xl p-[40px] text-white text-center ">
            Most demand products ⬇
          </h1>
          <Slider {...settings}>
            {mostProducts.map((el) => (
              <div
                className="flex flex-col bg-white h-[500px]  text-black rounded-xl  "
                key={el.id}
              >
                <div
                  className=" h-56 rounded-t-xl bg-white-500 flex justify-center items-center "
                  key={el.id}
                >
                  <Link to={`/products/${el.id}`}>
                    <img
                      src={el.images[1]}
                      alt=""
                      className="w-44 h-44 rounded-full"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                  <p className="text-m font-semibold ">{el.brand}</p>
                  <p>{el.price}$</p>
                  <button
                    onClick={() => addToCart(el.id)}
                    className=" bg-green-800 text-white text-lg px-6 py-rounded-xl "
                  >
                    buy now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
