import React from "react";
import { Link } from "react-router-dom";
const LeftView = () => {
  return (
    <>
      <div className="flex flex-col ml-8 mt-36 ">
        <div>
          <h1 className="font-black text-3xl">Design Your Comfort Zone</h1>
        </div>

        <div className="w-1/2 mt-12 ">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iure quasi odit tenetur unde officiis repudiandae quod deserunt quia
            eum?
          </p>
        </div>

        <div>
          <Link to="/products">
            <button
              type="button"
              class="mt-12 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftView;
