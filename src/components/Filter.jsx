import { useState } from "react";

function Filter({ data, setOption }) {
  const uniqueArray = [...new Set(data.map((item) => item.category))];

  return (
    <>
      <select onChange={(e) => setOption(e.target.value)} name="" id="">
        {uniqueArray.map((item, key) => (
          <option key={key} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Filter;
