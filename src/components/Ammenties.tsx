import CommunityIcon from '../assets/icons/community.svg';
import AffordableIcon from '../assets/icons/affordable.svg';
import GymIcon from '../assets/icons/gym.svg';
import WifiIcon from '../assets/icons/wifi.svg';
import ComfortIcon from '../assets/icons/lounges.svg';
import BookingIcon from '../assets/icons/booking.svg';
import CafeIcon from '../assets/icons/cafe.svg';
import SportsIcon from '../assets/icons/sports-area.svg';
import { Ammenties } from '../types';

const AmmentiesComp: React.FC = () => {

  const features : Ammenties [] = [
    { icon: CommunityIcon, title: 'Community Events', desc: 'One liner detail about the feature' , bb : true, br : true , pl:0},
    { icon: GymIcon, title: 'Gym Facilities' , desc: 'One liner detail about the feature' , bb : true, br : true, pl:6},
    { icon: WifiIcon, title: 'High-Speed WiFi' , desc: 'One liner detail about the feature' , bb : true, br : true, pl:6},
    { icon: CafeIcon, title: 'Cafe & Tea Bar', desc: 'One liner detail about the feature' , bb : true , pl:6},
    { icon: AffordableIcon, title: 'Affordable', desc: 'One liner detail about the feature' , br : true , pl:0},
    { icon: ComfortIcon, title: 'Comfort Lounges', desc: 'One liner detail about the feature' , br : true , pl:6},
    { icon: BookingIcon, title: 'Quick Booking', desc: 'One liner detail about the feature' , br : true , pl:6},
    { icon: SportsIcon, title: 'Sports Area' , desc: 'One liner detail about the feature', pl:6 },
  ];
  

  return (
    <div className="w-full py-10 px-6">
      <div className="">
        <h2 className="text-h2 font-bold text-gray-900 mb-8 text-left">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {features.map((feature, index) => (
           
           <div
           key={index}
         >
           {/* Desktop View */}
           <div
              className={`hidden md:flex items-center border-gray-100 px-6 py-2 h-[80px] ${
                feature?.br ? "border-r" : ""
              } ${feature?.bb ? "border-b" : ""} rounded-lg hover:bg-white hover:shadow-md hover:translate-x-5px hover:translate-y--5px hover:animate-fade-up hover:animate-delay-200 hover:animate-ease-linear transition-all duration-500  group`}
            >
              <img
                src={feature?.icon}
                alt={feature?.title}
                className="size-8 mr-4"
              />
              <div>
                {/* <p className="text-h5  text-primaryText  md:text-left group-hover:ml-[1px]  group-hover:font-semibold group-hover:animate-fade-up group-hover:animate-delay-200 group-hover:animate-ease-linear  group-hover:duration-500 group-hover:transition-all group-hover:ease-in-out ">
                  {feature?.title}
                </p> */}

                <p className="text-h5  text-primaryText  md:text-left group-hover:font-semibold duration-200 transition-all ease-in-out ">
                  {feature?.title}
                </p>
                {/* Show this on hover of the parent div */}
                {/* <p className="text-body3 text-secondaryText md:text-left hidden group-hover:block group-hover:ml-[2px] group-hover:duration-500 group-hover:transition-all group-hover:ease-in-out ">
                  {feature?.desc}
                </p> */}
              </div>
            </div>

         
           {/* Mobile View */}
           <div className="flex md:hidden flex-col items-center border-gray-300 m-2 p-2 md:px-4 bg-white rounded-lg shadow shadow-lg transition-shadow">
             <img src={feature?.icon} alt={feature?.title} className="mb-2" />
             <p className="text-body text-center text-primaryText font-semibold">
               {feature?.title}
             </p>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
};



export default AmmentiesComp;
