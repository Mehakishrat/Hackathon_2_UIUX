import React from "react";
import Image from "next/image";
import { Delete, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BreadcrumbDemo } from "../components/breadcrumb";

interface Icart {
    title: string;
    price: string;
    id: number;
    size: string;
    color: string;
    img_url: string;
  }

const cartItem:Icart[] = [
    {
        title: "Gradient Graphic T-shirt",
        price: "$145",
        id: 1,
        size: "large",
        color: "white",
        img_url: '/cart1.png'
    },
    {
        title: "CHECKERED SHIRT",
        price: "$180",
        id: 2,
        size: "Medium",
        color: "Red",
        img_url: '/cart2.png'
    },
    {
        title: "SKINNY FIT JEANS",
        price: "$240",
        id: 3,
        size: "large",
        color: "Blue",
        img_url: '/cart3.png'
    }
]

export default function Cart() {
    return (
        <div>
           <div className="pl-7 mt-3">
           <BreadcrumbDemo/>
           <h1 className="text-3xl font-semibold ml-4">Your Cart</h1>
           </div>

        <div className="flex justify-center items-start gap-3">

            {/* left */}
            <div className="w-full h-full md:w-[700px] md:h-[500px] rounded[20px] border mt-5">
                {cartItem.map((item) => (
                    <div className="flex justify-between mt-5 p-4 border-b" key={item.id}>
                        <div className="flex gap-3">
                        <Image
                            src={item.img_url}
                            alt={item.title}
                            width={100}
                            height={100}
                            quality={100}
                        />
                        <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">Size: {item.size}</p>
                            <p className="text-sm"> Color: {item.color}</p>
                            <p className="font-bold text-2x1">{item.price}</p>
                        </div>
                        </div>
                         {/* right side */}
                         <div className="flex flex-col items-center">
                         <Delete/>
                         <div className="flex justify-start items-center mt-7 space-x-4">
                            <div className="w-[120px] h-[40px] rounded-full bg-[#F0F0F0] text-black flex justify-between p-3 items-center font-bold">
                                <Minus />
                                1
                                <Plus />
                            </div>
                            </div>
                            </div>



                    </div>
            ))}


            </div>
            {/* right */}
            <div className="w-full h-full md:w-[500px] md:h-[450px] mt-5 flex-col border ">
                <h1 className="text-3xl font-semibold p-5 ">Order Summary</h1>
                <p className="flex justify-between text-[#00000099] text-lg p-2">Subtotal <span className="font-bold text-black">$565</span></p>
                <p className="flex justify-between text-[#00000099] text-lg p-2 ">Discount (-20%) <span className="font-bold text-red-600">-$113</span> </p>
                <p className="flex justify-between text-[#00000099] text-lg p-2">Delivery Fee <span className="font-bold text-black">$15</span></p>
                <p className="flex justify-between text-black  text-lg mt-5 p-2">Total <span className="font-bold text-black text-lg ">$467</span></p>
                <div className="flex justify-between mt-3">
                <input className="bg-[#e6e4e4] text-[#00000099] rounded-[16px] outline-none p-2 w-[355px]   " placeholder="Add promo code" />
                <Button className="rounded-2xl w-[119px]"> Apply</Button>
                </div>
                <Button className="rounded-2xl mt-7 h-[60px] w-[500px]">Go to Checkout</Button>
            </div>
        </div>
        </div>
    )
}