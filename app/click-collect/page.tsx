import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ImageCarousel from "../_components/ImageCarousel";
import VideoPlayer from "../_components/VideoPlayer";
import StartOrderingForm from "../_components/StartOrderingForm";
import { SlideUp, FadeIn, SlideLeft, SlideRight } from "../_components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Click & Collect - Order Online & Pick Up",
  description: "Experience the convenience of Click & Collect at Teapresso. Order your favorite tea and coffee drinks online and collect them at your convenience.",
  keywords: ["click and collect", "online ordering", "pickup", "tea delivery", "coffee ordering", "Teapresso"],
  openGraph: {
    title: "Click & Collect - Order Online & Pick Up",
    description: "Order your favorite Teapresso drinks online and collect them at your convenience.",
    images: ["/click_1.jpg"],
  },
};

export default function ClickCollectPage() {
  return (
    <div className="min-h-screen bg-[#FAF8ED]">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Click & Collect
            </h1>
          </FadeIn>
          <SlideUp delay={300}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Order your favorite drinks and treats online, then collect them at your convenience.
            </p>
          </SlideUp>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-16">
        {/* Image Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <SlideLeft>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <Image
                src="/click_1.jpg"
                alt="Teapresso Click & Collect Experience"
                width={600}
                height={400}
                className="w-full h-48 md:h-56 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Freshly Crafted for You
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Every order is prepared fresh to order, ensuring you get the perfect taste and quality every time.
                </p>
              </div>
            </div>
          </SlideLeft>

          <SlideRight delay={200}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <Image
                src="/click_2.jpg"
                alt="Teapresso Menu Selection"
                width={600}
                height={400}
                className="w-full h-48 md:h-56 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Extensive Menu
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  From classic milk teas to specialty coffees, explore our full menu of premium beverages and treats.
                </p>
              </div>
            </div>
          </SlideRight>

          <SlideLeft delay={400}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <Image
                src="/click_3.jpg"
                alt="Teapresso Collection Point"
                width={600}
                height={400}
                className="w-full h-48 md:h-56 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Convenient Collection
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Skip the queue and collect your order at your convenience. Perfect for busy schedules.
                </p>
              </div>
            </div>
          </SlideLeft>
        </div>

        {/* Video and Menu Combined Section */}
        <section className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            {/* Left: Video Section */}
            <SlideUp>
              <div className="order-1">
                <div className="text-center lg:text-left mb-8 mt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4 text-center">
                    Tea Making Process
                  </h2>
                  {/* <p className="text-gray-600 text-lg leading-relaxed">
                    Let's take a look at the process of making a cup of tea
                  </p> */}
                </div>
                
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
                  <div className="relative max-w-xl mx-auto lg:max-w-none p-4 lg:p-6">
                    <VideoPlayer
                      src="/vid.mp4"
                      className="w-full h-full rounded-lg md:h-[580px]"
                    />
                  </div>

                  {/* Video Description */}
                  <div className="p-6">
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-gray-600 text-sm lg:text-base">
                          From ordering to collection, discover the seamless Teapresso experience
                        </p>
                      </div>
                      <a
                        href="#start-ordering"
                        className="inline-flex items-center justify-center bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span>Order Now</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>

            {/* Right: Menu Section */}
            <SlideUp delay={200}>
              <div className="order-2">
                <div className="text-center lg:text-left mb-8 md:mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4 mt-8 text-center">
                    Our Featured Menu
                  </h2>
                  {/* <p className="text-gray-600 text-lg leading-relaxed">
                    Discover our handcrafted beverages available for Click & Collect
                  </p> */}
                </div>
                <ImageCarousel />
              </div>
            </SlideUp>
          </div>
        </section>

        {/* CTA Section */}
        <SlideUp className="text-center mt-16 md:mt-28">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience the convenience of Click & Collect and enjoy your favorite Teapresso drinks without the wait.
          </p>
          <StartOrderingForm />
        </SlideUp>
      </div>
    </div>
  );
} 