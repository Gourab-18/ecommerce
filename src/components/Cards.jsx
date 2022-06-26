import React from "react";

const Cards = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md brown:bg-gray-800 brown:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1656142744/pexels-pixabay-276583_wejcw4.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
            Most customer centric
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          We offer best price
        </p>
      </div>
    </div>
  );
};

export default Cards;
