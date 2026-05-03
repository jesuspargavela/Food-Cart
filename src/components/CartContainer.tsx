import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

import type { Dessert } from "../models/Dessert";

import "./cart-container.css";

type CartContainerType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedItems: Dessert[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
  setSelectedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setCounterMap: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

function CartContainer({
  total,
  setTotal,
  selectedItems,
  setSelectedItems,
  setSelectedMap,
  setCounterMap,
}: CartContainerType) {
  return (
    <article className="ml-10 flex h-fit w-165 flex-col gap-y-3 rounded-xl bg-white p-8">
      <h1 className="text-customRed text-2xl font-bold">
        Your Cart ({selectedItems.length})
      </h1>
      {selectedItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          total={total}
          setTotal={setTotal}
          setSelectedMap={setSelectedMap}
          setCounterMap={setCounterMap}
        />
      )}
    </article>
  );
}

export default CartContainer;
