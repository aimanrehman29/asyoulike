import Footer from "@/components/footer";
import Header from "@/components/header";
import Icons from "@/components/icons";
import ProductGrid from "@/components/main";
import Navbar from "@/components/navbar";
import React from "react";

export default async function page() {
 
  return (
    <div>
      hi aimann rehman
       <Navbar />
      <Header />
      <ProductGrid/>
     <Icons/>
      <Footer/>
    </div>
  );
};


