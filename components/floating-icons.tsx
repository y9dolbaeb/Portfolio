"use client";

import Image from "next/image";

// Floating 3D icons that appear on the sides of the page
export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left side icons */}
      <div className="bg-black absolute left-4 lg:left-8 xl:left-16 top-1/4 animate-float opacity-100 hover:opacity-100 transition-opacity">
        <Image
          src="/images/figma.png"
          alt="Figma"
          width={80}
          height={80}
          className="rounded-2xl shadow-2xl w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>

      <div className="absolute left-8 lg:left-16 xl:left-24 top-1/2 animate-float-reverse opacity-60  transition-opacity">
        <Image
          src="/images/ai-icon.png"
          alt="Illustrator"
          width={80}
          height={80}
          className="rounded-2xl shadow-2xl w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
        />
      </div>

      <div
        className="absolute left-4 lg:left-12 xl:left-20 bottom-1/4 animate-float-slow opacity-40 hover:opacity-100 transition-opacity"
        style={{ animationDelay: "2s" }}
      >
        <Image
          src="/images/ps-icon.png"
          alt="Photoshop"
          width={60}
          height={60}
          className="rounded-2xl shadow-2xl w-9 h-9 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
        />
      </div>

      {/* Right side icons */}
      <div
        className="absolute right-4 lg:right-8 xl:right-16 top-1/3 animate-float-reverse opacity-60 hover:opacity-100 transition-opacity"
        style={{ animationDelay: "0.5s" }}
      >
        <Image
          src="/images/ps-icon.png"
          alt="zalupa"
          width={75}
          height={75}
          className="rounded-2xl shadow-2xl w-11 h-11 md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px]"
        />
      </div>

      <div
        className="absolute right-8 lg:right-16 xl:right-28 top-2/3 animate-float opacity-50 hover:opacity-100 transition-opacity"
        style={{ animationDelay: "1.5s" }}
      >
        <Image
          src="/images/ai-icon.png"
          alt="Illustrator"
          width={65}
          height={65}
          className="rounded-2xl shadow-2xl w-10 h-10 md:w-13 md:h-13 lg:w-[65px] lg:h-[65px]"
        />
      </div>

      <div
        className="bg-black absolute right-4 lg:right-10 xl:right-20 bottom-1/5 animate-float-slow opacity-40 hover:opacity-100 transition-opacity"
        style={{ animationDelay: "2.5s" }}
      >
        <Image
          src="/images/figma.png"
          alt="Figma"
          width={55}
          height={55}
          className="rounded-2xl shadow-2xl w-8 h-8 md:w-11 md:h-11 lg:w-[55px] lg:h-[55px]"
        />
      </div>
    </div>
  );
}
