import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex  mt-2 mb-6">
        <div className=" mx-3">Ecommerce</div>

        <div className="flex m-auto">
          <h1 className=" mx-3">Home </h1>
          <h1 className=" mx-3">About</h1>
          <h1 className=" mx-3">Products </h1>
        </div>

        <div className=" mx-3">Cart</div>
      </div>
    </>
  );
};

export default Navbar;
