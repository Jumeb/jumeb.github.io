"use client";

import React from "react";

import TopButton from "@/components/Buttons/TopButton.component";
import Navbar from "@/components/NavBar/Navbar.component";
import Footer from "@/section/Footer/Footer.section";
import { UseScrollPosition } from "@/utils/lib/UseScrollPosition";
import Aboutme from "@/section/AboutMe/Aboutme.section";
import MyWorks from "@/section/Works/Works.section";
import ThemeProvide from "@/components/Theme/ThemeProvider.component";

const Portfolio: React.FC = () => {
  const position = UseScrollPosition();
  return (
    <ThemeProvide>
      <>
        <Navbar position={position + 201} />
        <MyWorks />
        <Footer />
        <TopButton show={position > 200} />
      </>
    </ThemeProvide>
  );
};

export default Portfolio;
