import Image from "next/image";
import { FC } from "react";

interface CartItemProps {
  imageUrl: string;
  productName: string;
  productUrl: string;
  price: number;
  quantity: number;
  subtotal: number;
  onRemove: () => void;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

const CartItem: FC<CartItemProps> = ({
  imageUrl,
  productName,
  productUrl,
  price,
  quantity,
  subtotal,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <tr>
      <td className="image product-thumbnail">
        <Image src={imageUrl} alt={productName} width={100} height={100} />
      </td>
      <td className="product-des product-name">
        <h5 className="product-name">
          <a href={productUrl}>{productName}</a>
        </h5>
      </td>
      <td className="price" data-title="Price">
        <span>${price.toFixed(2)}</span>
      </td>
      <td className="text-center" data-title="Quantity">
        <div className="detail-qty border radius m-auto">
          <a href="#" className="qty-down" onClick={onDecreaseQuantity}>
            <i className="fi-rs-angle-small-down"></i>
          </a>
          <span className="qty-val">{quantity}</span>
          <a href="#" className="qty-up" onClick={onIncreaseQuantity}>
            <i className="fi-rs-angle-small-up"></i>
          </a>
        </div>
      </td>
      <td className="text-right" data-title="Subtotal">
        <span>${subtotal.toFixed(2)}</span>
      </td>
      <td className="action" data-title="Remove">
        <a href="#" onClick={onRemove}>
          <i className="fi-rs-trash"></i>
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
