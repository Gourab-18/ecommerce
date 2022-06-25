import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-around my-12">
        <div className="ml-8 ">
          <img
            className="h-96 w-96"
            src="https://res.cloudinary.com/dcbco6i8s/image/upload/v1656142744/pexels-pixabay-276583_wejcw4.jpg"
          />
        </div>
        <div>
          <div>
            <h1 className="font-black text-3xl">Our Story</h1>
          </div>
          <div>
            <p className="text-small  w-96 mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda veritatis, aliquid blanditiis dolores laboriosam ratione
              facere libero inventore error magnam at, fugiat magni mollitia
              doloremque quae asperiores, quis incidunt? assumenda veritatis,
              aliquid blanditiis dolores laboriosam ratione facere libero
              inventore error magnam at, fugiat magni mollitia doloremque quae
              asperiores, quis incidunt?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
