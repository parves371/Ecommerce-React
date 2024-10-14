import FeaturedSection from "@/component/home/FeaturedSection ";
import Header from "@/component/layout/Header";
import MobileHeader from "@/component/layout/MobileHeader";

export default function Home() {
  return (
    <>
      {/* <Modal /> */}
      <Header />
      <MobileHeader />
      {/* <HomeSlider /> */}
      <FeaturedSection />
    </>
  );
}
