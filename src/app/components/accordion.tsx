import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { GiSettingsKnobs } from "react-icons/gi";
  
  export function AccordionDemo() {
    return (
        <div className=" wrapper p-5">
            <div className="flex justify-between items-center">
            <h1 className="font-bold">filter</h1>
            <GiSettingsKnobs />
            </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
          <p> Yes. It&apos;s animated by default, but you can disable it if you prefer.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hoodie</AccordionTrigger>
          <AccordionContent>
          <p>Yes. It&apos;s animated by default, but you can disable it if you prefer.</p>

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Jeans</AccordionTrigger>
          <AccordionContent>
          <p>Yes. It&apos;s animated by default, but you can disable it if you prefer.</p>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      </div>
    )
  }
  