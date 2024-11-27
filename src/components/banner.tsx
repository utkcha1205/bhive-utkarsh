import React from 'react';
import webbanner from '../assets/images/landing.png';
import mobbanner from '../assets/images/mobilelanding.png';

export const Banner: React.FC = () => {
  return (
    <>

        <div className='relative hidden md:flex items-center h-96 bg-gray-100'>
            <img src={webbanner} alt="Host meeting illustration" className="absolute inset-0 size-full object-cover" />
            <div className="relative z-10 leading-[3rem] md:leading-[3rem] lg:leading-[4rem] flex items-center w-full xl:p-0 px-12 xl:mx-20 text-left">
                <div className="max-w-lg lg:max-w-2xl xl:max-w-3xl flex-1 xl:mr-8">
                <h2 className="text-h2 xl:text-h1 text-primaryText font-bold mb-4">
                    Host your meeting with world-class amenities.
                    Starting at <span className='text-yellow-500'>₹199/-!</span>
                </h2>
                </div>
            </div>
            </div>

            <div className="flex md:hidden flex-col items-center text-center bg-white px-4 py-8">
                <img src={mobbanner} alt="Host meeting illustration" className="w-3/4 h-auto mb-4" />
                <h1 className="text-h4 text-primaryText font-bold mb-4">
                    Host your meeting with world-class amenities. Starting at <span className='text-yellow-500'>₹199/-!</span>
                </h1>
            </div>
    </>
  );
};

export default Banner;
