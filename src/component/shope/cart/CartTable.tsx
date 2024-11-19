import CartItem from "./CartItem";
import { FC } from "react";

interface CartItemProps {
  id: number; // Unique identifier (updated to match Redux slice)
  imgSrcDefault: string; // Image URL
  title: string; // Product name
  price: number; // Product price
  quantity: number; // Quantity of the item
  selectedColor?: string; // Optional selected color
  selectedSize?: string; // Optional selected size
}

interface CartTableProps {
  items: CartItemProps[];
  onRemoveItem: (id: number) => void; // Identify item by `id` for removal
  onIncreaseQuantity: (id: number) => void; // Increase quantity by `id`
  onDecreaseQuantity: (id: number) => void; // Decrease quantity by `id`
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
          {items.map((item) => (
            <CartItem
              key={item.id}
              imageUrl={item.imgSrcDefault}
              productName={item.title}
              productUrl={`#`} // Replace with dynamic product URL if available
              price={Math.floor(item.price).toFixed(2)} // Ensure price is floored and formatted
              quantity={item.quantity}
              subtotal={Math.floor(item.price * item.quantity).toFixed(2)} // Calculate and format subtotal
              selectedColor={item.selectedColor}
              selectedSize={item.selectedSize}
              onRemove={() => onRemoveItem(item.id)}
              onIncreaseQuantity={() => onIncreaseQuantity(item.id)}
              onDecreaseQuantity={() => onDecreaseQuantity(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
