import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";

function FAQSection() {
  const faqs = [
    {
      question: "What is the dress code?",
      answer:
        "Our attire will be semi-formal. We encourage guests to wear pastel colors in the shades of blue, gray, purple, peach or green to complement our theme.",
      icon: "👔",
    },
    {
      question: "What time should I arrive?",
      answer:
        "We'd love to have you at the chapel to witness our vows, but since seating is limited, we suggest heading directly to the reception at 1 pm. If you'd like to join us at the chapel, please plan to arrive by 10:30 am.",
      icon: "🕐",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Our guest list is limited, so if a plus one is included in your invitation, it will indicate so. Otherwise, we hope to celebrate with just you!",
      icon: "💑",
    },
    {
      question: "What kind of activities will be available during the reception?",
      answer:
        "Expect music, dancing, and a photo booth! There may be a few surprise activities throughout the afternoon as well.",
      icon: "🎉",
    },
    {
      question: "What should I do if I can't make it?",
      answer:
        "We'll miss you! Please let us know as soon as possible if you can't attend so we can make adjustments accordingly.",
      icon: "📞",
    },
    {
      question: "How can I get there?",
      answer:
        "Please scan the QR code on your invitation to access directions to the venue via Google Maps.",
      icon: "📍",
    },
  ];

  return (
    <section className="bg-[#E8DCC8] py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#C98858]/10 rounded-full blur-2xl" />
      <div className="absolute top-60 right-20 w-32 h-32 bg-[#1C6B55]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#C98858]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-[#1C6B55]/10 rounded-full blur-2xl" />

      {/* Decorative corner patterns */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#C98858]/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#1C6B55]/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#1C6B55]/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#C98858]/20" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        {/* Section Title - Handwritten Style */}
        <div className="text-center mb-20 md:mb-28 relative">
          {/* Decorative flourish above title */}
          <div className="flex justify-center gap-3 mb-6" data-aos="fade-down">
            <span className="text-[#C98858] text-2xl">✿</span>
            <span className="text-[#1C6B55] text-2xl">✿</span>
            <span className="text-[#C98858] text-2xl">✿</span>
          </div>

          <h2
            className={`${dancingScript.className} text-6xl md:text-8xl text-[#2C2C2C] relative inline-block`}
            data-aos="fade-up"
          >
            Frequently Asked
            {/* Underline decoration */}
            <svg
              className="absolute left-0 -bottom-2 md:-bottom-4 w-full"
              height="20"
              viewBox="0 0 400 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 Q100 5, 200 10 T398 10"
                stroke="#C98858"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </h2>

          {/* Small decorative text */}
          <p
            className={`${montserrat.className} text-sm text-[#4A4A4A] mt-8 italic`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Everything you need to know
          </p>
        </div>

        {/* FAQ List - Enhanced Style */}
        <div className="space-y-12 md:space-y-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Decorative icon */}
              <div className="absolute -left-4 md:-left-8 top-0 text-3xl md:text-4xl opacity-30 group-hover:opacity-60 transition-opacity">
                {faq.icon}
              </div>

              <div className="pl-8 md:pl-12 space-y-3 border-l-2 border-[#C98858]/30 group-hover:border-[#C98858] transition-all">
                <h3
                  className={`${montserrat.className} text-base md:text-lg font-medium text-[#2C2C2C] relative`}
                >
                  {faq.question}
                  {/* Decorative dot */}
                  <span className="absolute -left-9 md:-left-13 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1C6B55] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p
                  className={`${montserrat.className} text-sm md:text-base font-light text-[#4A4A4A] leading-relaxed max-w-2xl`}
                >
                  {faq.answer}
                </p>
              </div>

              {/* Decorative divider between questions (except last) */}
              {index < faqs.length - 1 && (
                <div className="flex items-center justify-center mt-8 md:mt-10">
                  <div className="h-px bg-[#C98858]/20 w-16" />
                  <span className="mx-3 text-[#1C6B55]/30 text-lg">❋</span>
                  <div className="h-px bg-[#C98858]/20 w-16" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="inline-block px-8 py-4 bg-white/40 rounded-full border border-[#C98858]/30">
            <p className={`${montserrat.className} text-sm text-[#2C2C2C] font-light`}>
              Still have questions?{" "}
              <span className="font-medium text-[#1C6B55]">Feel free to reach out!</span>
            </p>
          </div>
          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 mt-6 text-2xl opacity-40">
            <span>💕</span>
            <span>💕</span>
            <span>💕</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
