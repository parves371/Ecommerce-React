import Image from "next/image";

interface FeatureItemProps {
  imageSrc: string;
  altText: string;
  label: string;
  bgColorClass: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imageSrc,
  altText,
  label,
  bgColorClass,
}) => {
  return (
    <div className="banner-features wow fadeIn animated hover-up">
      <Image
        src={imageSrc}
        alt={altText}
        width={152}
        height={105}
        layout="responsive"
      />
      <h4 className={bgColorClass}>{label}</h4>
    </div>
  );
};

export default FeatureItem;
