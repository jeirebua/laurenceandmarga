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
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      <div className="container relative z-10 flex flex-col items-center justify-center min-h-dvh mx-auto">
        <div className="text-center text-amber-50">
          <div
            className={`${dancingScript.className} text-7xl lg:text-9xl flex flex-col md:flex-row items-center md:items-end`}
          >
            <h1>Laurence</h1>
            <span className={`md:mx-6 text-5xl xl:text-6xl`}>&</span>
            <h1>Margarette</h1>
          </div>
        </div>
        <div
          className={` ${montserrat.className} absolute bottom-0 space-y-3 md:space-y-0 mb-32 md:mb-24 flex flex-col md:flex-row justify-between items-center w-full text-amber-50 px-2 md:px-0`}
        >
          <p className="text-lg md:text-md xl:text-lg">December 17, 2025</p>
          <a
            href="https://docs.google.com/forms/d/1Oh1vvoJK_DOrogbqoSDnymcQl2JkBmndFZFpanw1yvo/viewform?pli=1&ts=68d600f3&pli=1&edit_requested=true"
            target="_blank"
            className="text-lg md:text-md border border-amber-50 text-amber-50 px-8 py-2.5  underline"
          >
            RSVP HERE
          </a>
          <p className="text-lg md:text-md xl:text-lg">{`Teodore's Events Place`}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
