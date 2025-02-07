import { Button } from "@/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDownOutline } from 'react-icons/io5';

const AllReviews = () => {
    const star = [
        <FaStar key={1} />,
        <FaStar key={2} />,
        <FaStar key={3} />,
        <FaStar key={4} />,
        <FaStar key={5} />,
    ];

    {/* rating and review */ }
    return (
        <div className="mt-10" >
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
                  
                    <Button className="text-black bg-gray-200 rounded-full px-4 py-2 shadow-md">
                        Latest <IoChevronDownOutline />
                    </Button>
                    <Button className="rounded-full px-4 py-2 shadow-md">Write a Review</Button>
                </div>
            </div>
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
            </div>
    );
};
export default AllReviews; // Default export added

