import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { UseCart } from "../../../hooks/UseCart";

export const BestOffers = () => {
  const [offers, setOffers] = useState([]);
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
      "https://digitalinstitute-amazon.azurewebsites.net/api/product/offers"
    )
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="w-3/4 m-auto ">
      <div className="mt-20 ">
        <h1 className=" text-xl text-white p-[20px] text-center">
          Best offers ⬇
        </h1>
        <Slider {...settings}>
          {offers.map((el) => (
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
                    src={el.image}
                    alt=""
                    className="w-44 h-44 rounded-full"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4 ">
                <p className="text-m font-semibold ">{el.brand}</p>
                <p className="line-through text-red-500">{el.oldPrice}$</p>
                <p>{el.newPrice}$</p>
                <button
                  onClick={() => addToCart(el.id)}
                  className=" bg-green-700 bg-indigo-500 text-white text-lg px-6 py-rounded-xl "
                >
                  buy now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
