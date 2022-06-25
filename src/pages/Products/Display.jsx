import React from "react";

const Display = ({ val }) => {
  //   console.log(val);
  //   console.log(val.company);
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <img src={val.image} className="w-64 h-48" />
        </div>
        <div className="flex justify-between ">
          <div>{val.name}</div>

          <div>{val.price}</div>
        </div>
      </div>
    </>
  );
};

export default Display;
