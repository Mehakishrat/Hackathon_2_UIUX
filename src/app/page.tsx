
import React from "react";
import Header from "./components/header";
import Feature from "./components/feature";
import Rectangle from "./components/rectangle";
import Products from "./product/page"
import Sell from "./product/sell"
import { Button } from "@/components/ui/button";
import Top3reveiw  from "./components/top3reveiew";







export default function page() {
  return (
    
    <div> 
      
      
      <Header/>
      <Rectangle/>
    
      <Products/>
      <Sell/>
      {/* button div */}
      <div className="flex justify-center mt-4 items-center ">
      <Button className="px-4 py-2 bg-[#0000001A] text-black h-[52px] w-[218px] rounded-full">
      View All
     </Button>

     </div>
     <Feature/>
     <Top3reveiw/>

     
     


    </div>
  );
}

