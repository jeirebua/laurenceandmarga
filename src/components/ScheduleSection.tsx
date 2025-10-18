"use client";

import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";

function ScheduleSection() {
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

  const events = [
    {
      time: "2:30 PM",
      title: "Church Ceremony",
      description:
        "We begin our celebration with a heartfelt exchange of vows surrounded by our dearest family and friends.",
    },
    {
      time: "4:30 PM",
      title: "Registration & Welcome",
      description:
        "Join us for light bites, photos, and mingling as we welcome everyone to the celebration.",
    },
    {
      time: "6:30 PM",
      title: "Dinner Reception",
      description:
        "Gather with us for a warm, joyful dinner filled with laughter, stories, and love.",
    },
    {
      time: "8:30 PM",
      title: "Thank You Message",
      description:
        "Before the night ends, we'll share a few words of gratitude from the heart.",
    },
  ];

  return (
    <section className="bg-[#E8DCC8] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          data-parallax-speed="0.08"
          className="absolute top-10 left-16 w-80 h-80 bg-[#1C6B55]/10 rounded-full blur-3xl transition-transform"
        />
        <div
          data-parallax-speed="0.12"
          className="absolute bottom-32 right-20 w-64 h-64 bg-[#C98858]/15 rounded-full blur-3xl transition-transform"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2
            className={`${dancingScript.className} text-5xl md:text-7xl text-[#2C2C2C] relative inline-block`}
          >
            The Itinerary
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
                stroke="#2C2C2C"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </h2>
        </div>

        {/* Events Grid - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12 md:gap-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Time and Title */}
              <div className="space-y-2">
                <h3
                  className={`${montserrat.className} text-sm md:text-base font-medium tracking-wide uppercase text-[#2C2C2C]`}
                >
                  {event.time} — {event.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`${montserrat.className} text-sm md:text-base text-[#4A4A4A] leading-relaxed font-light`}
              >
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
