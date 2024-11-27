import React from 'react';
import GooglePlaySVG from '../components/icons/icons/Googleplay';
import AppleStoreSVG from '../components/icons/icons/Applestore';
import AppStoreSVG from '../assets/icons/appstore.svg';
import GooglePlaySVGMB from '../assets/icons/googleplay.svg';
import AppleStoreSVGMB from '../assets/icons/applestore.svg';

export const Footer: React.FC = () => {
  return (
    <>
    <footer className="hidden md:block mt-[5rem] mb-10">
        <h2 className="text-3xl font-bold text-secondaryText text-left ml-12">
          Download our app now
        </h2>
        <div className=" relative mt-[10rem]  bg-white pt-[70px] pr-[40px] pb-[27px] pl-[0px] flex flex-col items-end rounded-[1rem] shadow-md">
          
          {/* <div className="flex justify-center mb-8 md:mb-0 absolute  bottom-4 pl-8"> */}
            <img
              src={AppStoreSVG}
              alt="BHIVE Workspace app screen 1"
              className="w-1/2 md:w-auto absolute top-[-7.5rem] left-[40px]"
            />
          {/* </div> */}
          <div className="text-center md:text-left md:items-start w-[400px]">
            <p className="text-footerText font-semibold text-h4 mb-4 md:hidden lg:block block">
            Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="inline-block store-icon">
                <GooglePlaySVG />
              </a>
              <a href="#" className="inline-block">
                <AppleStoreSVG />
              </a>
            </div>
          </div>
      </div>
      
    </footer>
    <footer className='md:hidden' >
    <div className="bg-secondaryGrey text-center mt-[50px]">
      <h2 className="text-2xl font-bold text-gray-800 text-left mb-4">
        Download our app now
      </h2>
      <div className="flex flex-col justify-center mb-4 p-4 bg-white shadow-md rounded-lg">
        <img src={AppStoreSVG}alt="App Store" className="mx-2" />
        <div className="flex space-x-4 mx-2 justify-between mt-4">
          <a href="#" className="inline-block">
            <img src={GooglePlaySVGMB} alt="Google play image" className="h-12 max-w-32" />
          </a>
          <a href="#" className="inline-block">
            <img src={AppleStoreSVGMB} alt="Apple store image" className="h-12 max-w-32" />
          </a>
        </div>
      </div>
    </div>
    {/* <p className="text-secondaryText text-center text-body bg-[#222E34] text-[#DDDDDD]"> &copy; Copyright 2024. Bhive Private Limited</p> */}
  </footer>

  
  </>
  );
};


export default Footer;
