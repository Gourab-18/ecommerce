import React from "react";
import { useState, useEffect } from "react";
import Display from "./Display";
import Sidebar from "./Sidebar";
const Products = () => {
  const url = "https://course-api.com/react-store-products";
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);

      let val = await res.json();
      //   val = val.slice(0, 3);
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
      <div className="flex mt-12">
        <div>
          <Sidebar />
        </div>

        <div>
          <div className=" ">
            <div className="text-center font-extrabold text-3xl ">Products</div>
          </div>
          <div className="flex justify-around">
            <div>
              <h1 className="ml-36">{data && data.length} products found</h1>
            </div>
            <div>
              <label for="price">Sort By</label>

              <select id="price">
                <option value="saab">Price (Highest)</option>

                <option value="volvo">Price (Lowest)</option>
                <option value="opel">Name (A-Z)</option>
                <option value="audi">Name (Z-A)</option>
              </select>
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
        </div>
      </div>
    </>
  );
};

export default Products;
