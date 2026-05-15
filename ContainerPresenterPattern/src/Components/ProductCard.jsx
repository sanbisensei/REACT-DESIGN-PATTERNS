const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className="border-2 rounded-2xl border-b-blue-100 m-2 p-10"
      key={product.id}
    >
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <img src={product.imageUrl} alt="" />
      {product.tags.map((tag) => (
        <span className="p-1" key={tag}>
          {tag}
        </span>
      ))}
      <br />
      <button
        onClick={() => onAddToCart(product)}
        className="border-2 border-amber-50 hover:border-fuchsia-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
