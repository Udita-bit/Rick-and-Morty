import React from 'react';

export default function LandingUI() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      
      <div className="w-3/4 h-full">
        <img
          src="/Morty.jpg"
          alt="Rick and Morty"
          className="h-full w-full object-cover"
        />
      </div>

      
      <div className="w-1/2 flex items-center justify-center bg-black">
        <div className="max-w-md p-8 text-center">
          <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            Get Schwifty in the Multiverse!
          </h3>
          <p className="mt-4 text-gray-600">
            Join mad scientist Rick and his anxious grandson Morty as they warp through dimensions,
            dodge aliens, and break every rule of reality. Sci-fi, chaos, and dark humor collide in this 
            animated cult phenomenon.
          </p>
          <button className="mt-6 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Know them
          </button>
        </div>
      </div>
    </div>
  );
}
