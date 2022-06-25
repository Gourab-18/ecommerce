import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex  mt-2 mb-6">
        <Link to="/">
          <div className=" mx-3">Ecommerce</div>
        </Link>

        <div className="flex m-auto">
          <Link to="/">
            <h1 className=" mx-3">Home </h1>
          </Link>
          <Link to="/about">
            <h1 className=" mx-3">About</h1>
          </Link>
          <Link to="/products">
            <h1 className=" mx-3">Products </h1>
          </Link>
        </div>

        <div className=" mx-3">Cart</div>
      </div>
    </>
  );
};

export default Navbar;
