'use client';
import React from 'react';
import { useParams } from 'next/navigation'; // Correct import for App Router
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { IoChevronDownOutline } from 'react-icons/io5';
import Mightlike from '../mightlike';
import { BreadcrumbDemo } from '@/app/components/breadcrumb';

const star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];

interface Iproduct {
    title: string;
    price: string;
    id: number;
    rating?: string;
    old_price?: string;
    img_url: string;
    img_1: string;
    img_2: string;
    img_3: string;
    ratingreview?: string

}

const product: Iproduct[] = [
    {
        title: 'T-SHIRT WITH TAPE DETAILS',
        id: 1,
        price: '$120',
        img_url: '/page1.png',
        img_1: '/page1.png',
        img_2: '/detail2.png',
        img_3: '/page1.png',
    },
    {
        title: 'SKINNY FIT JEANS',
        id: 2,
        price: '$240',
        img_url: '/page2.png',
        old_price: '$260',
        img_1: '/page2.png',
        img_2: '/detail2.png',
        img_3: '/page2.png',
    },
    {
        title: 'CHECKERED SHIRT',
        id: 3,
        price: '$180',
        img_url: '/page3.png',
        img_1: '/page3.png',
        img_2: '/detail2.png',
        img_3: '/page3.png',
    },
    {
        title: 'SLEEVE STRIPED T-SHIRT',
        id: 4,
        price: '$130',
        img_url: '/page4.png',
        old_price: '$160',
        img_1: '/page4.png',
        img_2: '/detail2.png',
        img_3: '/page4.png',
    },
    {
        title:"SLEEVE STRIPED T-SHIRT",
        id:5,
        price:"$120",
        img_url:'/product1.png',
        old_price:"$200",
        img_1:'/product1.png',
        img_2:"/detail2.png",
        img_3:'/product1.png',
     
       },
       {
        title:"SLEEVE STRIPED T-SHIRT",
        id:6,
        price:"$120",
        img_url:'/product2.png',
        old_price:"$200",
        img_1:'/product2.png',
        img_2:"/detail2.png",
        img_3:'/product2.png',
     
       },
       {
        title:"SLEEVE STRIPED T-SHIRT",
        id:7,
        price:"$120",
        img_url:'/product3.png',
        old_price:"$200",
        img_1:'/product3.png',
        img_2:"/detail2.png",
        img_3:'/product3.png',
     
       },
       {
        title:"SLEEVE STRIPED T-SHIRT",
        id:8,
        price:"$120",
        img_url:'/product4.png',
        old_price:"$200",
        img_1:'/product4.png',
        img_2:"/detail2.png",
        img_3:'/product4.png',
     
       },

];

