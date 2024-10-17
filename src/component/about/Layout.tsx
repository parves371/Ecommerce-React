// components/Layout.tsx
import React from "react";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import BranchSection from "./BranchSection";
import TestimonialsSection from "./TestimonialsSection";
import ClientLogos from "./ClientLogos";

const Layout: React.FC = () => {
  return (
    <>
      <AboutSection />
      <TeamSection />
      <BranchSection />
      <TestimonialsSection />
      {/* <ClientLogos /> */}
    </>
  );
};

export default Layout;
