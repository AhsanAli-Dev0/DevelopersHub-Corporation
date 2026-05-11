"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LayoutGrid, List, Heart, ChevronLeft , ChevronRight } from "lucide-react";
import Link from "next/link";
import FilterBar from "./filterBar";

export default function ProductCard() {
  const [viewMode, setViewMode] = useState("list");
const [currentPage, setCurrentPage] = useState(1);
  const products = [
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      original_price: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image_url: "/assets/Image/tech/1.jpg", // Apne real path se replace karein
    },
    {
      id: 2,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      original_price: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image_url: "/assets/Image/tech/3.jpg",
    },
    {
      id: 3,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      original_price: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image_url: "/assets/Image/tech/2.jpg",
    },
    {
      id: 4,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      original_price: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image_url: "/assets/Image/tech/7.jpg",
    },
    {
      id: 5,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      original_price: 1128.0,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image_url: "/assets/Image/tech/8.jpg",
    },
    {
      id: 6,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 998.0,
      original_price: null,
      rating: 7.5,
      orders: 154,
      shipping: "Free Shipping",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image_url: "/assets/Image/tech/9.jpg",
    }
  ];

  return (
    <div className=" min-h-screen">
      {/* Top Filter Bar */}
      <FilterBar viewMode={viewMode} setViewMode={setViewMode} />

      {/* Main Products Container */}
      <div className={viewMode === 'grid' ? "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 relative group ${
              viewMode === 'list' ? 'grid grid-cols-12 p-4' : 'flex flex-col hover:shadow-lg'
            }`}
          >
            {/* Wishlist Button */}
            <div className="absolute top-3 right-3 z-10">
              <button className="p-2 border border-gray-100 rounded-md text-blue-500 bg-white hover:bg-blue-50 transition-colors">
                <Heart size={18} />
              </button>
            </div>

            {/* Image Section */}
            <div className={`${viewMode === 'list' ? 'col-span-12 md:col-span-3' : 'w-full p-6 border-b border-gray-50'} flex justify-center items-center`}>
              <div className="relative w-40 h-40">
                <Image 
                  src={product.image_url} 
                  alt={product.name} 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={`${viewMode === 'list' ? 'col-span-12 md:col-span-9 flex flex-col justify-center px-4' : 'p-4'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                {product.original_price && (
                  <span className="text-gray-400 line-through text-sm">${product.original_price}</span>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm mb-2">
                <div className="flex text-orange-400">★★★★<span className="text-gray-200">★</span></div>
                <span className="text-orange-500 font-medium">{product.rating}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500">{product.orders} orders</span>
                {viewMode === 'list' && <span className="text-green-600 font-medium ml-2">{product.shipping}</span>}
              </div>

              <h3 className={`text-gray-800 font-medium mb-2 ${viewMode === 'grid' ? 'line-clamp-2 text-sm h-10' : 'text-lg hover:text-blue-600 cursor-pointer'}`}>
                {product.name}
              </h3>

              {viewMode === 'list' && (
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>
              )}

              <button className="text-blue-600 font-semibold text-sm hover:underline w-fit">
                <Link href={`/category/${product.name}`}>
                View details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* 3. Pagination Bar (As seen in image_792712.png) */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-end gap-4">
        <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-md overflow-hidden">
          {/* Show 10 Dropdown */}
          <select className="px-3 py-2 text-sm bg-white outline-none border-r border-gray-300">
            <option>Show 10</option>
            <option>Show 20</option>
          </select>

          {/* Page Numbers */}
          <div className="flex">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 border-r border-gray-300"
            >
              <ChevronLeft size={18} />
            </button>
            
          
              


            <button 
              
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}