export default function ProductDetails() {
    const params = useParams(); // Fetch dynamic params
    const id = params.id;

    // Find product by ID
    const item1 = product.find((item) => item.id === Number(id));

    if (!item1) {
        return <h1>Product not found</h1>;
    }
    return (
        <div className="wrapper">
            <BreadcrumbDemo />
            <div className="flex justify-evenly mt-10">
                {/* Left */}
                <div className="w-[152px]">
                    {/* Images */}
                    <Image src={item1.img_1} className="w-full h-[150px]" alt="productdetails" width={100} height={100} quality={90} />
                    <Image src={item1.img_2} className="w-full h-[150px] mt-3" alt="productdetails" width={100} height={100} quality={90} />
                    <Image src={item1.img_3} className="w-full h-[150px] mt-3" alt="productdetails" width={100} height={100} quality={90} />
                </div>

                {/* Mid div */}
                <div className="w-[444px] h-[530px]">
                    <Image
                        src={item1.img_1}
                        alt="productdetails"
                        width={444}
                        height={530}
                        objectFit="cover" // Ensures the image fits well
                        quality={100}
                        priority
                    />
                </div>


                {/* Right div */}
                <div className="w-[600px] h-[530px]">
                    <h1 className="text-4xl font-extrabold md:text-3xl">{item1.title}</h1>
                    <div className="flex text-yellow-400 mt-2">
                        <div className="flex text-yellow-400">
                            {star.map((icon, index) => (
                                <span key={index}>{icon}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="font-bold mt-3">
                            {item1.price} <span className="text-gray-400 font-bold line-through">{item1.old_price}</span>
                        </p>
                        <div>
                            <p>This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        </div>
                        <p className="mt-5">Select Colors</p>
                        <div className="flex gap-[16px] mt-2">
                            {/* Circle section */}
                            <div className="w-[40px] h-[40px] rounded-full bg-[#4F4631]"></div>
                            <div className="w-[40px] h-[40px] rounded-full bg-[#314F4A]"></div>
                            <div className="w-[40px] h-[40px] rounded-full bg-[#31344F]"></div>
                        </div>

                        <div>
                            {/* Choose size */}
                            <p className="mt-3">Choose size</p>
                            <div className="flex gap-[12px] mt-2">
                                <div className="w-[86px] h-[46px] rounded-full bg-[#b1a9a9] text-black flex justify-center items-center font-bold">small</div>
                                <div className="w-[86px] h-[46px] rounded-full bg-[#b1a9a9] text-black flex justify-center items-center font-bold">medium</div>
                                <div className="w-[86px] h-[46px] rounded-full bg-[#000000] text-white flex justify-center items-center font-bold">large</div>
                                <div className="w-[86px] h-[46px] rounded-full bg-[#b1a9a9] text-black flex justify-center items-center font-bold">x-large</div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-start items-center mt-7 space-x-4">
                            <div className="w-[100px] h-[52px] rounded-full bg-[#F0F0F0] text-black flex justify-between p-3 items-center font-bold">
                                <Minus />
                                1
                                <Plus />
                            </div>
                            <Button className="bg-black w-[400px] h-[52px] rounded-full text-white">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional sections (Product details, Reviews, FAQs) */}
            <div className="wrapper text-2xl font-semibold text-center mt-10 flex justify-between px-20">
                <span className="text-gray-500">Product Details</span>
                <span>Rating & Reviews</span>
                <span className="text-gray-500">FAQs</span>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="wrapper flex justify-between items-center space-x-2">
                <div className="flex space-x-2">
                    <span className="text-black font-semibold text-2xl">All Reviews</span>
                    <span className="text-gray-500">(451)</span>
                </div>
                <div className="flex space-x-2 items-center">
                    <Image className="w-10 object-contain rounded-full shadow-lg" src="/logo.png" alt="photo" width={100} height={100} />
                    <Button className="text-black bg-gray-200 rounded-full px-4 py-2 shadow-md">
                        Latest <IoChevronDownOutline />
                    </Button>
                    <Button className="rounded-full px-4 py-2 shadow-md">Write a Review</Button>
                </div>
            </div>

            {/* rating and review */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-20 px-4">
   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xl">Samantha D.</h1>
       <p className="text-gray-500">&quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;</p>
       <h3 className="text-gray-500">Posted on August 14, 2023</h3>
   </div>

   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xl">Alex M.</h1>
       <p className="text-gray-600">&quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;</p>
       <h3 className="text-gray-600">Posted on August 15, 2023</h3>
   </div>

   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xl">Ethan R.</h1>
       <p className="text-gray-600">&quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;</p>
       <h3 className="text-gray-600">Posted on August 16, 2023</h3>
   </div>

   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xl">Olivia P.</h1>
       <p className="text-gray-600">&quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;</p>
       <h3 className="text-gray-600">Posted on August 17, 2023</h3>
   </div>

   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xlL">Liam K.</h1>
       <p className="text-gray-600">&quot;This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&apos;s skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion.&quot;</p>
       <h3 className="text-gray-600">Posted on August 18, 2023</h3>
   </div>

   <div className="wrapper w-[610px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
       <p className="flex text-yellow-500"><div className="flex text-yellow-400">
                       {star.map((icon, index) => (
                           <span key={index}>{icon}</span>
                       ))}
                   </div></p>
       <h1 className="font-semibold text-2xl">Ava H.</h1>
       <p className="text-gray-600">&quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;</p>
       <h3 className="text-gray-600">Posted on August 19, 2023</h3>
   </div>
</div>

            {/* Load more button */}
            <div className="flex items-center justify-center pt-10">
                <button className="px-6 py-2 bg-[#0000001A] text-black rounded-lg shadow-md hover:bg-blue-600">
                    Load More Reviews
                </button>
            </div>

            {/* Mightlike section */}
            <Mightlike />
        </div>
    );
}


//                  