// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaStar } from "react-icons/fa";

// interface Iproduct {
//   title: string;
//   price: string;
//   id: number;
//   rating?: string;
//   old_price?: string;
//   img_url: string;
// }

// const product1: Iproduct[] = [
//   {
//     title: "T-SHIRT WITH TAPE DETAILS",
//     id: 1,
//     price: "$120",
//     img_url: "/page1.png",
//   },
//   {
//     title: "SKINNY FIT JEANS",
//     id: 2,
//     price: "$240",
//     img_url: "/page2.png",
//     old_price: "$260",
//   },
//   {
//     title: "CHECKERED SHIRT",
//     id: 3,
//     price: "$180",
//     img_url: "/page3.png",
//   },
//   {
//     title: "SLEEVE STRIPED T-SHIRT",
//     id: 4,
//     price: "$130",
//     img_url: "/page4.png",
//     old_price: "$160",
//   },
// ];

// export default function Products() {
//   return (
//     <div className="wrapper w-full h-auto">
//       <h1 className="text-[38px] font-extrabold md:text-4xl text-center mt-8">
//         NEW ARRIVALS
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-4">
//         {product1.map((data) => {
//           return (
//             <div key={data.id} className="w-full">
//              <Link href={`/product/${data.id}`}>

//                 <div className="w-full h-[300px] bg-[#F0EEED] rounded-lg overflow-hidden">
//                   <Image
//                     src={data.img_url}
//                     alt={data.title}
//                     className="object-cover"
//                     width={300}
//                     height={300}
//                     quality={90} // Improved image quality
//                     priority // Optimized loading for above-the-fold images
//                   />
//                 </div>
//               </Link>

//               <div className="mt-4 text-center">
//                 <p className="text-md md:text-lg font-semibold">
//                   {data.title}
//                 </p>
//                 <h1 className="flex justify-center text-yellow-500 mt-1">
//                   {[...Array(4)].map((_, index) => (
//                     <FaStar key={index} />
//                   ))}
//                 </h1>
//                 <p>
//                   {data.price}{" "}
//                   {data.old_price && (
//                     <span className="text-gray-400 font-bold line-through ml-2">
//                       {data.old_price}
//                     </span>
//                   )}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
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

export default function Top_sell() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts: Iproducts[] = await client.fetch(
          `*[_type == 'products' && category == 'tshirt']{
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
      } catch (err: unknown) {
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
      <h1 className="text-[38px] font-extrabold md:text-4xl text-center mt-8">NEW ARRIVAL</h1>
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
                    quality={90} // High-quality images
                    placeholder="blur" // Blur placeholder for smoother loading
                    blurDataURL="/path/to/placeholder-image.jpg" // Replace with actual placeholder
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
