import React from "react";
import Image from "next/image";

const socialIcons = {
  instagram: {
    name: "Instagram",
    icon: "M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm5.25-.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
    href: "https://www.instagram.com/teapresso.uk?igsh=cHJwZXFpYmNscjQ1"
  },
  tiktok: {
    name: "TikTok",
    icon: "M9 2h3v2.5c.61.55 1.33.93 2.17 1.13A5 5 0 0 0 17 6.5v3a7.5 7.5 0 0 1-5-1.5V16a5 5 0 1 1-5-5v3a2 2 0 1 0 2-2V2Z",
    href: "https://www.tiktok.com/@teapresso.uk?_r=1&_t=ZN-94wlxI9g1aQ"
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a2321] text-zinc-100 pt-12 pb-4 px-4 pl-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Logo & Social */}
        <div className="flex flex-col items-start md:items-start gap-6 md:w-1/3">
          <div className="flex items-center gap-3">
            {/* <div className="relative w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center overflow-hidden mr-2 flex-shrink-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/ins-logo.jpg"
                  alt="Paris Baguette Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div> */}

            <div>
              <div className="text-2xl font-fluffy font-bold tracking-widest text-grey-100">Teapresso 野萃</div>
              <div className="text-sm text-grey-300 tracking-widest mt-2 italic">Not Just Tea, Not Just Coffee, Teapresso.</div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            {/* Instagram */}
            <a key={socialIcons.instagram.name} href={socialIcons.instagram.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-zinc-100">
                <path d={socialIcons.instagram.icon} fill="currentColor" />
              </svg>
            </a>
            {/* TikTok */}
            <a key={socialIcons.tiktok.name} href={socialIcons.tiktok.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img
                src="/tiktok.svg"
                alt="TikTok"
                className="w-6 h-6 transition mt-1"
              />
            </a>
          </div>
        </div>
        {/* Links */}
        <div className="flex-1 flex flex-col items-start gap-y-8 md:flex-row md:justify-center md:items-start md:gap-10 mt-2">
          <div>
            <div className="text-lg font-bold text-zinc-300 mb-6">QUICK LINKS</div>
            <div className="flex flex-col text-zinc-300 gap-1">
              <a href="/" className="text-zinc-400 mb-2">HOME</a>
              <a href="/locations" className="text-zinc-400 mb-2">OUR LOCATIONS</a>
              <a href="/click-collect" className="text-zinc-400 mb-2">CLICK & COLLECT</a>
              <a href="/franchising" className="text-zinc-400 mb-2">FRANCHISING</a>
              {/* <a href="/offers" className="text-zinc-400 mb-8">OFFERS & PROMOTIONS</a> */}
            </div>
          </div>

          <div>
            <div className="text-lg font-bold text-zinc-300 mb-6">COMPANY</div>
            <div className="flex flex-col gap-1">
              <a href="/about" className="text-zinc-400 mb-2">ABOUT US</a>
              <a href="/contact" className="text-zinc-400 mb-2">CONTACT US</a>
              <a href="/privacy" className="text-zinc-400 mb-2">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-600 mt-10 mb-2" />
      <div className="text-center text-zinc-300 text-xs py-3">
        Copyright © 2025 Teapresso - All Rights Reserved.
      </div>
    </footer>
  );
} 