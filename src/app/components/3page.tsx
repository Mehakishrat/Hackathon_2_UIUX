import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

interface Iproduct {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
    ratingreview: string;
}

const product1: Iproduct[] = [
    {
        title: 'Gradient Graphic T-shirt',
        id: 1,
        price: '$145',
        img_url: '/image2.png',
        ratingreview: "3.5/5"

    },
    {
        title: 'Polo with Tipping Details',
        id: 2,
        price: '$180',
        img_url: '/image3.png',
        ratingreview: "4.5/5"

    },
    {
        title: 'Black Striped T-shirt',
        id: 3,
        price: '$120',
        img_url: '/image4.png',
        old_price: "$150",
        ratingreview: "5.0/5"

    },
   
    {
        title: "SKINNY FIT JEANS",
        id: 4,
        price: "$240",
        img_url: "/page2.png",
        old_price: "$260",
        ratingreview: "5.0/5"
    },
    {
        title: "CHECKERED SHIRT",
        id: 5,
        price: "$180",
        img_url: "/page3.png",
        ratingreview: "5.0/5"
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 6,
        price: "$130",
        img_url: "/page4.png",
        old_price: "$160",
        ratingreview: "5.0/5"
    },

    {
        title: 'VERTICAL STRIPED SHIRT',
        id:7,
        price: '$212',
        img_url: '/product1.png',
        old_price:"$232",
        ratingreview: "5.0/5"

    },
    {
        title: 'COURAGE GRAPHIC T-SHIRT',
        id:8,
        price: '$145',
        img_url: '/product2.png',
        ratingreview: "4.0/5"

    },
    {
        title: 'LOOSE FIT BERMUDA SHORTS',
        id:9,
        price: '$80',
        img_url: '/product3.png',
        ratingreview: "3.0/5"

    }
];

export default function Casual() {
    return (
        <div className="w-[900px] h-[1250px] p-4">
            <span className="flex justify-between items-center">
                <h1 className="font-bold mb-4 text-2xl">Casual</h1>
                <span className="flex justify-enditems-end text-sm text-[#00000099]">
                <p> Showing 1-10 of 100 Products</p>
                <p>Sort by: </p>
                <p className="font-bold text-black space-x-3"> Most Popular</p>
                <FaAngleDown />
                </span>
            </span>
            <div className="flex flex-wrap justify-between">
                {product1.map((data) => {
                    return (
                        <div key={data.id} className="w-[30%] mb-8">
                            <Link href={`/feature/${data.id}`}>
                                <div className="w-full h-[230px] bg-[#F0EEED] rounded-lg">
                                    <Image
                                        src={data.img_url}
                                        alt={data.title}
                                        className="w-full h-full rounded-[20px] object-cover"
                                        width={500}
                                        height={500}
                                        quality={100}
                                    />
                                </div>
                            </Link>

                            <div className="mt-2">
                                <p className="text-md md:text-lg font-semibold">{data.title}</p>
                                <h1 className="flex text-yellow-500">
                                    {[...Array(4)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </h1>
                                <p>
                                    {data.price}{" "}
                                    <span className="text-gray-400 font-bold line-through">
                                        {data.old_price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
