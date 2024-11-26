import React from "react";
import ArrowSvg from '../../components/icons/icons/Arrow'


interface ButtonProps {
  label: string;
  price: string;
  discount?: string;
  color: string;
  day ?: number
}

interface Button1Props {
  buttons: ButtonProps[];
}

const Button1: React.FC<Button1Props> = ({ buttons }) => {
  if (!buttons || buttons.length === 0) {
    return null; 
  }

  return (
    <div className="flex gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="p-2 md:p-2.5 lg:p-2.5 xl:p-2.5 rounded-[6px] w-1/2 relative"
          style={{ backgroundColor: button.color }}
        >
          <div className="flex  flex items-center justify-between" >
            <div>
              <p className="text-body2 text-secondaryText font-medium	 text-left">{button.label}</p>
              {/* <p className="lg:text-lg text-base font-bold text-[#263238]">{button.price}</p> */}
              <p className="lg:text-h4 text-base font-bold text-primaryText text-left">
                {button.price}
                <span className="text-[12px] font-normal">/{!button?.day}  {`${button?.day && button?.day > 1 ? 'Days' : 'Day'}`}</span>
              </p>
              {/* Discount Tag */}
              {button.discount && (
                <div className="text-[8px] text=[#FFFDF7] absolute top-[-8px] right-[25%] bg-primaryText text-white  px-2 py-[2px] rounded">
                  {button.discount}
                </div>
              )}
            </div>
            <div>
              <span className="flex"><ArrowSvg className="opacity-40" /> <ArrowSvg className="opacity-60" /> <ArrowSvg/> </span>
            </div>
          </div>

          
        </button>
      ))}
    </div>
  );
};

export default Button1;
