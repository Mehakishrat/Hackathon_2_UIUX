import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { FaAngleDown } from "react-icons/fa6";
  import { Button } from "@/components/ui/button";

  
  export function Dresstyle() {
    return (
        <div className=" wrapper p-5">
            <span className="flex justify-between items-center">
            <h1 className="font-bold mt-6 mb-4 text-xl">Dress Style</h1>
            <FaAngleDown />
            </span>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
           <p> Yes. It&apos;s animated by default, but you can disable it if you prefer.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
           <p> Yes. It&apos;s animated by default, but you can disable it if you prefer.</p>
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
      <div className="flex items-center justify-center mt-4">
      <Button className=" bg-black w-[247px] h-[48px] rounded-full text-white"> Apply Filter</Button>
      </div>
      </div>
    )
  }
  