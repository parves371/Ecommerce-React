import Banner from "@/component/home/Banner2";
import Banners from "@/component/home/Banner3";
import Banner4 from "@/component/home/Banner4";
import DealsSection from "@/component/home/DealsSection";
import FeaturedSection from "@/component/home/FeaturedSection ";
import BlogAndOffers from "@/component/home/FromBlog";
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
      {/* <PopularCategories /> */}
      <Banners />
      <DealsSection />
      {/* <BlogAndOffers /> */}
      <Banner4 />
    </>
  );
}
