'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";




export default function RectangleComponent() {
    const router = useRouter();

    const handleImageClick = () => {
        router.push("/3page");
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="bg-gray-200 w-[1239px] h-[866px] rounded-[40px]">
                <h1 className="items-center text-black font-extrabold flex justify-center text-6xl mt-20">BROWSE BY DRESS STYLE</h1>


                <div className="flex space-x-8 justify-center mt-16">
                    <Link href="/casual">
                        <Image
                            className="w-[407px] h-[289px] rounded-[20px]"
                            src="/Frame1.png"
                            alt="profile"
                            width={407}
                            height={289}
                            onClick={handleImageClick} // Add click handler
                        />
                    </Link>
 


                    
                <Image
                    className="w-[684px] h-[289px] rounded-[20px]"
                    src="/Frame3.png"
                    alt="profile"
                    width={684}
                            height={289}
                    
                />
            </div>
            {/* {next line div image} */}
            <div className="flex space-x-8 mt-4 justify-center">
                <Image
                    className="w-[684px] h-[289px] rounded-[20px] " // Add cursor-pointer for visual effect
                    src="/Frame4.png"
                    alt="profile"
                    width={684}
                            height={289}
                />

                <Image
                    className="w-[407px] h-[289px] rounded-[20px]"
                    src="/Frame2.png"
                    alt="profile"
                    width={407}
                            height={289}
                />
            </div>


        </div>

        </div >
    );
}


