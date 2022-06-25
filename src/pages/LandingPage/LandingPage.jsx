import React from "react";
import Navbar from "../../components/Navbar";
import Featured from "./Featured";
import LeftView from "./LeftView";
const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-around">
        <div>
          <LeftView />
        </div>

        <div className="mr-8">
          <img
            className="object-cover h-96 w-96"
            src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1656142744/pexels-pixabay-276583_wejcw4.jpg"
          />
        </div>
      </div>

      <Featured />
    </>
  );
};

export default LandingPage;
