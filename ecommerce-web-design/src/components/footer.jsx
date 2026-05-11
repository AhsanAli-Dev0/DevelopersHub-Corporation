import React from "react";
import Container from "./container";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ChevronUp } from "lucide-react"; // Optional: for language dropdown arrow
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <Container>
        <div className="py-10 grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand Section - Full width on mobile, 3 cols on desktop */}
          <div className="col-span-2 md:col-span-3">
            <div className="footer-logo mb-4">
              <Image src="/brand/logo-colored.svg" width={150} height={40} alt="logo" />
            </div>
            <div className="footer-des mb-6">
              <p className="text-gray-600 text-base leading-relaxed max-w-[260px]">
                Best information about the company gies here but now lorem ipsum is
              </p>
            </div>
            {/* Social Icons */}
            <div className="social-links flex gap-2">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube].map((Icon, index) => (
                <div key={index} className="w-8 h-8 bg-[#BDC4CD] rounded-full flex items-center justify-center text-white hover:bg-gray-500 cursor-pointer transition-all">
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections - Standard 2 columns on desktop */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-dark mb-4">About</h4>
            <ul className="text-gray-500 space-y-2 text-base">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-dark mb-4">Partnership</h4>
            <ul className="text-gray-500 space-y-2 text-base">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-dark mb-4">Information</h4>
            <ul className="text-gray-500 space-y-2 text-base">
              <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-600 cursor-pointer">Money Refund</li>
              <li className="hover:text-blue-600 cursor-pointer">Shipping</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-dark mb-4">For users</h4>
            <ul className="text-gray-500 space-y-2 text-base">
              <li className="hover:text-blue-600 cursor-pointer">Login</li>
              <li className="hover:text-blue-600 cursor-pointer">Register</li>
              <li className="hover:text-blue-600 cursor-pointer">Settings</li>
              <li className="hover:text-blue-600 cursor-pointer">My Orders</li>
            </ul>
          </div>

          <div className="action-app col-span-2 md:col-span-2">
            <h4 className="font-bold text-dark mb-4">Get app</h4>
            <div className="flex flex-col gap-2">
              <Image src="/assets/Layout/Misc/2.png" width={124} height={42} alt="App Store" className="cursor-pointer object-contain" />
              <Image src="/assets/Layout/Misc/1.png" width={124} height={42} alt="Google Play" className="cursor-pointer object-contain" />
            </div>
          </div>
        </div>
      </Container>

      {/* Copyright Bottom Bar */}
      <div className="bg-[#EFF2F4] py-5">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-base">
              <p>© 2023 Ecommerce. </p>
            </div>
            <div className="language flex items-center gap-2">
               <Image src='/assets/Layout1/Image/flags/3.png' width={24} height={18} alt="flag" className="object-contain" />
                <select 
                  name="lang" 
                  id="lang" 
                  className="bg-transparent border-none text-gray-600 text-sm focus:ring-0 cursor-pointer outline-none font-medium"
                >
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                </select>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}