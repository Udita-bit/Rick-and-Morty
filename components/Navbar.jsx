import Link from "next/link";

import About from "/components/About.jsx"

export default function NavBarUI (){
    return(
        
        <nav className=" flex  max-container justify-between
        padding-container relative z-30 py-5  bg-black text-green-600
        shadow-xl ">
            
            <Link href="/">
            <p class="text-3xl font-bold bg-gradient-to-r from-green-600 to-white bg-clip-text text-transparent">
            SchwiftyAPI
           </p>
           </Link>
           
           <div>
            
                <ul className="hidden h-full gap-12 lg:flex">
                    <Link href="/about">
                    <li className="ml-10 uppercase hover:border-b border-white text-xl
                    onclick={handle}"> 
                        Why Us
                    </li>
                    </Link>
                    

                    <Link href="/Favourites">
                    <li className="ml-10 uppercase hover:border-b border-white text-xl">
                        Favourite</li>
                    </Link>

                    <Link href="/help">
                    <li className="ml-10 uppercase hover:border-b border-white text-xl">
                        Help</li>
                    </Link>

                </ul>
           </div> 
        </nav>
        
    )
}