import Image from "next/image";
import Link from "next/link";
import React from "react";

function Categories() {
  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="text-center mb-20">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Explore by <span className="text-[#1B6392]">Category</span>
          {/* Underline */}
          <div className="flex mt-2 justify-center">
            <div className="w-32 h-[0.4rem] rounded-full bg-[#FB923C] inline-flex" />
          </div>
        </h2>
      </div>
      {/* Womens Categories */}
      <div className="text-center mb-6 lg:mb-10">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-[#FB923C] mb-4">
          Womens Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/casual"}>
            <Image
              src="/images/casual.png"
              alt="casual"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Casual
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Casual
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/formal"}>
            <Image
              src="/images/formal.jpeg"
              alt="formal"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Formal
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center  text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Formal
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/ethnic"}>
            <Image
              src="/images/ethnic.jpg"
              alt="ethnic"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Ethnic
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Ethnic
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/makeup"}>
            <Image
              src="/images/makeup.jpg"
              alt="makeup"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Makeup
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Makeup
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/sandals-shoes"}>
            <Image
              src="/images/shoes.jpeg"
              alt=""
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Shoes
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Shoes
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/bags"}>
            <Image
              src="/images/bags.jpg"
              alt=""
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Bags
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Bags
            </div>
          </Link>
        </div>
      </div>

      {/* mens categories */}
      <div className="text-center mb-6 mt-20 lg:mt-24 lg:mb-10">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-[#1B6392] mb-4">
          Mens Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/casual"}>
            <Image
              src="/images/formal.jpg"
              alt="casual"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Casual
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Casual
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/formal"}>
            <Image
              src="/images/formal.png"
              alt="formal"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Formal
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Formal
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src="/images/menaccessories.jpeg"
              alt="accessories"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Accessories
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Accessories
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src="/images/menshoes.jpeg"
              alt="shoes"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Shoes
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Shoes
            </div>
          </Link>
        </div>
      </div>

      {/* Kids categories */}
      <div className="text-center mb-6 mt-20 lg:mt-24 lg:mb-10">
        <h1 className="sm:text-3xltitle-font scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl text-[#FB923C] mb-4">
          Kids Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/casual"}>
            <Image
              src="/images/kidscasual.jpeg"
              alt="casual"
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              casual
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              casual
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/hoodies"}>
            <Image
              src="/images/hoodies.jpeg"
              alt=""
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Hoodies
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center  text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Hoodies
            </div>
          </Link>
        </div>

        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src="/images/kidsaccessories.png"
              alt=""
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#1B6392]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#1B6392] text-white w-full ">
              Accessories
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#1B6392] text-white w-full">
              Accessories
            </div>
          </Link>
        </div>
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src="/images/kidsshoes.png"
              alt=""
              height={350}
              width={350}
              className="rounded-xl duration-500 group-hover:scale-125 border-2 border-[#FB923C]"
            />
            <div className="hidden lg:block absolute bottom-24 group-hover:bottom-6 duration-500 scroll-m-20 text-center text-3xl font-bold tracking-tight bg-[#FB923C] text-white w-full ">
              Shoes
            </div>
            <div className="block lg:hidden absolute bottom-6 z-[100] duration-500 scroll-m-20 text-center text-md sm:text-lg font-bold tracking-tight bg-[#FB923C] text-white w-full">
              Shoes
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
