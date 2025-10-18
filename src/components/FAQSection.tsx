import { dancingScript, montserrat } from "@/common/fonts";
import React from "react";
import Image from "next/image";

function FAQSection() {
  const faqs = [
    {
      question: "What is the dress code?",
      answer:
        "Please come in traditional attire. Filipiniana for the ladies and Barong for the gentlemen. Our color palette is terracotta and sage green.",
    },
    {
      question: "What time should I arrive?",
      answer: "Church ceremony at 2:00 pm. Reception starts at 5:00 pm.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "We're keeping the celebration intimate, so invitations are for the guests listed by name. We kindly request no plus ones.",
    },
    {
      question:
        "What kind of activities will be available during the reception?",
      answer:
        "Expect music, dancing, and a photo booth. There may be a few surprise activities throughout the afternoon as well.",
    },
    {
      question: "How can I get there?",
      answer:
        "Please scan the QR code on your invitation to access directions to the venue via Google Maps.",
    },
  ];

  return (
    <section className="bg-[#E8DCC8] py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="mb-16 md:mb-24" data-aos="fade-up">
          <h2
            className={`${dancingScript.className} text-5xl md:text-7xl text-[#2C2C2C] relative inline-block`}
          >
            Frequently Asked
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

        {/* FAQ List - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-12 md:gap-y-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Question */}
              <h3
                className={`${montserrat.className} text-base md:text-lg font-medium text-[#2C2C2C]`}
              >
                {faq.question}
              </h3>

              {/* Answer */}
              <p
                className={`${montserrat.className} text-sm md:text-base text-[#4A4A4A] leading-relaxed font-light`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Venue Directions QR Codes */}
        <div className="mt-16 md:mt-24" data-aos="fade-up">
          <h3
            className={`${dancingScript.className} text-3xl md:text-4xl text-[#2C2C2C] text-center mb-12`}
          >
            Venue Directions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
            {/* Church QR Code */}
            <div className="bg-white p-4 md:p-6 rounded-lg">
              <div className="relative aspect-square mb-3">
                <Image
                  src="/qr-church.png"
                  alt="Church Direction QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className={`${montserrat.className} text-center text-sm md:text-base font-medium text-[#2C2C2C]`}
              >
                Church Ceremony
              </p>
            </div>

            {/* Reception QR Code */}
            <div className="bg-white p-4 md:p-6 rounded-lg">
              <div className="relative aspect-square mb-3">
                <Image
                  src="/qr-reception.png"
                  alt="Reception Venue QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p
                className={`${montserrat.className} text-center text-sm md:text-base font-medium text-[#2C2C2C]`}
              >
                Reception Venue
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
