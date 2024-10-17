import ProductItem from "./ProductItemProps";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageSrc: string;
}

interface OrderTableProps {
  products: Product[];
}

const OrderTable: React.FC<OrderTableProps> = ({ products }) => {
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="table-responsive order_table text-center">
        <table className="table">
          <thead>
            <tr>
              <th colSpan={2}>Product</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                imageSrc={product.imageSrc}
                productName={product.name}
                quantity={product.quantity}
                price={product.price}
              />
            ))}
            <tr>
              <th>SubTotal</th>
              <td colSpan={2}>${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td colSpan={2}>
                <em>Free Shipping</em>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td colSpan={2}>
                <span className="font-xl text-brand fw-900">
                  ${subtotal.toFixed(2)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
