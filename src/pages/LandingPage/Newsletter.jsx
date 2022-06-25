import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="flex justify-around">
        {" "}
        <div className="flex flex-col justify-around ml-2">
          <div>
            <h1 className="font-black text-3xl">
              Join our newsletter and get 20% off
            </h1>
          </div>
          <div>
            <h1 className="text-small  w-96 mt-10 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              recusandae, voluptas, iusto debitis cumque quos, eaque fugit
              magnam
            </h1>
          </div>
        </div>
        <div>
          <form>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium ">
                Your email
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
