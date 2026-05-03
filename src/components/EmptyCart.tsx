import "./empty-cart.css";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center">
      <img
        className="h-42 w-42"
        src="images/illustration-empty-cart.svg"
        alt="Empty Cart"
      />
      <h2 className="text-customRose500 font-bold">
        Your added items will appear here
      </h2>
    </div>
  );
}

export default EmptyCart;
