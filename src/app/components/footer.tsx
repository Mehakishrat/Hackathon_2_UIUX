import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";


export default function Footer() {
    return (
      <div>
        <div className="wrapper flex bg-black w-[1240px] h-[180px] mt-20 rounded-[20px] justify-between px-8 py-10">
          <h1 className="flex text-white items-center text-4xl font-extrabold w-[500px] h-[94px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
  
          {/* Two placeholders, one above the other */}
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center w-[350px] h-[35px] bg-slate-50 rounded-lg px-4">
            <TfiEmail className="text-gray-500  w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-grow bg-slate-100 text-sm outline-none  placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center w-[350px] h-[35px] bg-slate-50 rounded-lg px-4">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="flex-grow bg-slate-100 text-sm text-center outline-none placeholder:text-black"
              />
            </div>
          </div>
        </div>

    
      
        
    <footer className="w-full bg-[#F0F0F0] text-[#00000099] p-8">
      <div className="container mx-auto flex flex-col space-y-8">
        {/* Top Section */}
        <div className="flex justify-between">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold text-black">SHOP.CO</h1>
            <p className="w-[248px] h-[66px]"> We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

            <h2 className="flex gap-3 pt-4 text-2xl  "> <AiFillTwitterCircle /> <RiFacebookCircleFill  className="text-black"/>  <FaInstagramSquare /> <FaGithub /> </h2>
           
          </div>
          <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-black">COMPANY</h1>
          <ul className="space-y-2">
              <li>About </li>
              <li>Features</li>
              <li>Work</li>
              <li>Carrer</li>
            </ul>
            </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-black">HELP</h1>
            <ul className="space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-black">FAQ</h1>
            <ul className="space-y-2">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payment</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex justify-between items-center ">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <div className="flex space-x-4 text-4xl">
            <RiVisaLine className="text-blue-800" />
            <RiMastercardLine className="text-yellow-500" />
            <FaCcPaypal className="text-blue-600"/>
            <FaApplePay className="text-black"/>
            <FaGooglePay className="text-orange-600" />
          </div>
        </div>

      
      </div>
    </footer>


           
      
      </div>
    );
  }


