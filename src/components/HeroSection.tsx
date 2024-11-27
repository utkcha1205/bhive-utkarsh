import React from "react";
import bgImage from "../assets/images/banner-image.png"; // Replace with your background pattern/image
import Hexagon from "../assets/images/hexagon.png"; // Background Vector Image

const HeroSection: React.FC = () => {
  return (
    <div >
         <div className="md:grid lg:grid xl:grid hidden  grid-cols-3 gap-8 justify-between">
      {/* Left Section: Text with Background */}
      <div
        className="col-span-2 relative bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-center lg:text-left z-10">
          <h1 className="text-h1 font-bold primaryText leading-snug ">
            Host your meeting with <br /> world-class amenities. <br /> Starting at  <span className="text-yellow-500 ml-2 mt-[1px]">₹199/-!</span>
          </h1>
          {/* <p className="text-sm md:text-lg font-medium mt-4 text-gray-600">
            Starting at <span className="text-yellow-500 font-bold"></span>
          </p> */}
        </div>
      </div>

      {/* Right Section: Background Vector in Hexagonal Shape and Illustration */}
      <div
        className="col-span-1  relative  bg-no-repeat flex items-center justify-center"
        // style={{ backgroundImage: `url(${bgVector})` }}
      >
        {/* Illustration on top of the vector */}
      
            <img
                src={Hexagon}
                alt="Illustration"
                className=" object-contain "
            />
        <div className="video-container block absolute top-10 left-[-50px] object-contain w-[388px]">
            <video
              style={{ mixBlendMode: "multiply" }}
              src='vedios/coworkingVedio.mp4'
              autoPlay
              muted
              loop
            ></video>
        </div>
        {/* <div className="block md:hidden">
        <img
            src={illustration}
            alt="Illustration"
            className="absolute top-10 left-[-37px] object-contain w-[388px]"
            />
        </div> */}
        
        </div>
    </div>

    {/* Mobile */}


      <div
        className="block md:hidden lg:hidden xl:hidden  relative  bg-no-repeat"
        // style={{ backgroundImage: `url(${bgVector})` }}
      >
        {/* Illustration on top of the vector */}
      <div className="ml-[3.7rem]">
        <img
            src={Hexagon}
            alt="Illustration"
            className=" object-contain"
        />
        <div className="video-container absolute top-10 left-0 object-contain w-[388px]">
            <video
              style={{ mixBlendMode: "multiply" }}
              src='vedios/coworkingVedio.mp4'
              autoPlay
              muted
              loop
            ></video>
        </div>

      </div>
        
        <div className="text-center mt-4">
          <h1 className="text-h3 font-bold text-gray-800 leading-snug">
            Host your meeting with world-class amenities. Starting at <span className="text-yellow-500 font-bold">₹199/-!</span>
          </h1>
         
        </div>
        {/* <div className="block md:hidden">
        <img
            src={illustration}
            alt="Illustration"
            className="absolute top-10 left-[-37px] object-contain w-[388px]"
            />
        </div> */}
        
        </div>
    </div>

  );
};

export default HeroSection;
