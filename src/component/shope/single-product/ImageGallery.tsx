import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./ImageGallery.module.css";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface ImageGalleryProps {
  mainImages: string[];
  thumbnails: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  mainImages,
  thumbnails,
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImages[0]);

  const thumbnailSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const handleThumbnailClick = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div className={styles.detailGallery}>
      {/* Display the selected image */}
      <div className={styles.mainImageContainer}>
        <Image
          width={471}
          height={552}
          src={selectedImage}
          alt="Selected product image"
          className={styles.mainImage}
          priority
        />
      </div>

      {/* Conditional rendering for slider or static thumbnails */}
      {thumbnails.length > 3 && mainImages.length > 3 ? (
        <Slider {...thumbnailSettings} className={styles.sliderNavThumbnails}>
          {thumbnails.map((src, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(mainImages[index])}
            >
              <Image
                width={80}
                height={80}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex items-center gap-4">
          {thumbnails.map((src, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(mainImages[index])}
              className=""
            >
              <Image
                width={80}
                height={80}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
