import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

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
        title: 'Polo with Contrast Trims',
        id: 1,
        price: '$212',
        img_url: '/image1.png',
        old_price: "$242",
        ratingreview: "4.0/5"

    },
    {
        title: 'Gradient Graphic T-shirt',
        id: 1,
        price: '$145',
        img_url: '/image2.png',
        ratingreview: "3.5/5"

    },
    {
        title: 'Polo with Tipping Details',
        id: 1,
        price: '$180',
        img_url: '/image3.png',
        ratingreview: "4.5/5"

    },
    {
        title: 'Black Striped T-shirt',
        id: 1,
        price: '$120',
        img_url: '/image4.png',
        old_price: "$150",
        ratingreview: "5.0/5"

    }
]

const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];
export default function mightlike () {
    return(
        <div className="wrapper w-full h-[500px]">
            <h1 className="text-[38px] font-extrabold md:text-4x1 text-center mt-8  ">YOU MIGHT ALSO LIKE</h1>
            <div className="flex flex-col md:flex-row items-center justify-between px-8">
                {
                    product1.map((data) => {
                        return(
                            <div className=" w-[230px] h-[230px] bg-[#F0EEED] my-[50px] rounded-lg" key={data.img_url}>
                                <Image src={data.img_url} alt={data.title}
                                 className="w-full h-full rounded[20px]" width={100} height={100}></Image>
                               <div>
                                <h1 className="text-md md:text-2x1 font-semibold gap-x-5">{data.title}</h1>
                                <div  className="flex text-yellow-500">
                                <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div> <span className="text-gray-400 text-sm "> {data.ratingreview}</span>
                               
                                </div>
                                <p>{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price}</span></p>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
