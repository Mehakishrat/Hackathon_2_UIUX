"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addition, remove, subraction } from "../Redux/features/cartSlice";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


interface CartItem {
  name: string;
  image: string | StaticImport;
  title: string;
  discount: number;
  price: number;
  id: string;
  uuid: number;
  color?: string;
  size?: string;
  qty: number;
}

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state: { cart: CartItem[] }) => state.cart);

  const handleremove = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <>
      {/* start cart */}
      <div className="w-full sm:w-full flex flex-col md:flex-row justify-center items-start gap-6">
        {cartArray.length <= 0 && (
          <div className="flex justify-center items-center  w-full h-[50vh;]">
            <Link href={"/casual"}>
              <Button className="rounded-[16px]">Shop Now</Button>
            </Link>
          </div>
        )}
        {cartArray.length >= 1 && (
          <div className="w-full lg:w-[700px] space-y-4 border rounded-[20px] pt-2">
            {cartArray.map((data: CartItem) => {
              return (
                <div className="flex justify-between border-b px-3 pb-3" key={data.id}>
                  <div className="flex">
                    <div>
                      <Image src={data.image} alt={data.title} width={800} height={800}></Image>
                    </div>
                    <div className="ml-3">
                      <h1 className="font-bold text-xs md:text-xl">{data.name}</h1>
                      <p className="text-xs text-gray-500">Size: {data.size}</p>
                      <p className="text-xs text-gray-500">Color: {data.color}</p>
                      <p className="font-bold">
                        $
                        {data.discount > 0
                          ? (data.price - (data.price * data.discount) / 100) * data.qty
                          : data.price * data.qty}
                      </p>
                    </div>
                  </div>
                  <div className="relative ">
                    <button onClick={() => handleremove(data.uuid)}>
                      <MdDelete className="absolute top-0 text-xl right-0 sm:right-3 text-red-500" />
                    </button>
                    <div className="md:w-[100px] h-[40px] flex justify-center  lg:justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 absolute bottom-0 right-0 ">
                      <button onClick={() => dispatch(subraction(data))}>
                        <Minus />
                      </button>
                      {data.qty}
                      <button onClick={() => dispatch(addition(data))}>
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cartpage;
