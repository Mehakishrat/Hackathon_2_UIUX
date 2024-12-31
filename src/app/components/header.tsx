import React from "react";
import Image from "next/image";
 

export default function header() {
  return (

    <div className=" wrapper w-[1440px] mx-auto h-[663px]  flex justify-between items-start bg-[#F2F0F1]">
      {/* {left} */}
      <div className=" md:-w-[500px]   md:mt-20 md:ml-10 pl-3 mt-3 ml-10 w-full">
        <h1 className="text-6xl ml-8 md:text-5x1 font-extrabold">
        FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm ml-9 mt-3">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        
        </p>
        <button className=" bg-black py-2 px-8 text-white text-center rounded-[16px] mt-4 text-sm ml-11 hover:text-slate-400 ">Shop Now</button>
      </div>

      {/* {right} */}
      <div>
        <Image className=" w-[1600px] h-[500px] "  src="/Profile.png" width={1440} height={600} alt="profile" />
      </div>

      
    </div>
    
       
  )
}






    