import React from "react";
import { PiChecksDuotone } from "react-icons/pi";
import Image from "next/image";
import TeamSection from "@/components/teamsection";

const AboutSection = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/aboutbackground.jpg')` }}>
      {/* Overlay for better text contrast */}
      <div className="bg-white bg-opacity-80">
        <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              {/* Section Tag */}
              <div className="mb-4">
                <span className="inline-block bg-[#1B6392] text-white px-4 py-2 text-sm font-semibold uppercase rounded-full">
                  Who We Are
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl font-bold text-[#FB923C] mb-6">
                Market Hub - Redefining Fashion, One Wardrobe at a Time
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Market Hub, we’re a destination for style, comfort, and
                quality. With a passion for fashion and a commitment to
                excellence, we bring you the finest collections for men, women,
                and kids. From timeless classics to the latest trends, our curated
                selections cater to every taste and occasion. Dedicated to
                sustainability and customer satisfaction, we aim to redefine your
                shopping experience by combining convenience, affordability, and
                unmatched quality. Market Hub isn’t just a store; it’s a community
                where your style comes to life.
              </p>

              {/* Features List */}
              <ul className="space-y-4">
                {[
                  "Great 24/7 customer services.",
                  "600+ Dedicated employees.",
                  "50+ Branches all over the world.",
                  "Over 1 Million Electronics Products.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <PiChecksDuotone size={24} className="text-[#FB923C]" />
                    <span className="text-[#1B6392] text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero.jpeg"
                alt="About Us"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Team Section */}
          <TeamSection />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
