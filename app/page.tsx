import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { SlideUp, FadeIn } from "./_components/ScrollAnimation";
import VideoPlayer from "./_components/VideoPlayer";

export const metadata: Metadata = {
  title: "Teapresso 野萃",
  description: "Experience the art of freshly brewed tea and coffee at Teapresso 野萃. Modern tea house serving handcrafted beverages, seasonal treats, and premium ingredients in Manchester, Leeds, and Glasgow.",
  keywords: ["tea house Manchester", "coffee shop Leeds", "bubble tea Glasgow", "freshly brewed tea", "artisan coffee", "modern tea house", "handcrafted beverages"],
  openGraph: {
    title: "Teapresso 野萃",
    description: "Experience the art of freshly brewed tea and coffee at Teapresso 野萃. Your daily ritual destination.",
    images: ["/home.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Additional structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Teapresso 野萃",
            "description": "Experience the art of freshly brewed tea and coffee at Teapresso 野萃. Modern tea house serving handcrafted beverages and seasonal treats.",
            "url": "https://teapresso.co.uk",
            "mainEntity": {
              "@type": "Restaurant",
              "name": "Teapresso 野萃",
              "servesCuisine": ["Tea", "Coffee", "Beverages"],
              "priceRange": "££"
            }
          })
        }}
      />
      <div className="min-h-screen bg-[#FAF8ED]">
        {/* Hero Banner */}
        <section className="md:pb-6">
          <div className="max-w-6xl mx-auto">
            <Image
              src="/home.jpg"
              alt="Teapresso Tea Extraction Process"
              width={1920}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto lg:px-8 pb-10 bg-[#FAF8ED]">
          {/* Brand Introduction Section */}
          <section className="py-12 md:py-24 px-6 md:px-0">
            <SlideUp className="max-w-4xl mx-auto text-center">
              <FadeIn delay={200}>
                <h1 className="text-3xl md:text-6xl font-bold text-[#2e3f3a] mb-10 md:mb-12 tracking-tight">
                  Teapresso
                </h1>
              </FadeIn>

              <SlideUp delay={300}>
                <h2 className="text-lg md:text-2xl italic font-medium text-[#2e3f3a] mb-10 text-gray-600">
                  Awaken Your Tea, Espresso's Way
                </h2>
              </SlideUp>

              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <SlideUp delay={400}>
                  <p className="text-base md:text-xl mb-8 px-8 bg-[#2e3f3a] text-zinc-100 py-10">
                    Teapresso is the UK's first premium tea-led brand, now proudly offering both artisan milk tea and specialty coffee.
                  </p>
                </SlideUp>

                <SlideUp delay={500}>
                  <p className="text-base md:text-lg mb-8">
                    We specialise in freshly brewed milk tea using advanced tea extraction methods, combining the elegance of Eastern tea culture with the comforting richness of British milk tea. Now, with the addition of hand-crafted espresso and coffee drinks, we continue our mission to create a distinctive, high-quality beverage experience.
                  </p>
                </SlideUp>

                <SlideUp delay={600}>
                  <p className="text-base md:text-lg">
                    Our philosophy is rooted in single-cup extraction, freshly brewed — whether it's a delicate oolong or a bold flat white — celebrating the perfect balance between tradition and innovation in every cup.
                  </p>
                </SlideUp>
              </div>
            </SlideUp>
          </section>

          {/* Tea Ritual Section */}
          <section className="py-16 md:py-24 bg-[#2e3f3a]">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <h2 className="text-xl md:text-4xl font-bold text-[#2e3f3a] mb-12 text-center text-[#FAF8ED]">
                  The birth of a cup of tea is a ritual
                </h2>
              </SlideUp>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-6 md:px-0">
                {[
                  {
                    step: "Picking leaves",
                    description: "Carefully selecting the finest and most complete tea leaves."
                  },
                  {
                    step: "Grinding",
                    description: "Grinding the tea leaves to the perfect texture."
                  },
                  {
                    step: "Weighing",
                    description: "Precisely measuring, in order to present the purest flavour."
                  },
                  {
                    step: "Placing tea",
                    description: "Placing the ground tea powder into the extraction chamber."
                  },
                  {
                    step: "Selecting",
                    description: "Pressing the desired mode to extract the ideal flavour."
                  },
                  {
                    step: "Extracting",
                    description: "High-pressure release, allowing the essence of the tea to fully bloom."
                  },
                  {
                    step: "Pouring",
                    description: "Pouring the freshly extracted tea into the cup, releasing its aroma."
                  },
                  {
                    step: "Tasting",
                    description: "Sipping and savouring the natural sweetness and layers of aftertaste."
                  }
                ].map((item, index) => (
                  <SlideUp key={index} delay={index * 60}>
                    <div className="rounded-xl p-6 shadow-sm bg-[#FAF8ED] h-full">
                      {/* <div className="text-2xl font-bold text-[#2e3f3a] mb-2">{index + 1}</div> */}
                      <h3 className="text-base font-semibold text-[#2e3f3a] mb-2">{item.step}</h3>
                      <p className="text-gray-600 text-sm flex flex-grow">{item.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </section>

          {/* Image Section 1 */}
          <section className="py-16 md:py-16">
            <SlideUp className="max-w-6xl mx-auto">
              <Image
                src="/home_2.png"
                alt="Teapresso Tea Extraction Process"
                width={1920}
                height={600}
                className="w-full h-auto shadow-lg"
                priority
              />
            </SlideUp>
          </section>

          {/* Art of Extraction Section */}
          <section className="py-0 md:py-16">
            <div className="max-w-4xl mx-auto">
              <SlideUp>
                <h2 className="text-2xl md:text-4xl font-bold text-[#2e3f3a] mb-6 text-center">
                  The Art of Extraction
                </h2>
              </SlideUp>

              <div className="space-y-8 px-6 md:px-0">
                <SlideUp delay={100}>
                  <div className="bg-[#2e3f3a] rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-lg md:text-3xl font-semibold text-[#FAF8ED] mb-4 italic">
                      Selection and Grinding
                    </h3>
                    <p className="text-sm md:text-lg text-[#FAF8ED] leading-relaxed">
                      We carefully select high-quality, whole tea leaves, and each leaf is meticulously ground to achieve the ideal texture and taste.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp delay={200}>
                  <div className="bg-[#2e3f3a] rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-lg md:text-3xl font-semibold text-[#FAF8ED] mb-4 italic">
                      Measurement and Extraction
                    </h3>
                    <p className="text-sm md:text-lg text-[#FAF8ED] leading-relaxed mb-4">
                      We use high-pressure technology to extract the essence of the tea, layer by layer, to restore the true flavour of the leaves.
                    </p>
                    <p className="text-sm md:text-lg text-[#FAF8ED] leading-relaxed">
                      This craftsmanship preserves the natural sweetness and subtle fragrance of the tea leaves, delicate as silk, with a lingering aroma - each sip is a whisper to the depths of the tea.
                    </p>
                  </div>
                </SlideUp>

                <SlideUp delay={300}>
                  <div className="bg-[#2e3f3a] rounded-2xl p-8 md:p-12 shadow-lg">
                    <h3 className="text-lg md:text-3xl font-semibold text-[#FAF8ED] mb-4 italic">
                      Pouring and Tasting
                    </h3>
                    <p className="text-sm md:text-lg text-[#FAF8ED] leading-relaxed">
                      The freshly extracted tea is gently poured into the cup, and every sip allows you to experience the natural sweetness and long-lasting aftertaste of the tea, letting the aroma bloom on your palate.
                    </p>
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>

          {/* Video and Image Section */}
          <section className="py-12 md:py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Video thumbnail */}
                <SlideUp>
                  <div className="order-1 lg:order-1 mx-4 md:mx-0">
                    <Image
                      src="/thumb_1.jpg"
                      alt="Teapresso video thumbnail"
                      width={1920}
                      height={1080}
                      className="w-full h-auto shadow-lg rounded-lg"
                      priority
                    />
                  </div>
                </SlideUp>

                {/* Right: Image */}
                <SlideUp delay={200} className="flex flex-col gap-6 md:gap-11">
                  <div className="order-2 lg:order-2">
                    <Image
                      src="/home_3.png"
                      alt="Teapresso Tea Experience"
                      width={1920}
                      height={600}
                      className="w-full h-auto shadow-lg rounded-none md:rounded-lg"
                      priority
                    />
                  </div>
                  <div className="order-2 lg:order-2">
                    <Image
                      src="/Teapresso-65.jpg"
                      alt="Teapresso Tea Experience"
                      width={1920}
                      height={600}
                      className="w-full h-auto shadow-lg rounded-none md:rounded-lg"
                      priority
                    />
                  </div>
                </SlideUp>
              </div>
            </div>
          </section>

          <SlideUp className="text-center py-8 md:py-6 md:pb-20">
            <a
              href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4"
              target="_blank"
              className="inline-block text-zinc-100 bg-[#2e3f3a] font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              View Our Menu Now
            </a>
          </SlideUp>
        </div>
      </div>
    </>
  );
}
