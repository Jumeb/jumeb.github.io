import React from "react";

import TopButton from "@/components/Buttons/TopButton.component";
import Navbar from "@/components/NavBar/Navbar.component";
import Footer from "@/section/Footer/Footer.section";
import { UseScrollPosition } from "@/utils/lib/UseScrollPosition";

const AboutMe: React.FC = () => {
  const position = UseScrollPosition();
  return (
    <div>
      <Navbar position={position} />
      <Footer />
      <TopButton show={position > 200} />
    </div>
  );
};

export default AboutMe;