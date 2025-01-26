"use client";

import React, { useState } from "react";
import { FaSlidersH, FaThLarge, FaBars } from "react-icons/fa";

const FilterBar = () => {
  const [viewType, setViewType] = useState("grid");
  const [itemsToShow, setItemsToShow] = useState(16);
  const [sortOption, setSortOption] = useState("Default");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-[#FAF4F4] text-black gap-4">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        {/* Filter Button */}
        <button className="flex items-center gap-2 text-black hover:opacity-70">
          <FaSlidersH />
          <span className="font-medium">Filter</span>
        </button>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            className={`p-2 ${viewType === "grid" ? "bg-gray-200" : ""}`}
            onClick={() => setViewType("grid")}
          >
            <FaThLarge />
          </button>
          <button
            className={`p-2 ${viewType === "list" ? "bg-gray-200" : ""}`}
            onClick={() => setViewType("list")}
          >
            <FaBars />
          </button>
        </div>

        {/* Results Info */}
        <div className="text-gray-600 text-sm md:text-base">
          Showing 1–16 of 32 results
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        {/* Items Per Page Dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Show</span>
          <select
            className="p-1 border rounded-md text-sm md:text-base"
            value={itemsToShow}
            onChange={(e) => setItemsToShow(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
            <option value={32}>32</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Sort by</span>
          <select
            className="p-1 border rounded-md text-sm md:text-base"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
