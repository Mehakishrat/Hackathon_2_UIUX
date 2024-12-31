import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

interface Iproduct {
    title: string,
    price: string,
    id: number,
    rating?: string,
    old_price?: string,
    img_url: string,
    ratingreview: string
}

const product1: Iproduct[] = [
    {
        title: 'VERTICAL STRIPED SHIRT',
        id: 5,
        price: '$212',
        img_url: '/product1.png',
        old_price: "$232",
        ratingreview: "5.0/5"

    },
    {
        title: 'COURAGE GRAPHIC T-SHIRT',
        id: 6,
        price: '$145',
        img_url: '/product2.png',
        ratingreview: "4.0/5"

    },
    {
        title: 'LOOSE FIT BERMUDA SHORTS',
        id: 7,
        price: '$80',
        img_url: '/product3.png',
        ratingreview: "3.0/5"

    },
    {
        title: 'FADED SKINNY JEANS',
        id: 8,
        price: '$210',
        img_url: '/product4.png',
        ratingreview: "3.5/5"

    }
]

const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

export default function Products() {
    return (
        <div className="wrapper w-full h-[500px]">
            <h1 className="text-[38px] font-extrabold md:text-4x1 text-center mt-8  ">TOP SELLING </h1>
            <div className="flex flex-col md:flex-row items-center justify-between px-8">
                {
                    product1.map((data) => {
                        return (
                            <div key={data.id} className="w-full">
                            <Link href={`/product/${data.id}`}>
               
                               <div className="w-full h-[300px] bg-[#F0EEED] rounded-lg overflow-hidden">
                                 <Image
                                   src={data.img_url}
                                   alt={data.title}
                                   className="object-cover"
                                   width={300}
                                   height={300}
                                   quality={90} // Improved image quality
                                   priority // Optimized loading for above-the-fold images
                                 />
                               </div>
                             </Link>
                                    <h1 className="text-md md:text-2x1 font-semibold gap-x-5">{data.title}</h1>
                                    <div className="flex text-yellow-500">
                                        <div className="flex text-yellow-400">
                                            {star.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </div> <span className="text-gray-400 text-sm "> {data.ratingreview}</span>

                                    </div>
                                    <p>{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price}</span></p>
                                </div>
                            
                            
                        )
                    })
                }
                
            </div>
        </div>
        
    )

}