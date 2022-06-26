import React from "react";
import { useState, useEffect } from "react";
import Display from "./Display";
import Sidebar from "./Sidebar";
const Products = () => {
  const url = "https://course-api.com/react-store-products";
  const [data, setData] = useState([]);

  const [category, setCategory] = useState("all");

  const fetchData = async (url) => {
    var headers = {};
    try {
      const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: headers,
      });

      let val = await res.json();
      //   val = val.slice(0, 3);
      //   console.log("Val data", val);

      setData(val);
    } catch (e) {
      console.log(e);
    }
  };

  //   console.log("Normal data", data);

  const changeData = (temp) => {
    temp = temp.toLowerCase();
    console.log(temp);
    setCategory(temp);
  };

  console.log(category);

  useEffect(() => {
    fetchData(url);

    if (category !== "all") {
      var newData = data.filter((tempData) => tempData.category === category);
      setData(newData);
      console.log(newData.length);
    }
  }, [category]);

  return (
    <>
      <div className="flex mt-12">
        <div>
          <Sidebar data={data} changeData={changeData} />
        </div>

        <div>
          <div className=" ">
            <div className="text-center font-extrabold text-3xl ">Products</div>
          </div>
          <div className="flex justify-around">
            <div>
              <h1 className="ml-36">
                {data && category === "all" ? (
                  <>{data.length} products found</>
                ) : (
                  <>
                    {
                      data.filter((tempData) => tempData.category === category)
                        .length
                    }{" "}
                    products found
                  </>
                )}
              </h1>
            </div>
            <div>
              <label htmlFor="price">Sort By</label>

              <select id="price">
                <option value="saab">Price (Highest)</option>

                <option value="volvo">Price (Lowest)</option>
                <option value="opel">Name (A-Z)</option>
                <option value="audi">Name (Z-A)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4  ml-36 mt-10">
            {data && category === "all" ? (
              <>
                {data.map((val) => {
                  return (
                    <div key={val.id} className="flex">
                      <Display val={val} />
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {data
                  .filter((tempData) => tempData.category === category)
                  .map((val) => {
                    return (
                      <div key={val.id} className="flex">
                        <Display val={val} />
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
