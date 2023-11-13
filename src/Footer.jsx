import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className=" flex justify-around text-white bg-gray-700 absolute bottom-0 w-[100%]">
      <div>
        <div className="flex flex-row gap-40">
          <div className="flex flex-col">
            <Link>about us</Link>
            <Link>Location</Link>
            <Link>careers</Link>
          </div>
          <div className="flex flex-col">
            <Link>help</Link>
            <Link>how to buy</Link>
            <Link>contact us</Link>
          </div>
        </div>
      </div>
      <div>
        <h1>FOLLOW US</h1>
        <div className="flex gap-5">
          <Link to="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/" target="_blank">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </Link>
        </div>
        🇬🇪 🇺🇸 🇮🇹 🇺🇦 🇫🇷
      </div>
    </div>
  );
};
