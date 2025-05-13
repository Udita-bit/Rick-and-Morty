import Link from "next/link";

export default function FooterUI(){
  return (
    <div className="border-b-black bg-black ">
      
        <ul className=" h-full gap-12 xl:flex bg-black p-12 justify-center">
                    <Link href="/about">
                    <li className="ml-10  hover:border-b border-white text-xl
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
        
        <div className="border-t-2 bg-green-600">
          <p className="text-center">All Copyrights Resrved</p>
        </div>
      
    </div>
  )
}