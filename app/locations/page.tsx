"use client";
import React from "react";
import { SlideUp, FadeIn, SlideLeft, SlideRight } from "../_components/ScrollAnimation";

const UK_LOCATIONS = [
  {
    name: "Manchester - The Arthouse",
    address: "149-153 Oxford Rd, Manchester M1 7EE",
    hours: "Mon-Sun: 11:00 - 22:00",
    phone: "+44 161 547 1023",
    coordinates: "53.4808,-2.2426", // Manchester coordinates
    mapUrl: "https://maps.google.com/?q=43+George+St,+Manchester+M1+4AB,+UK"
  },
  {
    name: "Leeds - 61 The Headrow",
    address: "61 The Headrow, Leeds LS1 6LR",
    hours: "Mon-Sun: 11:00 - 22:00",
    phone: "+44 161 547 1023",
    coordinates: "53.8008,-1.5491", // Leeds coordinates
    mapUrl: "https://maps.google.com/?q=61+The+Headrow,+Leeds+LS1+6LR,+UK"
  },
  {
    name: "Glasgow - 100 Byres Rd",
    address: "100 Byres Rd, Glasgow G12 8TA",
    hours: "Mon-Sun: 11:00 - 22:00",
    phone: "+44 161 547 1023",
    coordinates: "55.8642,-4.2518", // Glasgow coordinates
    mapUrl: "https://maps.google.com/?q=100+Byres+Rd,+Glasgow+G12+8TA,+UK"
  }
];

const CA_LOCATIONS = [
  {
    name: "GTA",
    address: "505 Hwy 7 #16, Thornhill, ON L3T 7V6 (Summer 2026)",
    hours: "Summer 2026",
    // phone: "+44 161 547 1023",
    // coordinates: "43.6510,-79.3470", // Toronto coordinates
    mapUrl: "https://maps.google.com/?q=505+Hwy+7+%2316,+Thornhill,+ON+L3T+7V6,+CA"
  },
  {
    name: "Vancouver",
    address: "Coming Soon",
    hours: "Coming soon",
    // phone: "+44 161 547 1023",
    // coordinates: "49.2827,-123.1207", // Vancouver coordinates
    // mapUrl: "https://maps.google.com/?q=100+Robson+St,+Vancouver+V6B+0N9,+CA"
  }
];

export default function LocationsPage() {
  const openDirections = (mapUrl: string) => {
    // 检测设备类型，移动设备使用原生地图应用
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // 移动设备：尝试打开原生地图应用
      window.open(mapUrl, '_blank');
    } else {
      // 桌面设备：打开 Google Maps
      window.open(mapUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8ED]">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Our Locations
            </h1>
          </FadeIn>
          <SlideUp delay={300}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Find your nearest Teapresso location and experience the perfect blend of tradition and innovation.
            </p>
          </SlideUp>
        </div>
      </div>

      {/* Locations Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* UK Locations */}
        <div className="mb-16">
          <SlideUp>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-8 text-center">
              United Kingdom
            </h2>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UK_LOCATIONS.map((loc, index) => (
              <SlideUp key={index} delay={index * 200}>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[#2e3f3a] mb-2">
                      {loc.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-12 bg-[#2e3f3a] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{loc.hours}</span>
                  </div>
                  
                  {/* <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{loc.phone}</span>
                  </div> */}
                </div>
                
                <button 
                  onClick={() => openDirections(loc.mapUrl)}
                  className="w-full mt-6 bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center hover:cursor-pointer"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  Get Directions
                </button>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Canada Locations */}
        <div className="mb-16">
          <SlideUp>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-8 text-center">
              Canada
            </h2>
          </SlideUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CA_LOCATIONS.map((loc, index) => (
              <SlideUp key={index} delay={index * 200} className="h-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2e3f3a] mb-2">
                        {loc.name}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-[#2e3f3a] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center text-sm text-gray-500 min-h-5">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{loc.hours ?? "Coming soon"}</span>
                    </div>

                    {/* <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{loc.phone}</span>
                    </div> */}
                  </div>

                  {loc.mapUrl ? (
                    <button
                      onClick={() => openDirections(loc.mapUrl)}
                      className="w-full mt-6 bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center hover:cursor-pointer"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                      </svg>
                      Get Directions
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full mt-6 bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <SlideUp className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
            USA (Coming Soon)
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're excited to announce our expansion into the US! Stay tuned for updates on our new locations.
          </p>
        </SlideUp>
      </div>
    </div>
  );
} 