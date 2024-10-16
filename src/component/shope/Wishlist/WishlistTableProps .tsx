import { FC } from "react";
import ProductRow from "./ProductRowProps ";

interface WishlistTableProps {
  products: {
    imageUrl: string;
    productName: string;
    productUrl: string;
    price: number;
    stockStatus: string;
    inStock: boolean;
    actionLabel: string;
  }[];
  onActionClick: (index: number) => void;
  onRemoveClick: (index: number) => void;
}

const WishlistTable: FC<WishlistTableProps> = ({
  products,
  onActionClick,
  onRemoveClick,
}) => {
  return (
    <div className="table-responsive">
      <table className="table shopping-summery text-center">
        <thead>
          <tr className="main-heading">
            <th scope="col" colSpan={2}>
              Product
            </th>
            <th scope="col">Price</th>
            <th scope="col">Stock Status</th>
            <th scope="col">Action</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <ProductRow
                key={index}
                imageUrl={product.imageUrl}
                productName={product.productName}
                productUrl={product.productUrl}
                price={product.price}
                stockStatus={product.stockStatus}
                inStock={product.inStock}
                actionLabel={product.actionLabel}
                onActionClick={() => onActionClick(index)}
                onRemoveClick={() => onRemoveClick(index)}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistTable;
