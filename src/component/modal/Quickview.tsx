import React, { useEffect, useState } from "react";
import ImageGallery from "../shope/single-product/ImageGallery";
import BootstrapModal from "./Modal";
import ProductDetail from "../shope/single-product/ProductDetail";
import singleProduct from "@/../data/singleproduct-details.json";

interface Product {
  id: number;
  imgSrcDefault: string;
  title: string;
  brand: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  discount: number;
  description: string;
  warranty: string;
  returnPolicy: string;
  cashOnDelivery: boolean;
  colors: string[];
  sizes: string[];
  sku: string;
  tags: string[];
  stock: number;
}

interface ProductModalProps {
  isOpen: boolean;
  id: number | string;
  onClose: () => void;
}

const mainImages = [
  "/imgs/shop/product-16-1.jpg",
  "/imgs/shop/product-16-2.jpg",
  "/imgs/shop/product-16-3.jpg",
  "/imgs/shop/product-16-4.jpg",
  "/imgs/shop/product-16-5.jpg",
  "/imgs/shop/product-16-6.jpg",
  "/imgs/shop/product-16-7.jpg",
];

const thumbnails = [
  "/imgs/shop/thumbnail-3.jpg",
  "/imgs/shop/thumbnail-4.jpg",
  "/imgs/shop/thumbnail-5.jpg",
  "/imgs/shop/thumbnail-6.jpg",
  "/imgs/shop/thumbnail-7.jpg",
  "/imgs/shop/thumbnail-8.jpg",
  "/imgs/shop/thumbnail-9.jpg",
];

export const QuikView: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const productData = singleProduct.find((item) => item.id === `${id}`) as
      | Product
      | undefined;

    if (productData) {
      setProduct(productData);
    }
  }, [id]);

  if (!product) return null; // Ensure product is loaded before rendering

  return (
    <BootstrapModal isOpen={isOpen} onClose={onClose}>
      <div className="row">
        {/* Image Gallery */}
        <div className="col-md-6 col-sm-12">
          <ImageGallery mainImages={mainImages} thumbnails={thumbnails} />
        </div>

        {/* Product Details */}
        <div className="col-md-6 col-sm-12">
          <ProductDetail
            id={product.id}
            imgSrcDefault={product.imgSrcDefault}
            title={product.title}
            brand={product.brand}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            description={product.description}
            warranty={product.warranty}
            returnPolicy={product.returnPolicy}
            cashOnDelivery={product.cashOnDelivery}
            colors={product.colors}
            sizes={product.sizes}
          />
        </div>
      </div>
    </BootstrapModal>
  );
};

export default QuikView;
