import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
