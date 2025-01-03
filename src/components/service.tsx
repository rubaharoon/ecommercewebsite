"use client";
import React from "react";
import {
  PiPackageDuotone,
  PiTrophyDuotone,
  PiCreditCardDuotone,
} from "react-icons/pi";

const Service = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container px-6 py-16 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
            Our <span className="text-[#FB923C]">Services</span> 
            {/* Underline */}
          <div className="flex mt-2 justify-center">
            <div className="w-32 h-[0.4rem] rounded-full bg-[#1B6392] inline-flex" />
          </div>
          </h2>
        </div>

        {/* Features Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg">
            <PiPackageDuotone
              size={30}
              className="text-[#1B6392] animate-bounce"
            />
            <div>
              <h3 className="text-lg font-semibold">Fasted Delivery</h3>
              <p className="text-sm text-gray-600">Delivery in 24/H</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg">
            <PiTrophyDuotone
              size={30}
              className="text-[#1B6392] animate-bounce"
            />
            <div>
              <h3 className="text-lg font-semibold">24 Hours Return</h3>
              <p className="text-sm text-gray-600">100% money-back guarantee</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:shadow-lg bg-white p-4 rounded-lg">
            <PiCreditCardDuotone
              size={30}
              className="text-[#1B6392] animate-bounce"
            />
            <div>
              <h3 className="text-lg font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">Your money is safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
