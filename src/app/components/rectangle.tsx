import React from "react";
import { Playfair_Display, Cinzel, EB_Garamond, Prata, Montserrat } from 'next/font/google';

const playfair = Playfair_Display({subsets:["latin"]})
const Cinze = Cinzel({subsets:["latin"]})
const EBGaramond = EB_Garamond({subsets:["latin"]})
const Prat = Prata({subsets:["latin"],weight:'400'})
const Montserra = Montserrat({subsets:["latin"]})




export default function font() {
    return (
        <div className=" wrapper bg-black w-full h-[60px] flex justify-between items-center px-7 flex-wrap">
          <h1 className= {`${playfair.className} text-white text-2x1 md:text-4xl`}> VERSACE</h1>
          <h1 className={`${Cinze.className} text-white text-2x1 md:text-4xl`}> ZARA </h1>
          <h1 className= {`${EBGaramond .className} text-white text-2x1 md:text-4xl`}> GUCCI</h1>   
          <h1 className= {`${Prat.className} text-white text-2x1 md:text-4xl`}> PRADA</h1>      
          <h1 className= {`${Montserra.className} text-white text-2x1 md:text-4xl`}> Calvin Klein</h1>
           </div>
    )
}
// versace