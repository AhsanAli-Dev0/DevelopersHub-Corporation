"use client";
import { LayoutGrid, List, ChevronDown, Filter, X } from 'lucide-react';
import Link from 'next/link';

function FilterBar({ viewMode, setViewMode }) {
  const selectedFilters = ["Huawei", "Apple", "64GB"];

  return (
    <>
      {/* Breadcrumb - Hidden on very small mobile if needed, but keeping for context */}
      <div className="breadcrumb hidden md:block">
        <nav className="flex text-[#8B96A5] pb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center text-[#8B96A5]">
              <Link href="/" className="text-sm font-medium hover:text-blue-600">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronDown className="w-4 h-4 -rotate-90 text-gray-400" />
                <a href="#" className="ml-1 text-sm font-medium hover:text-blue-600">Clothings</a>
              </div>
            </li>
            {/* ... other items */}
          </ol>
        </nav>
      </div>

      {/* Main Filter Bar */}
      <div className="bg-white md:border border-gray-200 rounded-lg md:p-3 mb-2 md:mb-4 shadow-sm">
        
        {/* Desktop View: Item Count & Actions (Hidden on Mobile) */}
        <div className="hidden md:flex items-center justify-between">
          <div className="text-gray-700 text-[15px]">
            12,911 items in <span className="font-bold">Mobile accessory</span>
          </div>
          
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded" defaultChecked />
              Verified only
            </label>
            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none">
              <option>Newest</option>
              <option>Featured</option>
            </select>
            <div className="flex bordegir border-gray-300 rounded-md">
               <button onClick={() => setViewMode('grid')} className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : 'bg-white'}`}><LayoutGrid size={20} /></button>
               <button onClick={() => setViewMode('list')} className={`p-2 border-l ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}><List size={20} /></button>
            </div>
          </div>
        </div>

        {/* Mobile View: Sort, Filter & View Toggle (As per image) */}
        <div className="flex md:hidden items-center justify-between p-2 border-b border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2 flex-1">
            {/* Sort Button */}
            <button className="flex items-center justify-between gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm w-full max-w-[140px]">
              Sort: Newest <ChevronDown size={14} className="text-gray-400" />
            </button>
            
            {/* Filter Button */}
            <button className="flex items-center justify-between gap-2 border border-gray-300 rounded-md px-3 py-1.5 text-sm w-full max-w-[120px]">
              Filter (3) <Filter size={14} className="text-gray-400" />
            </button>
          </div>

          {/* View Toggle Icons */}
          <div className="flex items-center gap-1 ml-2">
            <button onClick={() => setViewMode('grid')} className={`p-1.5 ${viewMode === 'grid' ? 'text-black' : 'text-gray-400'}`}>
              <LayoutGrid size={22} />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-1.5 ${viewMode === 'list' ? 'text-black' : 'text-gray-400'}`}>
              <List size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Filter Tags (Horizontal Scroll on Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        {selectedFilters.map((filter, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 border border-blue-500 text-blue-600 bg-white px-3 py-1.5 rounded-md whitespace-nowrap text-sm"
          >
            {filter}
            <X size={14} className="cursor-pointer text-gray-400" />
          </div>
        ))}
        <button className="text-blue-600 text-sm font-medium ml-2 whitespace-nowrap">Clear all filters</button>
      </div>
    </>
  );
}

export default FilterBar;