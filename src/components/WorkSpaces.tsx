import React from "react";
import locationIcon from "../assets/icons/assistant_direction.svg";
import group from "../assets/icons/Group.svg";
import Button1 from "../components/atoms/Button1";
import DirectionSVG from '../components/icons/icons/Direction';
import data from '../data/data';

const Workspaces= () => {
  const cards = [
    {
     
      buttons: [
        { label: "Day Pass", price: "₹ 249", day:0, color: "#F9F9F9" },
        { label: "Bulk Pass", price: "₹ 2400", day:10, discount: "20% Discount", color: "#FFCF4B" },
      ],
    },
    {
      buttons: [
        { label: "Day Pass", price: "₹ 299",  day:0,color: "#F9F9F9", },
        { label: "Bulk Pass", price: "₹ 2700", day:10,discount: "15% Discount", color: "#FFCF4B" },
      ],
    },
    {
      buttons: [
        { label: "Day Pass", price: "₹ 249",  day:0,color: "#F9F9F9" },
        { label: "Bulk Pass", price: "₹ 2400", day:10,discount: "20% Discount", color: "#FFCF4B" },
      ],
    },
    {
      buttons: [
        { label: "Day Pass", price: "₹ 299", day:0, color: "#F9F9F9" },
        { label: "Bulk Pass", price: "₹ 2700", day:10,discount: "15% Discount", color: "#FFCF4B" },
      ],
    },
    {
      buttons: [
        { label: "Day Pass", price: "₹ 249", day:0, color: "#F9F9F9" },
        { label: "Bulk Pass", price: "₹ 2400", day:10,discount: "20% Discount", color: "#FFCF4B" },
      ],
    },
    {
      buttons: [
        { label: "Day Pass", price: "₹ 299", day:0, color: "white" },
        { label: "Bulk Pass", price: "₹ 2700",day:10, discount: "15% Discount", color: "#FFCF4B" },
      ],
    },
  ];

  return (
    <div className=" px-0 md:mx-4 lg:mx-4  xl:mx-4">

        <h2 className="md:block lg:block xl:block hidden text-h2 font-bold text-primaryText mb-4 text-left">{'Our Space Overview'}</h2>
        <h2 className="block md:hidden lg:hidden xl:hidden  text-h2 font-bold text-primaryText mb-4 text-left">{'Our Spaces'}</h2>
        <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((card, index) => (
        <div key={index} className="p-4 rounded-lg shadow-md border bg-white">
          {/* Header Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center">
                 <h3 className="text-h4 font-bold text-primaryText max-w-[70%] text-left">{card.name}</h3>
              

              <a  
                href={card.google_maps_url} 
                target="_blank"
                rel="noopener noreferrer"
                className=" w-[52px] h-[52px] rounded-md bg-secondaryGrey flex flex-col justify-center items-center border-[0.5px] border-solid border-lightgray">
                <DirectionSVG/>
                <div className="flex items-center text-[9px] text-primaryText-500 pt-1">
                    <span >6 Kms</span>
                </div>
                </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mb-4">
            <img
              src={card.images[0]}
              alt={card.name}
              className="w-full h-[202px] object-cover rounded"
            />
            <div className="absolute top-2 left-2 bg-[#263238] flex items-center text-white text-xs px-2 py-1 rounded">
              <img src={card.icon}
            alt={card.name} className="w-4 h-4 mr-1" />
              <span>{card.type}</span>
            </div>
          </div>

          {/* Footer Section */}
          <div className="relative">
            <Button1 buttons={cards[index]?.buttons} />
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Workspaces;
