import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";
import Image from "next/image";

function StorySection() {
  return (
    <section className="bg-amber-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`${dancingScript.className} text-5xl md:text-7xl text-amber-900`}
            data-aos="fade-up"
          >
            Our Story
          </h2>
          <div
            className="w-24 h-1 bg-amber-900/30 mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Image - Left Side */}
          <div
            className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Image
              src="/story-image-1.jpg"
              alt="Laurence and Margarette"
              fill
              className="object-cover"
            />
          </div>

          {/* Story Text - Right Side */}
          <div
            className={`${montserrat.className} space-y-6 text-amber-900/90`}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <p className="text-base md:text-lg leading-relaxed">
              <span
                className={`${dancingScript.className} text-2xl md:text-4xl leading-relaxed mr-1`}
              >
                It all started at the gym.
              </span>
              Most people go there to build muscle, not relationships, but fate
              clearly had something else in mind.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Laurence noticed Margarette right away and tried to talk to her a
              few times, but she wasn&apos;t having it. She wouldn&apos;t even
              tell him her name. Still, he didn&apos;t give up. That mix of
              charm and persistence eventually worked.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Their first date was already one for the books. Margarette told
              him, &quot;When I wake up, I&apos;ll get ready. You better be
              there when I&apos;m done or I&apos;m cancelling.&quot; Laurence,
              determined not to mess it up, actually slept outside her house
              just to make sure he wouldn&apos;t miss her.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              When the date finally happened, he was in for a few surprises. He
              didn&apos;t expect her to eat that much, and she didn&apos;t
              expect him to actually go along with her playful challenges. That
              day pretty much set the tone for their relationship: unexpected,
              funny, and full of small moments that turned into favorite
              memories.
            </p>
          </div>
        </div>

        {/* Second Row - Reversed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Story Text - Left Side */}
          <div
            className={`${montserrat.className} space-y-6 text-amber-900/90 lg:order-1`}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="text-base md:text-lg leading-relaxed">
              Since then, they have been inseparable. Margarette stopped driving
              because Laurence insists on taking the wheel, and she&apos;s
              perfectly fine with that. He&apos;s an amazing cook, which has
              probably ruined restaurant food for her forever. He even got her
              into Valorant, something she never thought she would enjoy, but
              now they are both a little too competitive for their own good.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              When Margarette started meeting people from Laurence&apos;s life,
              she was surprised to realize they already knew her. Apparently, he
              talked about her all the time. Even his barber knew her name. It
              was the kind of thing that made her laugh, but it also made her
              heart full.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              They have shared plenty of adventures, from their first hike up
              Mt. Pulag to their first flight together to Siargao. Even the
              quiet nights at home feel special. Every trip, every meal, and
              every inside joke has become part of a story that is equal parts
              laughter and love.
            </p>
          </div>

          {/* Image - Right Side */}
          <div
            className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl lg:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image
              src="/story-image-2.jpg"
              alt="Laurence and Margarette"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Final Paragraph - Full Width */}
        <div
          className={`${montserrat.className} text-center max-w-4xl mx-auto`}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-base md:text-lg leading-relaxed text-amber-900/90 italic">
            Their story began with a stubborn girl who wouldn&apos;t share her
            name and a guy who refused to give up. And somewhere between gym
            conversations, late-night shows, and one too many TikTok food hunts,
            they found something real.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StorySection;
