import React from "react";

const Range = () => {
  return (
    <>
      <div className="mt-10">
        <h5 className="font-black text-xl">Price</h5>
        <p className="price">1000</p>
        <input
          type="range"
          name="price"
          min={200}
          max={1000}
          //   onChange={updateFilters}
          //   value={price}
        />
      </div>
    </>
  );
};

export default Range;
