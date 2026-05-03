import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

import { useSelectedItems } from "../hooks/useSelectedItems";

import "./cart-container.css";

function CartContainer() {
  const { selectedItems } = useSelectedItems();

  return (
    <article className="ml-10 flex h-fit w-165 flex-col gap-y-3 rounded-xl bg-white p-8">
      <h1 className="text-customRed text-2xl font-bold">
        Your Cart ({selectedItems.length})
      </h1>
      {selectedItems.length === 0 ? <EmptyCart /> : <Cart />}
    </article>
  );
}

export default CartContainer;
