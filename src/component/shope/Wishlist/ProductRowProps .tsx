import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProductRowProps {
  imageUrl: string;
  productName: string;
  productUrl: string;
  price: number;
  stockStatus: string;
  inStock: boolean;
  actionLabel: string;
  onActionClick: () => void;
  onRemoveClick: () => void;
}

const ProductRow: FC<ProductRowProps> = ({
  imageUrl,
  productName,
  productUrl,
  price,
  stockStatus,
  inStock,
  actionLabel,
  onActionClick,
  onRemoveClick,
}) => {
  return (
    <tr>
      <td
        className="image product-thumbnail"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={imageUrl} alt={productName} width={100} height={100} />
      </td>
      <td className="product-des product-name">
        <h5 className="product-name">
          <Link href={productUrl}>{productName}</Link>
        </h5>
      </td>
      <td className="price" data-title="Price">
        <span>${price.toFixed(2)}</span>
      </td>
      <td className="text-center" data-title="Stock">
        <span
          className={
            inStock ? "color3 font-weight-bold" : "text-danger font-weight-bold"
          }
        >
          {stockStatus}
        </span>
      </td>
      <td className="text-right" data-title="Cart">
        <button className="btn btn-sm" onClick={onActionClick}
        style={{
          backgroundColor: inStock ? "#046963" : "#41506B",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        >
          {inStock ? (
            <i className="fi-rs-shopping-bag mr-5"></i>
          ) : (
            <i className="fi-rs-headset mr-5"></i>
          )}
          {actionLabel}
        </button>
      </td>
      <td className="action" data-title="Remove">
        <a href="#" onClick={onRemoveClick}>
          <i className="fi-rs-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default ProductRow;
