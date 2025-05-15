import React from 'react';
import Button from './button';

export default function Hero() {
  return (
    <section id="home">
    <div className="flex h-screen w-screen overflow-hidden">
      
      <div className="w-3/4 h-full">
        <img
          src="/Morty.jpg"
          alt="Rick and Morty"
          className="h-full w-full object-cover"
        />
      </div>

      
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="max-w-md p-8 text-center">
          <h3 className="text-sm font-semibold tracking-wide text-green-600 uppercase">
            Get Schwifty in the Multiverse!
          </h3>
          <p className="mt-4 text-gray-600">
            Join mad scientist Rick and his anxious grandson Morty as they warp through dimensions,
            dodge aliens, and break every rule of reality. Sci-fi, chaos, and dark humor collide in this 
            animated cult phenomenon.
          </p>
          <Button/>
        </div>
      </div>
    </div>
    </section>
  );
}
