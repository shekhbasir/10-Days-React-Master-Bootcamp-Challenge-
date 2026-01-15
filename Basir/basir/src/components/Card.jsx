import React from "react";
import { ShoppingBag } from "lucide-react";
function Card(props) {
  const sabdata = props.data;
  console.log(sabdata);
  return (
    <>
      <div>
        <div className="h-[280px]  w-[220px] bg-gray-200 border-1 rounded-[10px] shadow-lg">
          <div className="flex justify-between p-[6px]">
            <div className="h-[40px] w-[40px] rounded-[50%] bg-gray-300 flex justify-center items-center border-1">
              <img src={sabdata.logo} alt="Logo" />
            </div>

            <div className="">
              <span className="text-[12px] flex gap-[7px] h-[20px] w-[70px] bg-gray-300 justify-center items-center rounded-[10px] cursor-pointer">
                saved
                <ShoppingBag size={15} />
              </span>
            </div>
          </div>

          {/* from here i am going to addding the compony and the date of the */}
          <div className="my-[40px]">
            <div className=" ">
              <span>{sabdata.cname}</span>
              <span className="text-gray-400 text-[13px] mx-[10px] ">
                {sabdata.datesab}
              </span>
              <div>
                <h1 className="text-[20px] font-bold">{sabdata.role}</h1>
              </div>
              <div className="flex my-[5px] gap-[10px]">
                <div className="h-[20px] w-[70px] border-1 rounded-[5px] bg-gray-300  flex justify-center items-center cursor-not-allowed">
                  {sabdata.jt1}
                </div>
                <div className="h-[20px] w-[100px] border-1 rounded-[5px] bg-gray-300  flex justify-center items-center cursor-not-allowed">
                  {sabdata.jt2}
                </div>
              </div>
            </div>
          </div>
          <div className="my-[50px]  flex  justify-between p-[5px]">
            <div className=" ">
              <h1 className="font-medium">{sabdata.money}</h1>
              <h1 className="text-[13px] text-gray-500">{sabdata.location}</h1>
            </div>
            <div className="h-[30px] w-[100px] cursor-pointer rounded-[10px] text-center bg-black text-white">
              <h1>Apply Now</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

// now i am going to work with the props and the data i am sending from here
