import Banner from "@/component/home/Banner2";
import FeaturedSection from "@/component/home/FeaturedSection ";
import ProductTabs from "@/component/home/ProductTabs";
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
      <ProductTabs />
      <Banner />
    </>
  );
}
