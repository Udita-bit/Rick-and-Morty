import Image from "next/image"
export default function Camp(){
    return(
        <div className="flex">
        <div className="border-1 border-b-amber-50 2xl:max-container relative flex flex=col py-10
        lg:mb-10 lg:py-15 xl:mb-20">
            <h1 className="p-10 text-4xl gap-2 font-bold font-serif" >
            From Earth C-137 to Froopyland — Explore It All Without Leaving Your Couch!</h1>
            <div className="pr-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 relative aspect-[2/1]">
            <Image 
                src="/ram-featured.avif" alt="all" height={200} width={500}/>
            </div>
            
            </div>
            </div>
        
    )
}