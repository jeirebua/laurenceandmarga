"use client";

import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";
import Image from "next/image";

function GiftRegistrySection() {
  React.useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
      parallaxElements.forEach((element) => {
        const speed = parseFloat((element as HTMLElement).dataset.parallaxSpeed || '0');
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrolled = window.scrollY;
          const yPos = -(scrolled * speed);
          (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#1C3A3F] py-20 md:py-32 relative overflow-hidden text-white">
      {/* Decorative Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          data-parallax-speed="0.12"
          className="absolute top-32 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl transition-transform"
        />
        <div
          data-parallax-speed="0.08"
          className="absolute bottom-20 right-16 w-56 h-56 bg-[#E8DCC8]/10 rounded-full blur-2xl transition-transform"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2
            className={`${dancingScript.className} text-5xl md:text-7xl text-white relative inline-block mb-8`}
          >
            Gift Registry
            {/* Underline decoration */}
            <svg
              className="absolute left-0 -bottom-1 md:-bottom-2 w-full"
              height="12"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6 Q100 4, 200 6 T398 6"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </h2>
          <p
            className={`${montserrat.className} text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto`}
          >
            Your presence is truly the best gift we could ask for.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* QR Codes - Left Side */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
              {/* GCash QR */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="relative aspect-square mb-3">
                  <Image
                    src="/gift-registry-gcash.jpeg"
                    alt="GCash QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className={`${montserrat.className} text-center text-sm md:text-base font-medium text-[#1C3A3F]`}
                >
                  GCash
                </p>
              </div>

              {/* BPI QR */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <div className="relative aspect-square mb-3">
                  <Image
                    src="/gift-registry-bpi.jpeg"
                    alt="BPI QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                <p
                  className={`${montserrat.className} text-center text-sm md:text-base font-medium text-[#1C3A3F]`}
                >
                  BPI
                </p>
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
            <p
              className={`${montserrat.className} text-base md:text-lg text-white/90 leading-relaxed font-light`}
            >
              If you would like to bless us with a gift, we would be grateful
              for a monetary contribution to help us build our new life
              together.
            </p>
            <p
              className={`${montserrat.className} text-base md:text-lg text-white/90 leading-relaxed font-light`}
            >
              Your love and presence mean the world to us, and any gesture of
              support will be deeply appreciated as we start this new chapter.
            </p>
            <p
              className={`${montserrat.className} text-base md:text-lg text-white/90 leading-relaxed font-light`}
            >
              Thank you for being part of this milestone with us.
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div
          className="flex justify-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="border-t border-dotted border-white/30 w-full max-w-2xl" />
        </div>

        {/* RSVP Section */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <div className="mb-8">
            <p
              className={`${montserrat.className} text-sm md:text-base text-white/70 uppercase tracking-widest mb-2`}
            >
              Please RSVP by
            </p>
            <p
              className={`${dancingScript.className} text-4xl md:text-5xl text-white`}
            >
              December 10, 2025
            </p>
          </div>

          <a
            href="https://docs.google.com/forms/d/1Oh1vvoJK_DOrogbqoSDnymcQl2JkBmndFZFpanw1yvo/viewform?pli=1&ts=68d600f3&pli=1&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} inline-block bg-white text-[#1C3A3F] px-10 py-4 rounded-full text-base md:text-lg font-medium uppercase tracking-wide hover:bg-white/90 transition-all duration-300 hover:scale-105`}
          >
            RSVP
          </a>
        </div>
      </div>
    </section>
  );
}

export default GiftRegistrySection;
