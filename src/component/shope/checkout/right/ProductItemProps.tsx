import Image from "next/image";

interface ProductItemProps {
  imageSrc: string;
  productName: string;
  quantity: number;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  imageSrc,
  productName,
  quantity,
  price,
}) => {
  return (
    <tr>
      <td
        className="image product-thumbnail"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={imageSrc} alt={productName} width={80} height={80} />
      </td>
      <td>
        <h5>
          <a href="shop-product-full.html">{productName}</a>
        </h5>
        <span className="product-qty">x {quantity}</span>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default ProductItem;
