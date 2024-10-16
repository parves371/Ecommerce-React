import CartItem from "./CartItem";
import { FC } from "react";

interface CartTableProps {
  items: {
    imageUrl: string;
    productName: string;
    productUrl: string;
    price: number;
    quantity: number;
    subtotal: number;
  }[];
  onRemoveItem: (index: number) => void;
  onIncreaseQuantity: (index: number) => void;
  onDecreaseQuantity: (index: number) => void;
}

const CartTable: FC<CartTableProps> = ({
  items,
  onRemoveItem,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <div className="table-responsive">
      <table className="table shopping-summery text-center clean">
        <thead>
          <tr className="main-heading">
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <CartItem
              key={index}
              imageUrl={item.imageUrl}
              productName={item.productName}
              productUrl={item.productUrl}
              price={item.price}
              quantity={item.quantity}
              subtotal={item.subtotal}
              onRemove={() => onRemoveItem(index)}
              onIncreaseQuantity={() => onIncreaseQuantity(index)}
              onDecreaseQuantity={() => onDecreaseQuantity(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
