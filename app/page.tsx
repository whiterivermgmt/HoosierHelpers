"use client";

import React, { useState } from "react";
import MenuGallery from "@/components/ui/MenuGallery";
import EventsBanner from "@/components/ui/EventsBanner";
import Calendar from "@/components/ui/Calender";
import Reviews from "@/components/ui/Reviews";
import SocialMediaHeader from "@/components/ui/SocialMediaHeader";
import HomeShow from "@/components/ui/HomeShow";
import HomeGallery from "@/components/ui/HomeGallery";
import Locations from "@/components/ui/Locations";
import HeroBanner from "@/components/ui/HeroBanner";
import WhyEscos from "@/components/ui/WhyEscos";
import CTABanner from "@/components/ui/CTAbanner";

const HomePage = () => {
  return (
    <main className="flex flex-col">

      {/* Hero — flush to header, no gap */}
      <HeroBanner />

      {/* Every section flows directly, no wrappers adding margin */}
      <Locations />
      <WhyEscos />
      <HomeShow />
      <Calendar />
      <HomeGallery />
      <CTABanner />

    </main>
  );
};

export default HomePage;