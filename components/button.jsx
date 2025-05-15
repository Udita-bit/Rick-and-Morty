"use client"

export default function Button(){
    const navigateToPage=() =>{
                window.location.href='https://rickandmorty.fandom.com/wiki/Rickipedia';
            };
    return(
        <div>
            <button onClick={navigateToPage}
            className=" mt-6 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Know them
          </button>

        </div>
    )
}

