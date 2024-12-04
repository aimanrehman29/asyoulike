import React from "react";
import {SidebarTrigger} from "@/components/ui/sidebar";
import { ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
       <div className="flex items-center justify-between px-6 py-2 bg-white shadow-md fixed top-0 w-full z-10">
        {/* Left Section (Sidebar Trigger & Star Icon) */}
        <div className="flex items-center space-x-2">
          <SidebarTrigger className="" />
          <div className="hidden sm:block text-2xl"><b>SWU</b></div>
          <div className="hidden sm:block text-2xl"><ShoppingCart /></div> 
        </div>
        {/* Middle Section (Search Bar) */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder=" Search..."
            className="w-32 sm:w-60 md:w-80 px-2 sm:px-4 py-1 sm:py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Right Section (Cart & Profile) */}
        <div className="flex justify-end space-x-2 sm:space-x-4">
          <button className="py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:text-black w-8 sm:w-[100px]">
            🛒 <span className="hidden sm:inline"><b>Cart</b></span>
          </button>
          <button className="py-2 bg-white text-black rounded-md hover:bg-gray-100 hover:text-black w-8 sm:w-[150px] lg:mr-10">
            👤 <span className="hidden sm:inline"><b>Profile</b></span>
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;



