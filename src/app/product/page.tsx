import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Iproduct {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
}

const product1: Iproduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/page1.png",
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$240",
    img_url: "/page2.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$180",
    img_url: "/page3.png",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$130",
    img_url: "/page4.png",
    old_price: "$160",
  },
];

export default function Products() {
  return (
    <div className="wrapper w-full h-auto">
      <h1 className="text-[38px] font-extrabold md:text-4xl text-center mt-8">
        NEW ARRIVALS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-4">
        {product1.map((data) => {
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

              <div className="mt-4 text-center">
                <p className="text-md md:text-lg font-semibold">
                  {data.title}
                </p>
                <h1 className="flex justify-center text-yellow-500 mt-1">
                  {[...Array(4)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </h1>
                <p>
                  {data.price}{" "}
                  {data.old_price && (
                    <span className="text-gray-400 font-bold line-through ml-2">
                      {data.old_price}
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
