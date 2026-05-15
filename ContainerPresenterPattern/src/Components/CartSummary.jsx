const CartSummary = ({ cart }) => {
  return (
    <div className="border-2 border-red-600 pb-20 pr-20 pl-20">
      <h1 className="text-2xl text-red-600">CART</h1>
      {cart.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};

export default CartSummary;
