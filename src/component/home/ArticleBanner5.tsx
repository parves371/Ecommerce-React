// components/Section.tsx
import Article from "./Article";
import Banner5 from "./Banner5";

interface ArticleProps {
  imageUrl: string;
  linkUrl: string;
  title: string;
  currentPrice: number;
  originalPrice?: number;
}
const ArticleBanner5 = () => {
  const arricle1: ArticleProps[] = [
    {
      imageUrl: "/imgs/shop/thumbnail-3.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-4.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-5.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
  ];
  const arricle2: ArticleProps[] = [
    {
      imageUrl: "/imgs/shop/thumbnail-1.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-2.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-6.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
  ];
  const arricle3: ArticleProps[] = [
    {
      imageUrl: "/imgs/shop/thumbnail-7.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-8.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
    {
      imageUrl: "/imgs/shop/thumbnail-9.jpg",
      linkUrl: "/shop-product-right",
      title: "Fish Print Patched T-shirt",
      currentPrice: 238.85,
      originalPrice: 245.8,
    },
  ];

  return (
    <section className="mb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <Banner5
              imageUrl="/imgs/banner/banner-10.jpg"
              linkUrl="/shop-grid-right.html"
              title="Save 17% on All Items"
              subtitle="Shoes Zone"
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Deals & Outlet
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {arricle1.map((article, index) => (
                <Article
                  key={index}
                  imageUrl={article.imageUrl}
                  linkUrl={article.linkUrl}
                  title={article.title}
                  currentPrice={article.currentPrice}
                  originalPrice={article.originalPrice}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-sm-5 mb-md-0">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Top Selling
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {arricle2.map((article, index) => (
                <Article
                  key={index}
                  imageUrl={article.imageUrl}
                  linkUrl={article.linkUrl}
                  title={article.title}
                  currentPrice={article.currentPrice}
                  originalPrice={article.originalPrice}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title style-1 mb-30 wow fadeIn animated">
              Deals & Outlet
            </h4>
            <div className="product-list-small wow fadeIn animated">
              {arricle3.map((article, index) => (
                <Article
                  key={index}
                  imageUrl={article.imageUrl}
                  linkUrl={article.linkUrl}
                  title={article.title}
                  currentPrice={article.currentPrice}
                  originalPrice={article.originalPrice}
                />
              ))}
            </div>

            {/* Add more Article components as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleBanner5;
