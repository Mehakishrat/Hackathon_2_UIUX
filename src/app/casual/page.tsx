import React from "react";
import Casual from "../components/3page";

import { AccordionDemo } from "../components/accordion";
import { SliderDemo } from "../components/slider";
import { CheckboxDemo } from "../components/checkbox";
import Size from "../components/size";
import { Dresstyle } from "../components/dressstyle";


export default function casual() {
    return (
        <main className="flex justify-center items-center p-9 space-x-6">
            {/* left */}
            <div className="w-[295px] h-[1250px] border rounded-[16px]">
            <AccordionDemo/>
            <SliderDemo/>
            <CheckboxDemo/>
            <Size/>
            <Dresstyle/>


            </div>
            {/* right */}
            <div className="w-[900px] h-[1250px] ">
                <Casual/>
            </div>
        </main>
    )}