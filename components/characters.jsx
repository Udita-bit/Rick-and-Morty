

"use client";
import Link from "next/link";
import { CARDS } from "../constants/index";
import { useRef } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";


export default function Character() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div className="pt-5 relative w-full max-w-[100vw]  p-4">
      {/* Circular Scroll Indicator */}
      <svg
        className="absolute -top-12 left-4 rotate-[-90deg] z-10"
        width="80"
        height="80"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-gray-300"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="stroke-blue-600"
          strokeWidth="10"
          fill="none"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      {/* Scrollable Character Cards */}
      <motion.section
        ref={ref}
        style={{ maskImage }}
        className="flex overflow-x-auto gap-6 p-4 md:p-8"
      >
        {CARDS.map((char, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex max-w-md p-6 gap-4 rounded-2xl bg-gray-100"
          >
            <Image
              src={char.image}
              height={150}
              width={200}
              alt={char.name}
              className="rounded-md"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-sm font-bold uppercase tracking-wide text-black mb-1">
                {char.name}
              </h3>
              <p className="text-sm mb-2">{char.description}</p>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                {char.traits.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  );
}

function useScrollOverflowMask(scrollXProgress) {
  const opaque = "#000";
  const transparent = "#0000";
  const leftInset = "20%";
  const rightInset = "80%";

  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} 0%, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} 0%, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} 100%, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

{CARDS.map((link)=>(
<Link href={link.href} key={link.key} className=" mb-6 flexCenter cursor-pointer text-white ml-10 hover:font-bold hover:border-b border-white text-xl" >
{link.label}
</Link>
))}

