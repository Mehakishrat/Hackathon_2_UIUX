"use client";


import React from "react";
import Header from "./components/header";
import Feature from "./components/feature";
import Rectangle from "./components/rectangle";
import Products from "./product/page"
import Sell from "./product/sell"
import { Button } from "@/components/ui/button";
import Top3reveiw from "./components/top3reveiew";
import ProductCards from "./allproducts/ProductCards";


export default function page() {
  return (

    <div>
      <Header />
      <Rectangle />
      <ProductCards />
      <Products />
      <Sell />
      {/* button div */}
      <div className="flex justify-center mt-4 items-center ">
        <Button className="px-4 py-2 bg-[#0000001A] text-black h-[52px] w-[218px] rounded-full">
          View All
        </Button>
      </div>
      <Feature />
      <Top3reveiw />
    </div>

  );
}







// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProducts } from "@/sanity/lib/queries";
// import Image from "next/image";

// // Product Type Definition
// type Product = {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// };

// export default async function Home() {
//   // Fetch Products
//   const products: Product[] = await sanityFetch({ query: allProducts });

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             className="border p-4 rounded-lg shadow-md flex flex-col items-center"
//             key={product._id}
//           >
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-60"
//               height={500}
//               width={500}
//             />
//             <h2 className="text-xl font-bold text-center">{product.name}</h2>
//             <p className="text-center">{product.description}</p>
//             <p className="text-center">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

