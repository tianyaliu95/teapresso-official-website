"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageCarouselProps {
    images: {
        src: string;
        alt: string;
        title: string;
        description: string;
    }[];
}

interface CarouselSlide {
    src: string;
    alt: string;
    title: string;
    description: string;
    isMenuCTA?: boolean;
}

// Menu images data
const MENU_IMAGES = [
    {
      src: "/menu/m1.jpeg",
      alt: "Green Tea Chappucino",
      title: "Green Tea Chappucino",
      description: "观自在［铁观音］"
    },
    {
      src: "/menu/m2.jpeg",
      alt: "Peach Tea Chappuccino",
      title: "Peach Tea Chappuccino",
      description: "桃花仙［白桃乌龙］"
    },
    {
      src: "/menu/m3.jpeg",
      alt: "Osmanthus Tea Chappuccino",
      title: "Osmanthus Tea Chappuccino",
      description: "不待月［桂花乌龙］"
    },
    {
      src: "/menu/m4.jpeg",
      alt: "Oolong Tea Chappuccino",
      title: "Oolong Tea Chappuccino",
      description: "冬令时［大红袍］"
    },
    {
      src: "/menu/m5.jpeg",
      alt: "Rose and Lychee Tea Frappe",
      title: "Rose and Lychee Tea Frappe",
      description: "瑰姿艳荔 [玫瑰普洱荔枝]"
    },
    {
      src: "/menu/m6.jpeg",
      alt: "Golden Black Tea Frappe",
      title: "Golden Black Tea Frappe",
      description: "落日熔金"
    },
    {
      src: "/menu/m7.jpeg",
      alt: "Roasted Brown Sugar Milk Bubble",
      title: "Roasted Brown Sugar Milk Bubble",
      description: "烤黑糖珍珠牛乳"
    },
    {
      src: "/menu/m8.jpeg",
      alt: "Original Avocado Yogurt Smoothie",
      title: "Original Avocado Yogurt Smoothie",
      description: "经典牛油果酸奶奶昔"
    },
    {
      src: "/menu/m9.jpeg",
      alt: "Iced Oolong Lemon Tea",
      title: "Iced Oolong Lemon Tea",
      description: "心静自然凉"
    }
  ];

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Add menu CTA card to the images array
    const allSlides: CarouselSlide[] = [
        ...MENU_IMAGES,
        {
            src: "/menu/m1.jpeg", // Use first image as background
            alt: "Check out our menu",
            title: "DISCOVER MORE",
            description: "Explore our full menu and order online",
            isMenuCTA: true
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allSlides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allSlides.length) % allSlides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Drag handlers
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setTranslateX(0);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - startX;
        setTranslateX(deltaX);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);

        // Determine if drag was significant enough to change slide
        const threshold = 50;
        if (Math.abs(translateX) > threshold) {
            if (translateX > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }

        setTranslateX(0);
    };

    // Ensure we're on the client side before starting auto-play
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Auto-play functionality - only run on client side
    useEffect(() => {
        if (!isClient || isDragging) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isClient, isDragging]);

    // Show loading state until client-side hydration is complete
    if (!isClient) {
        return (
            <div className="relative w-full max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                        <div className="absolute inset-0">
                            <Image
                                src={MENU_IMAGES[0].src}
                                alt={MENU_IMAGES[0].alt}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                                        {MENU_IMAGES[0].title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-200">
                                        {MENU_IMAGES[0].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div
                className="relative overflow-hidden rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing"
                ref={carouselRef}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    {allSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                            style={{
                                transform: isDragging && index === currentIndex ? `translateX(${translateX}px)` : 'translateX(0)'
                            }}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                                priority={index === currentIndex}
                            />

                            {/* Menu CTA Card */}
                            {slide.isMenuCTA ? (
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
                                    <div className="text-center text-white p-8 max-w-md">
                                        <div className="mb-6 px-4">
                                            <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h10l-1 14a2 2 0 01-2 2H10a2 2 0 01-2-2L7 6z" />
                                            </svg>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                                {slide.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-gray-200 mb-8">
                                                {slide.description}
                                            </p>
                                        </div>
                                        <Link
                                            href="#start-ordering"
                                            className="inline-block bg-white text-[#2e3f3a] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
                                        >
                                            Check Out Our Menu
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                /* Regular image overlay */
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                                            {slide.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-200">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2e3f3a]/80 hover:bg-[#2e3f3a] text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10 cursor-pointer"
                    aria-label="Previous slide"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2e3f3a]/80 hover:bg-[#2e3f3a] text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10 cursor-pointer"
                    aria-label="Next slide"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 md:mt-10 space-x-2">
                {allSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                ? "bg-[#2e3f3a] scale-110"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="hidden md:flex justify-center mt-8 md:mt-10 space-x-4">
                {allSlides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${index === currentIndex
                                ? "ring-2 ring-[#2e3f3a] scale-105"
                                : "hover:scale-105"
                            }`}
                    >
                        {slide.isMenuCTA ? (
                            <div className="w-full h-full bg-[#2e3f3a] flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        ) : (
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                            />
                        )}
                    </button>
                ))}
            </div>

        </div>
    );
} 