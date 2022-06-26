import React from "react";

const Category = ({ data, changeData }) => {
  const categories = [
    "All",
    "Office",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
  ];
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-extrabold text-xl ">Category</h1>
      </div>
      <div>
        {categories.map((category, index) => {
          return (
            <div key={index}>
              {/* {console.log(category)} */}
              <h1
                className="text-small mt-2 "
                style={{ cursor: "pointer" }}
                onClick={() => changeData(category)}
              >
                {category}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
