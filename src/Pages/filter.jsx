import React from "react";

const optionsFrom = [];
for (let i = 0; i <= 2000; i += 100) {
  optionsFrom.push(i);
}
const optionsTo = [];
for (let i = 0; i <= 2000; i += 100) {
  optionsTo.push(i);
}

export const Filter = () => {
  return (
    <div className="filterOption">
      <select>
        {optionsFrom.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
      <select>
        {optionsTo.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
      <button>find</button>
    </div>
  );
};
