import CartSummary from "./CartSummary";
import ProductCard from "./ProductCard";

const ProductListPresenter = ({ products, onAddToCart, cart, error }) => {
  if (error) return <div>{error}</div>;
  return (
    <div className="flex gap-6">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          ></ProductCard>
        ))}
      </div>
      <div>
        <CartSummary cart={cart}></CartSummary>
      </div>
    </div>
  );
};

export default ProductListPresenter;
