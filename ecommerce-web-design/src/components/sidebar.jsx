"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SideBar() {
  const filterOptions = {
    categories: ["Mobile", "Tablets", "Laptops", "Accessories"],
    brands: ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"],
    features: ["Metallic", "8GB RAM", "Super power"]
  };

  const [openSections, setOpenSections] = useState({
    categories: true,
    brands: true,
    features: true,
    price: true,
    ratings: true
  });

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [price, setPrice] = useState(500);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    // Sidebar Container - Added border and light shadow
    <div className="w-full md:w-64 space-y-2 pr-4  sticky top-4 h-fit">
      
      {/* Category Section */}
      <div className="border-t border-gray-100 py-4">
        <button 
          className="flex justify-between items-center w-full cursor-pointer mb-3 group" 
          onClick={() => toggleSection('categories')}
        >
          <h3 className="font-semibold text-gray-800 text-[15px]">Category</h3>
          <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {openSections.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        
        {openSections.categories && (
          <ul className="space-y-2 text-gray-600">
            {filterOptions.categories.map((cat) => (
              <li key={cat} className="hover:text-blue-600 transition-all cursor-pointer text-[14px]">
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brands Section */}
      <div className="border-t border-gray-100 py-4">
        <button 
          className="flex justify-between items-center w-full cursor-pointer mb-3 group" 
          onClick={() => toggleSection('brands')}
        >
          <h3 className="font-semibold text-gray-800 text-[15px]">Brands</h3>
          <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {openSections.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        
        {openSections.brands && (
          <div className="space-y-2">
            {filterOptions.brands.map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600" />
                <span className="text-gray-600 group-hover:text-gray-900 text-[14px] transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="border-t border-gray-100 py-4">
        <button 
          className="flex justify-between items-center w-full cursor-pointer mb-4 group" 
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold text-gray-800 text-[15px]">Price Range</h3>
          <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {openSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>

        {openSections.price && (
          <div className="space-y-5 px-1">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="text-[12px] text-gray-400 mb-1 block">Min</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-blue-400 transition-all"
                  value={min}
                  placeholder='0'
                  onChange={(e) => setMin(Number(e.target.value))}
                />
              </div>
              <div className="flex-1">
                <label className="text-[12px] text-gray-400 mb-1 block">Max</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-200 p-2 rounded-lg text-sm outline-none focus:border-blue-400 transition-all"
                  value={max}
                  placeholder='9999'
                  onChange={(e) => setMax(Number(e.target.value))}
                />
              </div>
            </div>
            
            <input 
              type="range"
              min={min}
              max={max}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            
            <div className="flex justify-between items-center bg-blue-50/50 p-2 rounded-lg border border-blue-100">
               <span className="text-[13px] text-blue-700 font-medium">Value: <span className="font-bold">${price}</span></span>
               <button className="text-[13px] font-bold text-blue-600 hover:text-blue-800">Apply</button>
            </div>
          </div>
        )}
      </div>

      {/* Ratings Section */}
      <div className="border-t border-gray-100 py-4">
        <button 
          className="flex justify-between items-center w-full cursor-pointer mb-3 group" 
          onClick={() => toggleSection('ratings')}
        >
          <h3 className="font-semibold text-gray-800 text-[15px]">Ratings</h3>
          <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {openSections.ratings ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        
        {openSections.ratings && (
          <div className="space-y-2">
            {[5, 4, 3, 2].map((star) => (
              <label key={star} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600 cursor-pointer" />
                <div className="flex text-orange-400 text-sm">
                  {"★".repeat(star)}{"☆".repeat(5-star)}
                </div>
               
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}