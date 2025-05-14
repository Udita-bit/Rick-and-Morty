import Link from "next/link";
import { NAV_LINKS } from "../constants";

export default function NavBarUI (){
    return(
        
        <nav className="p-4 pr-4 flex  max-container justify-between
        padding-container relative z-30 py-5  bg-black text-green-600
        shadow-xl ">
            
            <Link href="/">
            <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent">
            SchwiftyAPI
           </p>
           </Link>
           <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link)=>(
                    <Link href={link.href} key={link.key} className="flexCenter cursor-pointer text-white ml-10 hover:font-bold hover:border-b border-white text-xl" >
                    {link.label}
                    </Link>
                    ))}
            </ul>
        </nav>
        
    )
} 