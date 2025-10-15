import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";

function HeroSection() {
  return (
    <div className="min-h-dvh w-full relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/wedding-video.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/wedding-video-mobile.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-dvh mx-auto px-4">
        <div className="text-center text-amber-50">
          <div
            className={`${dancingScript.className} text-7xl lg:text-9xl flex flex-col md:flex-row items-center md:items-end mb-6`}
          >
            <h1 data-aos="fade-up" data-aos-delay="200">
              Laurence
            </h1>
            <span
              className={`md:mx-6 text-5xl xl:text-6xl`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              &
            </span>
            <h1 data-aos="fade-up" data-aos-delay="600">
              Margarette
            </h1>
          </div>

          {/* Handwritten underline decoration */}
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="700">
            <svg
              className="w-64 md:w-96"
              height="12"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6 Q100 4, 200 6 T398 6"
                stroke="rgb(254 243 199)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p
            className={`${montserrat.className} text-base md:text-lg font-light mt-6 tracking-wider uppercase`}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            are getting married
          </p>
        </div>

        {/* Bottom bar with info */}
        <div
          className={`${montserrat.className} md:absolute md:bottom-0 md:mb-24 mt-16 md:mt-0 w-full px-4 md:px-0`}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8 text-amber-50">
            <p
              className="text-base md:text-lg font-light"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              December 17, 2025
            </p>

            <span className="hidden md:block text-amber-50/50">•</span>

            <a
              href="https://docs.google.com/forms/d/1Oh1vvoJK_DOrogbqoSDnymcQl2JkBmndFZFpanw1yvo/viewform?pli=1&ts=68d600f3&pli=1&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg font-medium bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full border border-amber-50/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 uppercase tracking-wide"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              RSVP Here
            </a>

            <span className="hidden md:block text-amber-50/50">•</span>

            <p
              className="text-base md:text-lg font-light"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              {`Teodore's Events Place`}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="flex flex-col items-center gap-2 text-amber-50/70 animate-bounce">
            <span className={`${montserrat.className} text-xs uppercase tracking-wider`}>
              Scroll
            </span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
