"use client";
import React, { useState } from "react";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import { UserRound, MessageSquareText, Heart, ShoppingCart, Menu, ChevronDown, Search } from "lucide-react";

export default function Header() {
  const [isShipOpen, setIsShipOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState("/assets/Layout1/Image/flags/10.png");

  const icons = [
    { id: 1, name: 'Profile', icon: <UserRound size={20} />, link: '/' },
    { id: 2, name: 'Message', icon: <MessageSquareText size={20} />, link: '/' },
    { id: 3, name: 'Order', icon: <Heart size={20} />, link: '/' },
    { id: 4, name: 'My Cart', icon: <ShoppingCart size={20} />, link: '/mycart' }
  ];

  const navLinks = [
    { name: "All category", href: "/category", hasIcon: true },
    { name: "Hot offers", href: "#" },
    { name: "Gift boxes", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Menu item", href: "#" },
    { name: "Help", href: "#", hasChevron: true },
  ];

  const countryImages = Array.from({ length: 9 }, (_, i) => ({
    img: `/assets/Layout1/Image/flags/${i + 1}`,
  }));

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Header */}
      <Container>
        <div className="py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4 order-1">
            <Menu className="md:hidden cursor-pointer" size={24} />
            <Link href="/">
              <Image 
                src="/brand/logo-colored.svg" 
                width={150} 
                height={40} 
                alt="logo" 
                className="w-[120px] md:w-[150px]"
              />
            </Link>
          </div>

          {/* Icons - Mobile pe text hide ho jayega */}
          <div className="flex items-center gap-2 md:gap-5 order-2 md:order-3">
            {icons.map((icon) => (
              <Link key={icon.id} href={icon.link} className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition">
                {icon.icon}
                <span className="text-[10px] hidden md:block mt-1">{icon.name}</span>
              </Link>
            ))}
          </div>

          {/* Search Bar - Mobile pe full width niche ayega */}
          <div className="w-full md:w-auto flex-1 md:max-w-[600px] order-3 md:order-2">
            <form className="flex w-full border-2 border-blue-600 rounded-md overflow-hidden">
              <input 
                type="search" 
                placeholder="Search" 
                className="flex-1 px-4 py-2 outline-none text-sm"
              />
              <select className="hidden lg:block border-l border-gray-300 bg-white px-2 text-sm outline-none">
                <option>All Categories</option>
              </select>
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition">
                <span className="hidden md:inline">Search</span>
                <Search size={18} className="md:hidden" />
              </button>
            </form>
          </div>
        </div>
      </Container>

      {/* Bottom Nav / Categories */}
      <nav className="border-t border-gray-100 py-3 hidden md:block">
        <Container>
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="flex items-center gap-1 whitespace-nowrap hover:text-blue-600 transition"
                >
                  {link.hasIcon && <Menu size={18} />}
                  {link.name}
                  {link.hasChevron && <ChevronDown size={14} className="text-gray-400" />}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>English, USD</span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
              <div 
                className="relative flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setIsShipOpen(true)}
                onMouseLeave={() => setIsShipOpen(false)}
              >
                <span>Ship to</span>
                <Image src={selectedFlag} width={20} height={15} alt="flag" className="rounded-sm" />
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isShipOpen ? 'rotate-180' : ''}`} />
                
                {isShipOpen && (
                  <div className="absolute top-full right-0 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                    <div className="max-h-48 overflow-y-auto p-2">
                      {countryImages.map((flag, idx) => (
                        <div 
                          key={idx} 
                          className="p-1 hover:bg-gray-100 cursor-pointer rounded"
                          onClick={() => setSelectedFlag(`${flag.img}.png`)}
                        >
                          <Image src={`${flag.img}.png`} width={30} height={20} alt="flag" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Horizontal Category Strip */}
      <div className="md:hidden border-t border-gray-100 flex gap-4 overflow-x-auto px-4 py-2 no-scrollbar text-sm text-gray-600 bg-gray-50">
        <span className="whitespace-nowrap bg-blue-100 text-blue-700 px-3 py-1 rounded-md">All category</span>
        <span className="whitespace-nowrap px-3 py-1">Gadgets</span>
        <span className="whitespace-nowrap px-3 py-1">Clothes</span>
        <span className="whitespace-nowrap px-3 py-1">Accessories</span>
      </div>
    </header>
  );
}