"use client";

import { MessageSquareMore, ShoppingBasketIcon, ShieldCheck, Globe, Heart, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState("/assets/slider/1.jpg");
  const [activeTab, setActiveTab] = useState("Description");

  const thumbnails = [
    "/assets/slider/1.jpg", "/assets/slider/2.jpg", "/assets/slider/3.jpg",
    "/assets/slider/4.jpg", "/assets/slider/5.jpg", 
  ];

  const likeProducts = [
    { title: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: "/assets/Image/cloth/7.jpg" },
    { title: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: "/assets/Image/cloth/1.jpg" },
    { title: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: "/assets/Image/cloth/3.jpg" },
    { title: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: "/assets/Image/cloth/2.jpg" },
    { title: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", img: "/assets/Image/cloth/5.jpg" },
  ];

  const relatedProduct = [
    { id: 1, name: "Smart watches", price: "$32.00-$40.00", image: "/assets/Image/cloth/6.jpg" },
    { id: 2, name: "Laptops", price: "$32.00-$40.00", image: "/assets/image/tech/8.jpg" },
    { id: 3, name: "GoPro Camera", price: "$32.00-$40.00", image: "/assets/image/tech/9.jpg" },
    { id: 4, name: "Headphones", price: "$32.00-$40.00", image: "/assets/Image/cloth/4.jpg" },
    { id: 5, name: "Canon Camreras", price: "$32.00-$40.00", image: "/assets/image/tech/10.jpg" },
    { id: 6, name: "Sofa Set", price: "$32.00-$40.00", image: "/assets/Image/interior/7.jpg" },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <div className="container mx-auto px-4 py-6">
        
        {/* Breadcrumb */}
        <nav className="flex text-[#8B96A5] text-sm mb-5 items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="text-gray-400">/</span>
          <Link href="#" className="hover:text-blue-600">Clothings</Link>
          <span className="text-gray-400">/</span>
          <Link href="#" className="hover:text-blue-600">Men's wear</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 font-medium">Summer clothing</span>
        </nav>

        {/* Main Product Card */}
        <div className="grid grid-cols-12 gap-6 bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-sm">
          
          {/* Left Column: Images */}
          <div className="col-span-12 md:col-span-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-white aspect-square flex items-center justify-center mb-4">
              <Image src={mainImage} alt="Main product" width={500} height={500} className="object-contain p-4" priority />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {thumbnails.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(src)}
                  className={`relative w-16 h-16 flex-shrink-0 border-2 rounded-md overflow-hidden transition-all ${mainImage === src ? "border-blue-500 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
                >
                  <Image src={src} fill alt={`Thumb ${index}`} className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Middle Column: Details */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-1 text-green-600 text-sm font-medium mb-2">
              <Check size={18} /> In stock
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight mb-4">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm">
              <div className="flex items-center text-orange-400">
                {[...Array(4)].map((_, i) => <span key={i} className="text-lg">★</span>)}
                <span className="text-gray-300 text-lg">★</span>
                <span className="ml-2 font-bold text-orange-600">9.3</span>
              </div>
              <span className="hidden md:block text-gray-300">|</span>
              <span className="text-gray-500 flex items-center gap-1"><MessageSquareMore size={16} /> 32 reviews</span>
              <span className="hidden md:block text-gray-300">|</span>
              <span className="text-gray-500 flex items-center gap-1"><ShoppingBasketIcon size={16} /> 154 sold</span>
            </div>

            {/* Price Cards */}
            <div className="grid grid-cols-3 gap-0 bg-[#FFF0DF] rounded-md mb-6 border border-orange-100 overflow-hidden">
              <div className="p-3 border-r border-orange-200">
                <p className="text-[#FA3434] font-bold text-lg">$98.00</p>
                <p className="text-[11px] text-gray-600 uppercase font-medium">50-100 pcs</p>
              </div>
              <div className="p-3 border-r border-orange-200">
                <p className="text-gray-900 font-bold text-lg">$90.00</p>
                <p className="text-[11px] text-gray-600 uppercase font-medium">100-700 pcs</p>
              </div>
              <div className="p-3">
                <p className="text-gray-900 font-bold text-lg">$78.00</p>
                <p className="text-[11px] text-gray-600 uppercase font-medium">700+ pcs</p>
              </div>
            </div>

            {/* Spec List */}
            <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
              <div className="flex"><span className="w-32 text-gray-500">Price:</span> <span className="text-gray-900">Negotiable</span></div>
              <div className="flex"><span className="w-32 text-gray-500">Material:</span> <span className="text-gray-900">Plastic material</span></div>
              <div className="flex"><span className="w-32 text-gray-500">Design:</span> <span className="text-gray-900">Modern nice</span></div>
              <div className="flex"><span className="w-32 text-gray-500">Warranty:</span> <span className="text-gray-900">2 years full warranty</span></div>
            </div>
          </div>

          {/* Right Column: Supplier */}
          <div className="col-span-12 md:col-span-3">
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-500 flex items-center justify-center rounded-md font-bold text-xl border border-blue-200">R</div>
                <div>
                  <p className="text-xs text-gray-500">Supplier</p>
                  <p className="text-sm font-semibold text-gray-800">Guanjoi Trading LLC</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-3">
                  <Image src='/assets/Layout1/Image/flags/10.png' width={22} height={16} alt="german" className="rounded-sm" />
                  Germany, Berlin
                </div>
                <div className="flex items-center gap-3"><ShieldCheck size={18} className="text-gray-400" /> Verified Seller</div>
                <div className="flex items-center gap-3"><Globe size={18} className="text-gray-400" /> Worldwide shipping</div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors mb-3 shadow-sm">Send inquiry</button>
              <button className="w-full bg-white text-blue-600 border border-gray-200 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm">Seller's profile</button>
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 text-blue-600 font-medium py-2 hover:bg-blue-50 rounded-md transition-all">
              <Heart size={18} /> Save for later
            </button>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-12 lg:col-span-9 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
              {["Description", "Reviews", "Shipping", "About seller"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-800"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-6">
              <div className="text-gray-600 leading-relaxed max-w-3xl mb-8">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="border border-gray-100 rounded-md overflow-hidden mb-8 max-w-2xl">
                {[
                  { label: "Model", value: "#8786867" },
                  { label: "Style", value: "Classic style" },
                  { label: "Memory", value: "36GB RAM" },
                ].map((item, i) => (
                  <div key={i} className="flex border-b border-gray-100 last:border-b-0">
                    <div className="w-40 bg-[#F7F7F7] p-3 text-gray-500 text-sm font-medium border-r border-gray-100">{item.label}</div>
                    <div className="p-3 text-gray-700 text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* You May Like Column */}
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">You may like</h3>
              <div className="space-y-5">
                {likeProducts.map((product, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 border border-gray-100 rounded-md flex-shrink-0 p-1 group-hover:border-blue-200">
                      <Image src={product.img} width={64} height={64} alt={product.title} className="object-contain h-full w-full" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-800 line-clamp-2 leading-snug group-hover:text-blue-600">{product.title}</p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Related products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {relatedProduct.map((product, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                <div className="bg-[#EEEEEE] rounded-lg p-4 flex items-center justify-center aspect-square mb-3 group-hover:bg-gray-200 transition-colors">
                  <Image src={product.image} alt={product.name} width={120} height={120} className="object-contain mix-blend-multiply h-full" />
                </div>
                <h4 className="text-sm text-gray-600 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">{product.name}</h4>
                <p className="text-sm text-gray-400 mt-1 font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Discount Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#237CFF] to-[#005ADE] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-md">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold">Super discount on more than 100 USD</h3>
            <p className="text-blue-100 opacity-90 mt-2">Have you ever finally just write dummy info here?</p>
          </div>
          <button className="bg-[#FF9017] hover:bg-orange-600 text-white px-8 py-3 rounded-md font-bold transition-all transform hover:scale-105 shadow-lg active:scale-95">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}