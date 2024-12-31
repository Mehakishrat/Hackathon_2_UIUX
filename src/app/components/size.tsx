import React from "react";

export default function Size() {
    return (
        <div>
            <div>
                {/*choose size*/}
                <p className="text-xl font-bold pl-5 mt-7 mb-3">Size</p>
                <div className="flex flex-wrap px-5 gap-3 mt-2">
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> XX-Small</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> X-Small</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> Small</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> Medium</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#000000] text-white flex justify-center items-center font-bold"> large</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> X-Large</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> XX-Large</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> 3X-Large</div>
                    <div className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] text-[#00000099] flex justify-center items-center font-bold"> 4X-Large</div>
                    

                </div>
            </div>
        </div>
    )
}