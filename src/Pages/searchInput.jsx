import React, { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";

export const SearchInput = () => {
  const [findVelue, setFindValue] = useState("");
  const { data, setData } = useContext(ProductContext);

  function handleSearch() {
    const filtered = data.filter((el) =>
      el.model.toLowerCase().includes(findVelue.toLowerCase())
    );

    setData(filtered);

    setFindValue("");
  }

  return (
    <div className="flex bg-white">
      <input
        onChange={(ev) => setFindValue(ev.target.value)}
        className="w-[400px]"
        type="text"
        value={findVelue}
      />
      <button
        onClick={handleSearch}
        className="text-black bg-orange-400 rounded-tl-[20px] rounded-bl-[20px]"
      >
        search
      </button>
    </div>
  );
};
