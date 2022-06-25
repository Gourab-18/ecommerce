import React from "react";
import Cards from "../../components/Cards";
import { useState, useEffect } from "react";
import Display from "./Display";
import Newsletter from "./Newsletter";
const Featured = () => {
  const url = "https://course-api.com/react-store-products";
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);

      let val = await res.json();
      val = val.slice(0, 3);
      //   console.log("Val data", val);

      setData(val);
    } catch (e) {
      console.log(e);
    }
  };

  //   console.log("Normal data", data);

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <div className="mt-12 ">
        <div className="text-center font-extrabold text-3xl ">
          Featured Products
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4  ml-36 mt-10">
        {data &&
          data.map((val) => {
            return (
              <div key={val.id} className="flex">
                <Display val={val} />
              </div>
            );
          })}
      </div>

      <div className="flex justify-center my-12">
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          All Products
        </button>
      </div>

      {/* custom */}

      <div className="flex justify-around">
        <div>
          <h1 className="font-black text-3xl">Custom Products for you</h1>
        </div>
        <div>
          <h1 className="text-small  w-96">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            recusandae, voluptas, iusto debitis cumque quos, eaque fugit magnam
          </h1>
        </div>
      </div>

      {/* Now we will use cards */}

      <div className="grid grid-cols-3 gap-4 ml-4 mt-10">
        <Cards />
        <Cards />
        <Cards />
      </div>

      <div className="mb-48 mt-24">
        <Newsletter />
      </div>
    </>
  );
};

export default Featured;
