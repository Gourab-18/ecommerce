import React from "react";

const Colors = () => {
  return (
    <div className="flex flex-col mt-10">
      <div>
        <h1 className="font-extrabold text-xl ">Colors</h1>

        <div className="flex mt-2">
          <div>
            <h1 className=" ">All</h1>
          </div>
          <div className="mt-2">
            {" "}
            <h1
              style={{
                backgroundColor: "red",
                height: "10px",
                width: "10px",
              }}
              className="rounded-full  mx-1"
            ></h1>
          </div>
          <div className="mt-2">
            {" "}
            <h1
              style={{
                backgroundColor: "green",
                height: "10px",
                width: "10px",
              }}
              className="rounded-full  mx-1"
            ></h1>
          </div>

          <div className="mt-2">
            <h1
              style={{
                backgroundColor: "blue",
                height: "10px",
                width: "10px",
              }}
              className="rounded-full mx-1"
            ></h1>
          </div>
          <div className="mt-2">
            {" "}
            <h1
              style={{
                backgroundColor: "black",
                height: "10px",
                width: "10px",
              }}
              className="rounded-full  mx-1"
            ></h1>
          </div>
          <div className="mt-2">
            {" "}
            <h1
              style={{
                backgroundColor: "yellow",
                height: "10px",
                width: "10px",
              }}
              className="rounded-full mx-1"
            ></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
