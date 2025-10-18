"use client";

import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";
import Image from "next/image";

function StorySection() {
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
    <section className="bg-[#FAEFC5] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          data-parallax-speed="0.09"
          className="absolute top-40 right-10 w-96 h-96 bg-[#C98858]/10 rounded-full blur-3xl transition-transform"
        />
        <div
          data-parallax-speed="0.11"
          className="absolute bottom-20 left-16 w-72 h-72 bg-[#1C6B55]/8 rounded-full blur-3xl transition-transform"
        />
        <div
          data-parallax-speed="0.07"
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#2C2C2C]/5 rounded-full blur-2xl transition-transform"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        {/* Section Title */}
        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2
            className={`${dancingScript.className} text-5xl md:text-7xl text-[#2C2C2C] relative inline-block`}
          >
            Our Story
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

        {/* Story Content with Photos */}
        <div className="space-y-12 md:space-y-16">
          {/* First section - Text on left, Image on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div
              className={`${montserrat.className} space-y-6 text-[#2C2C2C]`}
              data-aos="fade-right"
            >
              <p className="text-base md:text-lg leading-relaxed font-light">
                It all started at the gym. Most people go there to build muscle,
                not relationships, but fate clearly had something else in mind.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-light">
                Laurence noticed Margarette right away and tried to talk to her
                a few times, but she wasn&apos;t having it. She wouldn&apos;t
                even tell him her name. Still, he didn&apos;t give up. That mix
                of charm and persistence eventually worked.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-light">
                Their first date was already one for the books. Margarette told
                him, &quot;When I wake up, I&apos;ll get ready. You better be
                there when I&apos;m done or I&apos;m cancelling.&quot; Laurence,
                determined not to mess it up, actually slept outside her house
                just to make sure he wouldn&apos;t miss her.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light">
                When the date finally happened, he was in for a few surprises.
                He didn&apos;t expect her to eat that much, and she didn&apos;t
                expect him to actually go along with her playful challenges.
                That day pretty much set the tone for their relationship:
                unexpected, funny, and full of small moments that turned into
                favorite memories.
              </p>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg">
                <Image
                  src="/story-image-1.jpg"
                  alt="Laurence and Margarette"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C98858]/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#1C6B55]/30" />
            </div>
          </div>

          {/* Second section - Image on left, Text on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative md:order-1" data-aos="fade-right">
              <div className="relative aspect-[3/4] w-full overflow-hidden shadow-lg">
                <Image
                  src="/story-image-2.jpg"
                  alt="Laurence and Margarette"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1C6B55]/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[#C98858]/30" />
            </div>

            <div
              className={`${montserrat.className} space-y-6 text-[#2C2C2C] md:order-2`}
              data-aos="fade-left"
            >
              <p className="text-base md:text-lg leading-relaxed font-light">
                Since then, they have been inseparable. Margarette stopped
                driving because Laurence insists on taking the wheel, and
                she&apos;s perfectly fine with that. He&apos;s an amazing cook,
                which has probably ruined restaurant food for her forever. He
                even got her into Valorant, something she never thought she
                would enjoy, but now they are both a little too competitive for
                their own good.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-light">
                When Margarette started meeting people from Laurence&apos;s
                life, she was surprised to realize they already knew her.
                Apparently, he talked about her all the time. Even his barber
                knew her name. It was the kind of thing that made her laugh, but
                it also made her heart full.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-light">
                They have shared plenty of adventures, from their first hike up
                Mt. Pulag to their first flight together to Siargao. Even the
                quiet nights at home feel special. Every trip, every meal, and
                every inside joke has become part of a story that is equal parts
                laughter and love.
              </p>
            </div>
          </div>

          {/* Final paragraph - Full width */}
          <div
            className={`${montserrat.className} max-w-3xl mx-auto space-y-6`}
            data-aos="fade-up"
          >
            <div className="relative pt-8 pb-6 px-8 mt-8">
              {/* Decorative line above */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C98858]/40" />

              <p className="text-base md:text-lg leading-relaxed font-light text-center italic text-[#2C2C2C]">
                Their story began with a stubborn girl who wouldn&apos;t share
                her name and a guy who refused to give up. And somewhere between
                gym conversations, late-night shows, and one too many TikTok
                food hunts, they found something real.
              </p>

              {/* Decorative line below */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C98858]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
