import Image from "next/image"

import image from"@/app/assets/image.png";


export default function Sponsors(){
    return(
        <>
        <div className="w-[1922px] h-[538px]  py-[140px]px-[220px] gap-[100px] bg-white flex flex-col justify-center items-center">
      <h1 className="w-[1482px] h-[87px] font-bold text-7xl l text-center leading-[87.14px] tracking-[0.02em] justify center">Our sponsors</h1>
       <div className="w-[1482px] h-[71px]">
        <Image src={image} alt="sponsors" className="w-[1428px] h-[71px] mt-12 justify-between-"/> 
        </div>
        </div>
        </>
    )
}
