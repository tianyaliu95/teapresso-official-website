import React from "react";
import Image from "next/image";
import ImageCarousel from "../_components/ImageCarousel";
import { Metadata } from "next";
import { SlideUp, FadeIn, SlideLeft, SlideRight } from "../_components/ScrollAnimation";
import VideoPlayer from "../_components/VideoPlayer";

export const metadata: Metadata = {
  title: "About Us - Our Story & Philosophy",
  description: "Founded in 2024, Teapresso 野萃 is a modern tea & coffee house redefining how the world enjoys tea and coffee. Learn about our journey, philosophy, and commitment to quality.",
  keywords: ["about Teapresso", "tea house story", "modern tea house philosophy", "handcrafted beverages", "tea ritual", "coffee house history"],
  openGraph: {
    title: "About Teapresso 野萃 - Our Story & Philosophy",
    description: "Founded in 2024, Teapresso is a modern tea & coffee house bringing the art of freshly brewed tea and coffee to life.",
    images: ["/home_2.png"],
  },
};


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8ED]">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              About Us
            </h1>
          </FadeIn>
          <SlideUp delay={300}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Redefining how the world enjoys tea and coffee, one freshly extracted cup at a time.
            </p>
          </SlideUp>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Who We Are Section */}
        <div className="mb-20">
          <SlideUp className="max-w-4xl mx-auto">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-[#2e3f3a] mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700 text-center px-4">
              <SlideUp delay={200}>
                <p className="text-base leading-relaxed font-semibold">
                  Founded in 2024, Teapresso is a modern tea and coffee house redefining how the world enjoys tea and coffee, one freshly extracted cup at a time.
                </p>
              </SlideUp>
              <SlideUp delay={400}>
                <p className="text-base leading-relaxed">
                  From vibrant global cities like Manchester, Toronto, and Glasgow to intimate neighbourhood corners, Teapresso brings the art of freshly brewed tea and coffee to life. No matter how far we grow, we remain that "hidden gem" — a cosy, stylish spot where quality and ritual meet, and every cup tells a story.
                </p>
              </SlideUp>
              <SlideUp delay={400}>
                <p className="text-base leading-relaxed">
                  We believe that drinks aren't just about flavour — they're about <strong>feeling</strong>. A cup can offer comfort, spark nostalgia, or create connection. That's why we pour passion into every detail, from the tea leaves we grind to the last sip in your cup.
                </p>
              </SlideUp>
              <SlideUp delay={400}>
                <p className="text-base leading-relaxed italic">
                  At Teapresso, we don't just serve drinks — <strong>we serve experiences worth remembering.</strong>
                </p>
              </SlideUp>

            </div>
          </SlideUp>

        </div>

        {/* What We Do Section with Carousel */}
        <div className="mb-20">
          <SlideUp className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              What We Do
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto px-4">
              Discover our passion for crafting exceptional beverages and creating memorable experiences through our carefully curated menu and warm hospitality.
            </p>
          </SlideUp>

          {/* Image Carousel */}
          <SlideUp delay={300}>
            <ImageCarousel />
          </SlideUp>
        </div>

        <div className="text-center mb-10">
          <a
            href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4"
            target="_blank"
            className="inline-block text-zinc-100 bg-[#2e3f3a] font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>



        <section className="py-8 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Video */}
              <SlideUp>
                {/* Your Everyday Section */}
                <div className="mb-2">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-12">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
                        Your Everyday
                      </h2>
                      <p className="text-base text-gray-700 max-w-3xl mx-auto">
                        Though our signature freshly brewed milk teas are at the heart of what we do, Teapresso finds the perfect balance between a modern tea house and a neighbourhood café.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-rows-3 gap-8">
                      {/* Service Card 1 */}
                      <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                        <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h10l-1 14a2 2 0 01-2 2H10a2 2 0 01-2-2L7 6z" />
                          </svg>

                        </div>
                        <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                          Handcrafted Beverages
                        </h3>
                        <p className="text-gray-700">
                          Serving handcrafted beverages alongside seasonal treats made with care, creativity, and only the finest ingredients.
                        </p>
                      </div>

                      {/* Service Card 2 */}
                      <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                        <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                          Perfect Balance
                        </h3>
                        <p className="text-gray-700">
                          Whether it's a bold matcha, a floral oolong, or a smooth espresso, every drink is designed to complement your day.
                        </p>
                      </div>

                      {/* Service Card 3 */}
                      <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                        <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                          Daily Ritual
                        </h3>
                        <p className="text-gray-700">
                          From morning pick-me-ups to slow afternoon moments, we're here to make every moment special.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>

              {/* Right: Image */}
              <SlideUp delay={200}><div className="order-1 lg:order-1">
                <VideoPlayer
                  src="/about_us_压缩.mp4"
                  className="w-full h-auto shadow-lg rounded-lg"
                />
              </div>


              </SlideUp>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2e3f3a] to-[#2e3f3a]/90 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience Teapresso Today
            </h3>
            <p className="text-base text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit one of our locations and discover why we're becoming the favorite spot for tea and coffee lovers everywhere.
            </p>
            <a
              href="/locations"
              className="inline-block bg-white text-[#2e3f3a] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              View Our Locations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 