import { useEffect, useState } from "react";
import { ProductsLayout } from "../../../components/ProductsLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UseCart } from "../../../hooks/UseCart";
import { Link } from "react-router-dom";
import { BestOffers } from "./bestOffers";
import { MostDemandProducts } from "./mostDemandProducts";
import { Footer } from "../../../Footer";

export const Home = () => {
  const { addToCart } = UseCart();
  const [latestData, setLatestData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  function loadData() {
    fetch(
      "https://digitalinstitute-amazon.azurewebsites.net/api/product/latestproducts"
    )
      .then((res) => res.json())
      .then((data) => setLatestData(data));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ProductsLayout>
      <div className="w-3/4 m-auto ">
        <div className="mt-5 ">
          <h1 className=" text-xl p-[40px] text-white text-center ">
            Latest products ⬇
          </h1>
          <Slider {...settings}>
            {latestData.map((el) => (
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
      <BestOffers />
      <MostDemandProducts />
      <Footer />
    </ProductsLayout>
  );
};
