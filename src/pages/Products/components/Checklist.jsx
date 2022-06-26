import React from "react";

const Checklist = () => {
  return (
    <>
      <label htmlFor="vehicle1"> Free Shipping</label>

      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

      <div>
        <button
          type="button"
          className="mt-12 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default Checklist;
