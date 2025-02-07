// import Image from "next/image";
// import React from "react";
// import { FaStar } from "react-icons/fa";
// import Link from "next/link";

// interface Iproduct {
//     title: string,
//     price: string,
//     id: number,
//     rating?: string,
//     old_price?: string,
//     img_url: string,
//     ratingreview: string
// }

// const product1: Iproduct[] = [
//     {
//         title: 'VERTICAL STRIPED SHIRT',
//         id: 5,
//         price: '$212',
//         img_url: '/product1.png',
//         old_price: "$232",
//         ratingreview: "5.0/5"

//     },
//     {
//         title: 'COURAGE GRAPHIC T-SHIRT',
//         id: 6,
//         price: '$145',
//         img_url: '/product2.png',
//         ratingreview: "4.0/5"

//     },
//     {
//         title: 'LOOSE FIT BERMUDA SHORTS',
//         id: 7,
//         price: '$80',
//         img_url: '/product3.png',
//         ratingreview: "3.0/5"

//     },
//     {
//         title: 'FADED SKINNY JEANS',
//         id: 8,
//         price: '$210',
//         img_url: '/product4.png',
//         ratingreview: "3.5/5"

//     }
// ]

// const star = [
//     <FaStar key={1} />,
//     <FaStar key={2} />,
//     <FaStar key={3} />,
//     <FaStar key={4} />,
//     <FaStar key={5} />,
// ];

// export default function Products() {
//     return (
//         <div className="wrapper w-full h-[500px]">
//             <h1 className="text-[38px] font-extrabold md:text-4x1 text-center mt-8  ">TOP SELLING </h1>
//             <div className="flex flex-col md:flex-row items-center justify-between px-8">
//                 {
//                     product1.map((data) => {
//                         return (
//                             <div key={data.id} className="w-full">
//                             <Link href={`/product/${data.id}`}>
               
//                                <div className="w-full h-[300px] bg-[#F0EEED] rounded-lg overflow-hidden">
//                                  <Image
//                                    src={data.img_url}
//                                    alt={data.title}
//                                    className="object-cover"
//                                    width={300}
//                                    height={300}
//                                    quality={90} // Improved image quality
//                                    priority // Optimized loading for above-the-fold images
//                                  />
//                                </div>
//                              </Link>
//                                     <h1 className="text-md md:text-2x1 font-semibold gap-x-5">{data.title}</h1>
//                                     <div className="flex text-yellow-500">
//                                         <div className="flex text-yellow-400">
//                                             {star.map((icon, index) => (
//                                                 <span key={index}>{icon}</span>
//                                             ))}
//                                         </div> <span className="text-gray-400 text-sm "> {data.ratingreview}</span>

//                                     </div>
//                                     <p>{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price}</span></p>
//                                 </div>
                            
                            
//                         )
//                     })
//                 }
                
//             </div>
//         </div>
        
//     )

// }



"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

interface Iproducts {
  imageUrl: string;
  discountPercent: number;
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  _id: string;
}

// Star icons array
const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];

export default function Products() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts: Iproducts[] = await client.fetch(
          `*[_type == 'products']{
            "imageUrl": image.asset->url,
            category,
            discountPercent,
            isNew,
            name,
            description,
            price,
            _id
          }[0...4]`
        );
        setProducts(fetchedProducts);
      } catch (err: any) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-10 max-w-screen-xl mx-auto">
      <h1 className="text-[38px] font-extrabold md:text-4xl text-center mt-8">TOP SELLING</h1>
      <div className="relative mt-10 overflow-x-auto flex space-x-5 px-8">
        {products.map((data) => (
          <div key={data._id} className="flex-shrink-0">
            <Link href={`/product/${data._id}`}>
              <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                {data.imageUrl ? (
                  <Image
                    src={urlFor(data.imageUrl).width(800).height(800).quality(90).url()}
                    alt={data.name}
                    className="w-full h-full rounded-[20px] object-cover"
                    width={800}
                    height={800}
                    quality={90} // Optimized image quality
                    priority // Prioritize loading of these images
                    placeholder="blur" // Blur placeholder effect
                    blurDataURL="/placeholder.jpg" // Replace with a valid placeholder image URL
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-gray-300 rounded-[20px]">
                    <p>No Image</p>
                  </div>
                )}
              </div>
            </Link>
            <div className="pl-2">
              <p className="text-lg mt-2 font-bold">{data.name}</p>
              <div className="flex text-yellow-400">
                {star.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <p className="font-bold mt-1">
                ${data.price.toFixed(2)}
                {data.discountPercent ? (
                  <span className="text-gray-400 font-bold line-through ml-2">
                    {data.discountPercent}%
                  </span>
                ) : null}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-start mt-5">
        <Link href="/casual">
          <Button
            variant={"outline"}
            className="sm:mt-0 w-[80%] sm:w-[200px] rounded-[20px]"
          >
            View all
          </Button>
        </Link>
      </div>
    </div>
  );
}
