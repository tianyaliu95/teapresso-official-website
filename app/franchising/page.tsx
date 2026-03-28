import React from "react";
import Image from "next/image";
import ContactForm from "../_components/ContactForm";
import { FadeIn, SlideUp, SlideLeft, SlideRight } from "../_components/ScrollAnimation";
import { Metadata } from "next";
import VideoPlayer from "../_components/VideoPlayer";

export const metadata: Metadata = {
  title: "Franchising - Teapresso",
  description: "Join Teapresso's franchise family. Fast-growing premium tea and coffee brand with proven system and comprehensive support.",
  keywords: ["tea house franchise", "franchise opportunity", "business investment", "tea franchise UK", "coffee franchise", "franchise support"],
  openGraph: {
    title: "Franchising - Teapresso",
    description: "Join Teapresso's franchise family. Fast-growing premium tea and coffee brand with proven system and comprehensive support.",
    images: ["/franchise.png"],
  },
};

export default function FranchisingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Franchising
            </h1>
          </FadeIn>
          <SlideUp delay={200}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Be part of something bold — join Teapresso and lead the new wave of milk tea and specialty coffee culture!
            </p>
          </SlideUp>
        </div>
        <SlideUp delay={300}>
          <a
            href="#contact-form"
            className="inline-block mt-8 bg-white text-[#2e3f3a] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 text-lg"
          >
            Inquire to be a franchisee
          </a>
        </SlideUp>
      </div>

      {/* Opening Questions Section */}
      <section className="py-20 md:py-32 bg-[#FAF8ED] text-[#2e3f3a]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SlideRight delay={200}>
              <div className="relative">
                {/* Image Collage */}
                <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
                  {/* Large main image */}
                  <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/Teapresso-59.jpg"
                      alt="Teapresso franchise cafe"
                      width={600}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="/home_3.png"
                      alt="Teapresso atmosphere"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#2e3f3a]/10 to-transparent"></div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="/Teapresso-64.jpg"
                      alt="Premium beverages"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#2e3f3a]/10 to-transparent"></div>
                  </div>


                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2e3f3a]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2e3f3a]/5 rounded-full blur-2xl"></div>
              </div>
            </SlideRight>
            <SlideLeft>
              <div className="space-y-8 px-4 lg:px-0">
                <div className="space-y-6 ">
                  <h2 className="text-xl md:text-xl lg:text-3xl font-black text-[#2e3f3a] leading-tight tracking-tight">
                    Do you have an entrepreneurial spirit and a passion for redefining how people experience tea and coffee?
                  </h2>
                  <h3 className="text-base md:text-xl lg:text-xl font-bold text-[#2e3f3a]/80 leading-relaxed">
                    Or are you an experienced operator looking to bring a fresh, modern beverage concept into your growing portfolio?
                  </h3>
                  <h3 className="text-lg md:text-xl lg:text-xl font-extrabold text-[#2e3f3a] leading-tight italic">
                    If so, your next opportunity starts here...
                  </h3>
                </div>

                <div className="h-px bg-gradient-to-r from-[#2e3f3a]/20 via-[#2e3f3a]/60 to-[#2e3f3a]/20"></div>

                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    We're a fast-growing premium tea and coffee brand, delighting guests with freshly brewed milk teas, specialty coffees, and handcrafted drinks — paired with light bites and seasonal treats — now proudly serving customers across the UK and beyond.
                  </p>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    No matter how far we expand, we remain that <em className="text-[#2e3f3a] font-semibold">"great little spot"</em> where quality, comfort, and culture blend seamlessly — the kind of place people return to, cup after cup.
                  </p>
                </div>
              </div>
            </SlideLeft>

          </div>
        </div>
      </section>

      {/* Why Teapresso Section */}
      <section className="py-12 md:py-32 bg-[#2e3f3a] text-[#FAF8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
              Why Teapresso?
            </h2>
          </SlideUp>

          {/* Work with a Proven System */}
          <div className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Mobile: Image first, Desktop: Image left */}
              <SlideLeft>
                <div className="relative order-1 lg:order-1">
                  <Image
                    src="/Teapresso-34.jpg"
                    alt="Teapresso tea brewing process"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </SlideLeft>
              <SlideRight delay={200}>
                <div className="px-4 lg:px-0 order-2 lg:order-2">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    Work with a Proven System
                  </h3>
                  <div className="space-y-6 text-base leading-relaxed">
                    <p>
                      Launching a new business from the ground up can be overwhelming — especially in the food and beverage industry, where operations, quality control, and customer experience all need to align perfectly.
                    </p>
                    <p>
                      When you open a <strong>Teapresso</strong> franchise, you're not starting from scratch. You're stepping into a well-established, fully supported system — with a clear roadmap, streamlined processes, and expert guidance every step of the way.
                    </p>
                    <p>
                      We've done the hard work so you can focus on what matters: delivering exceptional milk tea and coffee experiences to your community.
                    </p>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>

          {/* How We Support You */}
          <div className="mb-12 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Mobile: Image first, Desktop: Text left */}
              <SlideRight delay={200}>
                <div className="relative order-1 lg:order-2">
                  <Image
                    src="/Teapresso-60.jpg"
                    alt="Teapresso support team"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </SlideRight>
              <SlideLeft>
                <div className="px-4 lg:px-0 order-2 lg:order-1">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    How We Support You
                  </h3>
                  <div className="space-y-6 text-base leading-relaxed">
                    <p>
                      As you gear up for your grand opening, our Operations and Marketing teams will be by your side to make sure everything is ready.
                    </p>
                    <p>
                      From final in-store training to tailored local marketing plans, we'll support you through every detail — ensuring you launch with confidence and make a strong first impression in your community.
                    </p>
                  </div>
                </div>
              </SlideLeft>
            </div>
          </div>

          {/* Flexibility That Fits Your Life */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              {/* Mobile: Image first, Desktop: Image left */}
              <SlideLeft>
                <div className="relative order-1 lg:order-1">
                  <Image
                    src="/click_1.jpg"
                    alt="Teapresso flexibility"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </SlideLeft>
              <SlideRight delay={200}>
                <div className="px-4 lg:px-0 order-2 lg:order-2">
                  <h3 className="text-xl md:text-3xl font-bold mb-6">
                    Flexibility That Fits Your Life
                  </h3>
                  <div className="space-y-6 text-base leading-relaxed">
                    <p>
                      Dreaming of owning a café without sacrificing work-life balance? With a Teapresso franchise, you get the freedom to shape your own schedule.
                    </p>
                    <p>
                      Once your team is fully trained and your store is running smoothly, you can step back with confidence — knowing your business continues to brew success, cup after cup.
                    </p>
                    <p>
                      Whether it's premium milk tea, artisan coffee, or innovative seasonal drinks, Teapresso keeps customers coming back.
                    </p>
                    <p className="font-semibold text-[#FAF8ED]">
                      Franchise with us and start running a business that works for you.
                    </p>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Details Section */}
      <section className="py-20 md:py-32 bg-[#FAF8ED] text-[#2e3f3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f3a] mb-16 text-center">
              Franchise Details
            </h2>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <SlideUp delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-4 uppercase">
                  1. Type of Operation
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  <strong>Fast casual beverage concept</strong>, specialising in freshly brewed <strong>milk teas</strong> and <strong>specialty coffees</strong>, prepared using single-cup extraction technology for maximum freshness and flavour. Teapresso offers a streamlined, high-efficiency model focused solely on premium drinks — designed for <strong>dine-in, takeaway, and delivery</strong> in compact, modern spaces.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={150}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-4 uppercase">
                  2. Number of Employees
                </h3>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Full time and part time employees.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                    2-4 Staff on shift
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-4 uppercase">
                  3. Project Costs
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Varies between USD150,000 - USD250,000 depending on size, locations and other factors.
                </p>
              </div>
            </SlideUp>

            <SlideUp delay={450}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-4 uppercase">
                  4. Ongoing Fees
                </h3>
                <div className="flex-grow">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong>Royalties:</strong> 5%
                  </p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Site Guidelines Section */}
      <section className="py-16 md:py-32 bg-[#2e3f3a] text-[#FAF8ED]">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
            <SlideLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#FAF8ED] mb-6">
                  Site Guidelines
                </h2>
                <div className="space-y-6 text-[#FAF8ED] text-base md:text-lg leading-relaxed mb-8">
                  <p>
                    We seek high-visibility, high-footfall locations that align with Teapresso's premium and modern brand identity.
                  </p>
                  <p><strong>Ideal site types include:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>In-line or end-cap retail units</li>
                    <li>Compact spaces in shopping centres, university districts, transit hubs, or commercial zones</li>
                    <li>Standard in-line development modules with strong visibility and pedestrian access</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8ED] rounded-2xl p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2e3f3a] mb-6">SITE CRITERIA</h3>
                  <ul className="space-y-4 text-[#2e3f3a]">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#2e3f3a] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span><strong>Minimum Size:</strong> 500 sq.ft</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#2e3f3a] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span><strong>Recommended Size:</strong> 800 sq.ft</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#2e3f3a] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span><strong>Outdoor Patio:</strong> Preferred</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#2e3f3a] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      <span>High pedestrian traffic and strong daytime population essential</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FAF8ED] text-[#2e3f3a] rounded-2xl p-8 mt-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">SITE SELECTION</h3>
                  <p className="text-[#2e3f3a]">
                    We have a team to help you find location and negotiates sites that protect our interests.
                  </p>
                </div>
              </div>
            </SlideLeft>
            <SlideRight delay={200}>
              <div className="relative hidden lg:block">
                <Image
                  src="/Teapresso-57.jpg"
                  alt="Teapresso store location"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-32 bg-[#FAF8ED] text-[#2e3f3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-[#2e3f3a] mb-6">
                OUR PROCESS
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                Franchise Process
              </h3>
            </div>
          </SlideUp>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#2e3f3a]/20 h-full hidden lg:block"></div>

            <div className="space-y-10 lg:space-y-20">
              {[
                {
                  step: "01",
                  title: "Application",
                  description: "Submit your application to us for review by our franchise team.",
                  image: "/process_1.webp"
                },
                {
                  step: "02",
                  title: "Interview",
                  description: "Meet with members of our corporate franchise team. We'll discuss experience and goals.",
                  image: "/process_2.webp"
                },
                {
                  step: "03",
                  title: "Approval",
                  description: "Congratulations! You've been approved to become a franchise owner of Teapresso!",
                  image: "/process_3.webp"
                },
                {
                  step: "04",
                  title: "Grand Opening",
                  description: (
                    <>
                      It's finally here — opening day! You're now an official <strong>Teapresso franchise owner</strong>, and your store is ready to serve its very first customers. The aroma of freshly brewed milk tea and coffee fills the air, your team is trained and prepped, and your doors are open to the community. Let the journey begin — one perfectly brewed cup at a time.
                    </>
                  ),
                  image: "/franchise.png"
                }
              ].map((process, index) => (
                <div key={index} className="relative">
                  {/* Content Container */}
                  <div className="relative flex items-center justify-center">
                    {/* Timeline Node - Absolute positioned */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center z-20 hidden lg:flex">
                      <span className="text-xl font-bold text-white">{process.step}</span>
                    </div>

                    {/* Step Content Layout */}
                    <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                      {/* Text Content */}
                      <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-20' : 'lg:text-left lg:pl-20 lg:order-2'}`}>
                        <SlideLeft delay={index * 100}>
                          {/* Mobile Step Number */}
                          <div className="lg:hidden w-12 h-12 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl font-bold text-white">{process.step}</span>
                          </div>

                          <h3 className="text-xl md:text-4xl font-bold text-[#2e3f3a] mb-6 text-center lg:text-inherit">
                            {process.title}
                          </h3>
                          <p className="text-base text-gray-700 leading-relaxed text-center lg:text-inherit">
                            {process.description}
                          </p>
                        </SlideLeft>
                      </div>

                      {/* Image Content */}
                      <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:pl-20' : 'lg:pr-20 lg:order-1'}`}>
                        <SlideRight delay={index * 100 + 200}>
                          <div className="relative overflow-hidden rounded-xl shadow-2xl max-w-sm mx-auto lg:mx-0">
                            {index === 3
                              ? <VideoPlayer
                                src="/视频2.mp4"
                                className="w-full h-full rounded-2xl shadow-2xl object-contain"
                              />
                              :
                              <Image
                                src={process.image}
                                alt={process.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                              />}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                          </div>
                        </SlideRight>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Ready to Start & Contact Form Combined Section */}
      <section id="contact-form" className="py-8 md:py-24 bg-[#2e3f3a] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:text-left">
            {/* Left side - Ready to Start content */}
            <SlideLeft>
              <div className="lg:sticky lg:top-8 space-y-8 lg:space-y-16 py-8 lg:py-16 text-center lg:text-left">
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 leading-tight text-[#FAF8ED]">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 lg:mb-12 leading-relaxed">
                    Fill out the form and our franchise team will get back to you to discuss this exciting opportunity.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src="/franchise.png"
                    alt="Teapresso franchise experience"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

              </div>
            </SlideLeft>

            {/* Right side - Contact Form */}
            <SlideRight delay={200}>
              <div className="-mx-4 lg:-mx-8">
                <ContactForm
                  title="Send us a message"
                  className="bg-transparent p-0"
                  type="franchise"
                />
              </div>
            </SlideRight>
          </div>
        </div>
      </section>
    </div>
  );
} 