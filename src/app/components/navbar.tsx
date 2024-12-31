import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


import { RxCross1 } from "react-icons/rx";
import Link from "next/link";


export default function navbar() {
    return (
        <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[1440px]
               wrapper">
            <div className="bg-black text-white text-sm flex justify-between items-center px-20 w-full">
                <div className="text-center flex-1">
                    Sign up and get 20% off to your first order.
                    <a href='#' className="underline hover-text-slate-300 "> Sign Up Now</a>
                </div>
                <div className="flex items-center gap-[2px]">
                    <div>
                        <RxCross1 className="text-white text-sm flex justify-end items-center text-3x1 " />

                    </div>
                </div>
            </div>

            {/*Main navigation*/}


            <div className="flex  items-center px-8 py-4">
                <a href={"/"} className="text-2xl font-bold text-black">SHOP.CO</a>
                <nav className="hidden md:flex ml-8 space-x-4 items-center">
                    <a href="#" className="text-slate-600 hover:text-black flex items-center">
                        Shop
                        <RiArrowDropDownLine className="w-[16px] h-[16px]" />
                    </a>

                    <a href={"/"} className="text-slate-600 hover:text-black">On Sale</a>
                    <a href={"/product"} className="text-slate-600 hover:text-black">New Arrival</a>
                    <a href="#" className="text-slate-600 hover:text-black">Brands</a>
                </nav>




                {/*Search Icons*/}




                <div className="flex items-center space-x-6">
                    {/* Search Bar */}
                    <div className="flex ml-14 items-center w-[577px] h-[35px] bg-slate-100 rounded-lg px-4">
                        {/* Search Icon */}
                        <CiSearch className="text-gray-500  w-5 h-5 mr-2" />
                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="flex-grow bg-slate-100 text-sm outline-none placeholder:text-gray-400"
                        />
                    </div>
                    {/* Cart and Profile Icons */}
                    <div className="flex space-x-4">
                        <Link href={"/cart"}>                         
                        <BsCart3 className="text-gray-700 w-6 h-6" />
                        </Link>
                        <CgProfile className="text-gray-700 w-6 h-6" />
                    </div>
                </div>




            </div>





        </header>

    );
} 