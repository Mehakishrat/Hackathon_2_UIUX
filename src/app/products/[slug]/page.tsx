// import { client } from "@/sanity/lib/client";
// import React from 'react'
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";

// interface Product {
//     name: string;
//     price: number;
//     description: string;
//     slug: {
//         _type: "slug",
//         current: string;
//     };
//     imageUrl: string;
//     category: string;
//     discountPercent: number;
//     colors: string[];
//     sizes: string[];
// }

// interface ProductPageProps {
//     params: { slug: string }; // Corrected type (removed Promise)
// }

// async function getProduct(slug: string): Promise<Product> {
//     return client.fetch(
//         groq`*[_type == 'products' && slug.current == $slug][0] {
//             _id, 
//             name,
//             price,
//             description,
//             "imageUrl": image.asset->url,
//             category,
//             discountPercent,
//             colors,
//             sizes,
//         }`,
//         { slug } // You pass this object, but ensure that 'slug' is correctly passed!
//     );
// }
 

// export default async function ProductPage({ params }: ProductPageProps) {
//     const { slug } = params; // Destructure params without await
//     const product = await getProduct(slug);

//     if (!product) {
//         return <div>Product not found!</div>;
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">
//                     {product.imageUrl && (
//                         <Image
//                             src={urlFor(product.imageUrl).url()}
//                             alt={product.name}
//                             width={500}
//                             height={500}
//                             className="rounded-lg shadow-md"
//                         />
//                     )}
//                 </div>
//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-2xl font-bold mt-4">
//                         {product.name}
//                     </h1>
//                     <p className="text-gray-700 mt-2">{product.description}</p>
//                     <p className="text-gray-900 font-semibold mt-2">
//                         Price: ${product.price.toFixed(2)}
//                     </p>
//                     <div className="flex gap-2">
//                         <span>Category:</span>
//                         <span className="text-gray-600">{product.category}</span>
//                     </div>
//                     <div className="flex gap-2 flex-wrap mt-4">
//                         {product.colors.map((color, index) => (
//                             <span
//                                 key={index}
//                                 className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-700"
//                             >
//                                 {color}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";

interface Product {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    discountPercent: number;
    colors: string[];
    sizes: string[];
}

interface ProductPageProps {
    params: { slug: string };
}

const getProduct = async(slug:string) => {
const product = await client.fetch(
        groq `*[_type == "products" && slug.current == $slug][0] {
            _id, 
            name,
            price,
            description,
            "imageUrl": image.asset->url,
            category,
            discountPercent,
            colors,
            sizes,
        }`,
        { slug }
    );
    return product;

}

const  ProductPage = async ({ params }: ProductPageProps) => {
    const { slug } = params;
    const product = await getProduct(slug);

    if (!product) {
        return <div>Product not found</div>;
      }
    

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.imageUrl && (
                        <Image
                            src={urlFor(product.imageUrl).url()}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-2xl font-bold mt-4">
                        {product.name}
                    </h1>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                    <p className="text-gray-900 font-semibold mt-2">
                        Price: ${product.price.toFixed(2)}    
                    </p>
                   
                                   
                        </div>
                    </div>
                </div>
    );
}

export default ProductPage;




