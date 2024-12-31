import React from "react"
import { FaStar } from "react-icons/fa";


const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
]


export default function reveiewcustomer() {
  return (
    <div>
      <div className="wrapper flex items-center justify-center ">
        <h1 className="font-extrabold  text-4xl text-black mt-40">OUR HAPPY CUSTOMERS</h1>
      </div>


      <div className="flex flex-col items-center justify-center mt-20 space-y-8">
        <div className="flex space-x-4">
          <div className="wrapper mx-sm:left-[16px] max-sm:w-[358px] max-sm:h-[140px] mx-sm:pt-[16px] w-[400px] h-[240px]  flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
            <div className="flex text-yellow-400">
              {star.map((icon, index) => (
                <span key={index}>{icon}</span>
              ))}
            </div>
            <h1 className="font-semibold text-2xl">Sarah M.</h1>
            <p>&quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.&quot;</p>
            </div>
          <div className="wrapper mx-sm:left-[16px] max-sm:w-[358px] max-sm:h-[140px] mx-sm:pt-[16px] w-[400px] h-[240px] flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
            <p className=" flex text-yellow-500">{star}</p>
            <h1 className="font-semibold text-2xl">Alex K.</h1>
            <p>&quot;Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.&quot;</p>
          </div>
          <div className="wrapper mx-sm:left-[16px] max-sm:w-[358px] max-sm:h-[140px] mx-sm:pt-[16px] w-[400px] h-[240px]  flex flex-col items-start justify-start rounded-lg border-[1px] shadow-lg px-6 py-4">
            <p className=" flex text-yellow-500">{star}</p>
            <h1 className="font-semibold text-2xl">James L.</h1>
            <p>&quot;As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.&quot;</p>
            </div>
        </div>
      </div>
    </div>
  )
}