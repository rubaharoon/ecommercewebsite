import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
}

async function getProducts(category: string): Promise<Product[]> {
  const products: { [key: string]: Product[] } = {
    casual: [
      {
        id: 1,
        name: "CINDERELLA Heal Transparent...",
        description: "Transparent Heal For Women & Girls Silver...",
        image: "/images/casual1.jpeg",
        price: 300,
        rating: 4.5,
      },
      {
        id: 2,
        name: "Soft Womens Over Coat",
        description: "Elegant soft women's overcoat offering...",
        image: "/images/casual2.jpeg",
        price: 230,
        rating: 4,
      },
      {
        id: 3,
        name: "Womens Casual Wear",
        description: "Casual wear for women's...",
        image: "/images/casual3.jpeg",
        price: 200,
        rating: 3.5,
      },

    ],
  };

  return products[category] || [];
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const products = await getProducts(category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="sm:text-3xl title-font scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl text-[#FB923C] mb-2 capitalize text-center">

      tops
      </h1>
      <div className="flex mt-4 justify-center">
          <div className="w-36 h-[0.4rem] rounded-full bg-[#1B6392] inline-flex" />
        </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto border rounded-lg shadow-md p-4 bg-white flex flex-col"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg object-cover mx-auto"
            />
            <h2 className="mt-4 text-lg font-semibold text-black line-clamp-1">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-1">
              {product.description}
            </p>
            <span className="text-xl font-semibold text-[#1B6392] mt-2">
              ${product.price}
            </span>
            <div className="flex items-center justify-between mt-4">
              {/* Ratings */}
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              {/* Buttons */}
              <div className="flex gap-2">
                <Button className="bg-[#1B6392] rounded-md flex items-center px-4 py-1 text-sm font-medium text-white hover:bg-[#FB923C]">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </Button>
                <Button className="bg-[#1B6392] rounded-md flex items-center px-4 py-1 text-sm font-medium text-white hover:bg-[#FB923C]">
                  <FaHeart className="mr-2" /> Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
