"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { GiShoppingBag } from "react-icons/gi";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 lg:px-16 text-left text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-md">
          Elevate Style
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed drop-shadow-sm">
          Discover the largest clothing collection for every season. <br />
          Trendy and classy designs tailored to your preferences. <br />
          Fast delivery and frequent updates, all within 24 hours.
        </p>
        <Button className="outline rounded-2xl bg-[#1B6392] hover:bg-[#FB923C] outline-2 outline-offset-1 cursor-pointer group flex items-center px-6 py-3 text-sm font-medium">
          <GiShoppingBag className="mr-2 h-5 w-5 group-hover:animate-bounce" />
          Start Shopping
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
