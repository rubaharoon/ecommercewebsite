"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaHeart,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Shop dropdown

  return (
    <nav className="bg-[#1B6392] text-white">
      {/* Top Black Bar */}
      <div className="bg-[#FB923C] text-white text-center py-2 px-2 sm:px-4 xl:px-0">
        <div className="relative max-w-frame mx-auto flex items-center justify-center gap-4">
          <span>Follow us:</span>
          {/* Divider Line */}
          <div className="border-l border-gray-300 h-5"></div>
          {/* Social Icons */}
          <Link href="#" className="bg-transparent hover:text-blue-700 flex items-center">
            <FaFacebookF size={18} />
          </Link>
          <Link href="#" className="bg-transparent hover:text-black flex items-center">
            <FaGithub size={18} />
          </Link>
          <Link href="#" className="bg-transparent hover:text-purple-700 flex items-center">
            <FaInstagram size={18} />
          </Link>
          <Link href="#" className="bg-transparent hover:text-[#9C1C1C] flex items-center">
            <FaYoutube size={18} />
          </Link>
          {/* Divider Line */}
          <div className="border-l border-gray-300 h-5"></div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={20}
            height={20}
            priority
          />
          <span className="text-2xl font-bold ml-2">Market Hub</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-[#FB923C]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#FB923C]">
            About
          </Link>
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-[#FB923C]"
            >
              <span>Shop</span>
              <MdKeyboardArrowDown size={18} />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 bg-white text-black shadow-lg rounded-md mt-2 w-48 z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/shop/men"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Mens Clothing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/women"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Womens Clothing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/accessories"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shop/sale"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Sale
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          <Link href="/contact" className="hover:text-[#FB923C]">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <button className="hover:text-[#FB923C]">
            <FaShoppingCart size={20} />
          </button>
          <button className="hover:text-[#9C1C1C]">
            <FaHeart size={18} />
          </button>
          <button className="hover:text-[#FB923C]">
            <Link href="/signin">
              <FaUser size={18} />
            </Link>
          </button>
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden block hover:text-[#FB923C]"
          >
            <CiMenuFries size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-[#1B6392] text-white shadow-lg p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-xl"
            >
              &times;
            </button>
            <nav className="mt-8">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-[#FB923C]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#FB923C]">
                    About
                  </Link>
                </li>
                <li>
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full hover:text-[#FB923C]"
                    >
                      Shop
                      <MdKeyboardArrowDown size={18} />
                    </button>
                    {isDropdownOpen && (
                      <ul className="pl-4 text-sm space-y-2">
                        <li>
                          <Link href="/shop/men" className="hover:text-gray-300">
                            Mens Clothing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/women"
                            className="hover:text-gray-300"
                          >
                            Womens Clothing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shop/accessories"
                            className="hover:text-gray-300"
                          >
                            Accessories
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/sale" className="hover:text-gray-300">
                            Sale
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                
                
                <li>
                  <Link href="/contact" className="hover:text-[#FB923C]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 