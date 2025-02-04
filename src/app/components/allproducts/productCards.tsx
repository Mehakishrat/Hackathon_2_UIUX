// 'use client';

// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// const sanity = sanityClient({
//     projectId: "smqywmty",
//     dataset: "production",
//     apiVersion: "2025-01-18",
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     imageUrl: string;
//     slug: {
//         _type: "slug",
//         current: string;
//     };
//     category: string;
//     discountPercent: number;
//     new: boolean;
//     colors: string[];
//     sizes: string[];
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[_type == "products"] {
//                 _id,
//                 name,
//                 "slug": slug.current,
//                 price,
//                 description,
//                 "imageUrl": image.asset->url,
//                 category,
//                 discountPercent,
//                 new,
//                 colors,
//                 sizes
//             }
//             `;
//             const data = await sanity.fetch(query);
//             setProducts(data);
//         } catch (error) {
//             console.error("Error Fetching products:", error);
//         }
//     };

//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.name} has been added to your cart.`);
//     };

//     const removeFromCart = (productId: string) => {
//         setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//         alert("Product has been removed from the cart.");
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const truncateDescription = (description: string): string => {
//         const maxLength = 100;
//         return description.length > maxLength
//             ? description.substring(0, maxLength) + "..."
//             : description;
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-center text-slate-800 mt-4 mb-4">
//                 Products From API's Data
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product._id}
//                         className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//                        <Link href={`/products/${product.slug?.current}` } >
//                             <Image
//                                 src={product.imageUrl || "/fallback-image.jpg"}
//                                 alt={product.name || "Product image"}
//                                 width={300}
//                                 height={300}
//                                 className="w-full h-48 object-cover rounded-md"
//                             />
//                               </Link>

//                             <div className="mt-4">
//                                 <div>
//                                     <h2 className="text-lg font-semibold">{product.name}</h2>

//                                 </div>

//                                 <p className="text-slate-800 mt-2 text-sm">
//                                     {truncateDescription(product.description)}
//                                 </p>
//                                 <p className="text-slate-600 mt-2">
//                                     <span className="font-bold">Category:</span> {product.category}
//                                 </p>
//                                 <div className="flex justify-between items-center mt-4">
//                                     <div>
//                                         <p className="text-slate-600 font-bold">
//                                             ${product.price.toFixed(2)}
//                                         </p>
//                                         {product.discountPercent > 0 && (
//                                             <p className="text-sm text-green-600">
//                                                 {product.discountPercent}% off
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
                        
//                         <div className="mt-2 flex flex-wrap gap-2">
//                             {product.colors.map((color, index) => (
//                                 <span
//                                     key={index}
//                                     className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
//                                     {color}
//                                 </span>
//                             ))}
//                         </div>
//                         <button
//                             className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                             onClick={() => addToCart(product)}>
//                             Add To Cart
//                         </button>
//                     </div>

//                     </div>
//                 ))}
//         </div>

//             {/* Cart Summary */ }
//     <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold text-slate-800 mb-3">Cart Summary</h2>
//         {cart.length > 0 ? (
//             <ul className="space-y-4">
//                 {cart.map((item) => (
//                     <li
//                         key={item._id}
//                         className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
//                         <div>
//                             <p className="font-medium text-slate-900">{item.name}</p>
//                             <p className="font-medium text-slate-600">
//                                 ${item.price.toFixed(2)}
//                             </p>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <Image
//                                 src={item.imageUrl}
//                                 alt={item.name}
//                                 width={50}
//                                 height={50}
//                                 className="rounded-md"
//                             />
//                             <button
//                                 onClick={() => removeFromCart(item._id)}
//                                 className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
//                                 Delete
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         ) : (
//             <p className="text-center text-slate-600">
//                 Your cart is empty. Please add products.
//             </p>
//         )}
//     </div>
//         </div >
//     );
// };

// export default ProductCards;





// "use client";

// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";

// const sanity = sanityClient({
//     projectId: "smqywmty",
//     dataset: "production",
//     apiVersion: "2023-01-01",
//     useCdn: true,
// });

// interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     imageUrl: string;
//     slug: {
//         _type: "slug";
//         current: string;
//     };
//     category: string;
//     discountPercent: number;
//     new: boolean;
//     colors: string[];
//     sizes: string[];
// }

// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     const fetchProducts = async () => {
//         try {
//             const query = `
//             *[_type == "products"] {
//                 _id,
//                 name,
//                 price,
//                 description,
//                 "imageUrl": image.asset->url,
//                 category,
//                 discountPercent,
//                 new,
//                 colors,
//                 sizes,
//                 slug
//             }
//             `;
//             const data = await sanity.fetch(query);
//             if (Array.isArray(data)) {
//                 setProducts(data);
//             } else {
//                 console.error("Unexpected data format:", data);
//             }
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.name} has been added to your cart.`);
//     };

//     const removeFromCart = (productId: string) => {
//         setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//         alert("Product has been removed from the cart.");
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const truncateDescription = (description: string): string => {
//         const maxLength = 100;
//         return description.length > maxLength
//             ? description.substring(0, maxLength) + "..."
//             : description;
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-center text-slate-800 mt-4 mb-4">
//                 Products From API's Data
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product._id}
//                         className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//                         <Image
//                             src={product.imageUrl || "/fallback-image.jpg"}
//                             alt={product.name || "Product image"}
//                             width={300}
//                             height={300}
//                             className="w-full h-48 object-cover rounded-md"
//                         />
//                         <div className="mt-4">
//                             <h2 className="text-lg font-semibold">{product.name}</h2>
//                             <p className="text-slate-800 mt-2 text-sm">
//                                 {truncateDescription(product.description)}
//                             </p>
//                             <p className="text-slate-600 mt-2">
//                                 <span className="font-bold">Category:</span> {product.category}
//                             </p>
//                             <div className="flex justify-between items-center mt-4">
//                                 <div>
//                                     <p className="text-slate-600 font-bold">
//                                         ${product.price.toFixed(2)}
//                                     </p>
//                                     {product.discountPercent > 0 && (
//                                         <p className="text-sm text-green-600">
//                                             {product.discountPercent}% off
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="mt-2 flex flex-wrap gap-2">
//                                 {product.colors.map((color, index) => (
//                                     <span
//                                         key={index}
//                                         className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">
//                                         {color}
//                                     </span>
//                                 ))}
//                             </div>
//                             <button
//                                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                                 onClick={() => addToCart(product)}>
//                                 Add To Cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Cart Summary */}
//             <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//                 <h2 className="text-lg font-bold text-slate-800 mb-3">Cart Summary</h2>
//                 {cart.length > 0 ? (
//                     <ul className="space-y-4">
//                         {cart.map((item) => (
//                             <li
//                                 key={item._id}
//                                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
//                                 <div>
//                                     <p className="font-medium text-slate-900">{item.name}</p>
//                                     <p className="font-medium text-slate-600">
//                                         ${item.price.toFixed(2)}
//                                     </p>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Image
//                                         src={item.imageUrl}
//                                         alt={item.name}
//                                         width={50}
//                                         height={50}
//                                         className="rounded-md"
//                                     />
//                                     <button
//                                         onClick={() => removeFromCart(item._id)}
//                                         className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
//                                         Delete
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p className="text-center text-slate-600">
//                         Your cart is empty. Please add products.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductCards;

