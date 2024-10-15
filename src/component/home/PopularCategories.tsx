import Image from "next/image";
import Link from "next/link";

function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: "T-Shirt",
      image: "/imgs/shop/category-thumb-1.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 2,
      name: "Bags",
      image: "/imgs/shop/category-thumb-2.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 3,
      name: "Sandan",
      image: "/imgs/shop/category-thumb-3.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 4,
      name: "Scarf Cap",
      image: "/imgs/shop/category-thumb-4.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 5,
      name: "Shoes",
      image: "/imgs/shop/category-thumb-5.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 6,
      name: "Pillowcase",
      image: "/imgs/shop/category-thumb-6.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 7,
      name: "Jumpsuits",
      image: "/imgs/shop/category-thumb-7.jpg",
      href: "/shop-grid-right",
    },
    {
      id: 8,
      name: "Hats",
      image: "/imgs/shop/category-thumb-8.jpg",
      href: "/shop-grid-right",
    },
  ];

  return (
    <section className="popular-categories section-padding mt-15 mb-25">
      <div className="container wow fadeIn animated">
        <h3 className="section-title mb-20">
          <span>Popular</span> Categories
        </h3>
        <div className="carausel-6-columns-cover position-relative">
          <div
            className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            id="carausel-6-columns-arrows"
          ></div>
          <div className="carausel-6-columns" id="carausel-6-columns">
            {categories.map((category) => (
              <div key={category.id} className="card-1">
                <figure className="img-hover-scale overflow-hidden">
                  <Link href={category.href}>
                    <div>
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={200} // Adjust according to your design
                        height={200} // Adjust according to your design
                        layout="responsive"
                      />
                    </div>
                  </Link>
                </figure>
                <h5>
                  <Link href={category.href}>
                    <span>{category.name}</span>
                  </Link>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
