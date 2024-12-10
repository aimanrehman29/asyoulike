import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Left Section (Sidebar Trigger & Logo) */}
        <div className="flex items-center space-x-2">
          <SidebarTrigger className="" />
          <div className="hidden sm:block text-lg sm:text-2xl font-bold">SWU</div>
        </div>

        {/* Middle Section (Search Bar) */}
        <div className="flex-1 hidden sm:flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-32 sm:w-60 md:w-80 px-2 sm:px-4 py-1 sm:py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Right Section (Cart & Profile) */}
        <div className="flex items-center space-x-2">
          <button className="flex items-center justify-center py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:text-black w-8 sm:w-auto">
            🛒 <span className="hidden sm:inline pl-2"><b>Cart</b></span>
          </button>
          <button className="flex items-center justify-center py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:text-black w-8 sm:w-auto">
            👤 <span className="hidden sm:inline pl-2"><b>Profile</b></span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="flex sm:hidden px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>
  );
};

export default Navbar;
