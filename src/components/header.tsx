import React from "react";

const Header = () => {
  return (
    <div>
    <div
      className="relative bg-cover  bg-center lg:w-[1280px] m-2 md:w-full overflow-hidden  h-[400PX] rounded"
      
      style={{
        backgroundImage: "url('/images/image copy 8.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white px-6 sm:px-12 py-8 sm:py-10 mt-6 sm:mt-10">
        <b>
          <h1 className="text-3xl sm:text-6xl font-bold">Shopping with us</h1>
        </b>
        <p className="mt-4 text-xl sm:text-3xl">Find Your Perfect Style Today.</p>
      </div>
    </div>
    </div>
  );
};

export default Header;

