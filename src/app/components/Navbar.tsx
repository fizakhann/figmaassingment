import Image from "next/image"
import whit from "@/app/assets/whit.png";
export default function Navbar(){
    return (
        <>
        <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex flex-row justify-between items-center">
            <div className="w-[191px] h-[34px] text-white">
               <Image src={whit} alt="logo"/>
            </div>
            <div className="w-[737.5px] h-[63px] flex justify-between items-center">
            <div className="w-[549px] h-[23px]">
                <ul className="flex flex-row justify-between text-white">
                    <li className="hover:text-yellow-100">Product</li>
                    <li className="hover:text-yellow-100">Solution</li>
                    <li className="hover:text-yellow-100"> Resurses</li>
                    <li className="hover:text-yellow-100">Princing</li>
                </ul>
            </div>
            <div className="w-[126px] h-[60px]">
              <button className="py-[16px] px-[40px] rounded-lg bg-[#FFE492] ">Login</button>
            </div>
            </div>
        </div>
        </>
    )
}
