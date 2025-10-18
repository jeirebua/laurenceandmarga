import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#E8DCC8] py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="text-center space-y-4">
          {/* Wedding Hashtag */}
          <div data-aos="fade-up">
            <p
              className={`${montserrat.className} text-sm md:text-base text-[#4A4A4A] uppercase tracking-wide mb-2`}
            >
              Share your photos with
            </p>
            <h2
              className={`${dancingScript.className} text-4xl md:text-6xl text-[#2C2C2C]`}
            >
              #MargafoundherforeverLauve
            </h2>
          </div>

          {/* Divider */}
          <div className="py-6" data-aos="fade-up" data-aos-delay="100">
            <div className="border-t border-dotted border-[#2C2C2C]/20 w-full max-w-md mx-auto" />
          </div>

          {/* Copyright */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p
              className={`${montserrat.className} text-xs md:text-sm text-[#4A4A4A] font-light`}
            >
              © 2025 Laurence & Margarette
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
