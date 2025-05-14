import Link from "next/link";
import { NAV_LINKS } from "../constants/index";
export default function FooterUI(){
  return (
    <div className="border-b-black bg-black ">
      
        <ul className="sm:flex-1/2 text-center space-x-2 text-white h-full gap-12 xl:flex bg-black p-12 justify-evenly items-center ">
                     {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className="flexCenter cursor-pointer text-white ml-10 hover:font-bold hover:border-b border-white text-xl" >
                    {link.label}
                    </Link>
                    ))}
         </ul>
        
        <div className=" p-4 border-t-2 bg-green-600">
          <p className="text-center">All Copyrights Resrved</p>
        </div>
      
    </div>
  )
}