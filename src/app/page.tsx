import ArticleBanner5 from "@/component/home/ArticleBanner5";
import Banner from "@/component/home/Banner2";
import Banners from "@/component/home/Banner3";
import Banner4 from "@/component/home/Banner4";
import DealsSection from "@/component/home/DealsSection";
import FeaturedSection from "@/component/home/FeaturedSection ";
import PopularCategories from "@/component/home/PopularCategories";
import ProductTabs from "@/component/home/ProductTabs";
import Footer from "@/component/layout/Footer";
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
      <PopularCategories />
      <Banners />
      <DealsSection />
      {/* <BlogAndOffers /> */}
      <Banner4 />
      <ArticleBanner5 />
      <Footer />
    </>
  );
}
