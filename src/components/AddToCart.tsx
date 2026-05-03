import { useSelectedItems } from "../hooks/useSelectedItems";
import { useTotal } from "../hooks/useTotal";

import type { Dessert } from "../models/Dessert";

import "./add-to-cart.css";

type AddToCartType = {
  dessert: Dessert;
  selected: boolean;
  setSelected: (value: boolean) => void;
  counter: number;
  setCounter: (value: number) => void;
};

function AddToCart({
  dessert,
  selected,
  setSelected,
  counter,
  setCounter,
}: AddToCartType) {
  const { setSelectedItems } = useSelectedItems();
  const { total, setTotal } = useTotal();

  const updateSelectedItems = (newQuantity: number) => {
    setSelectedItems((prevState) => {
      const existing = prevState.find((item) => item.name === dessert.name);

      if (existing) {
        return prevState.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: newQuantity }
            : item,
        );
      } else {
        return [...prevState, { ...dessert, quantity: newQuantity }];
      }
    });
  };

  return (
    <div className="relative flex justify-center">
      {!selected ? (
        <button
          className="bg-customRose50 text-customRose900 absolute -top-6 flex w-45 cursor-pointer justify-center gap-3 rounded-3xl border p-3 font-bold"
          type="button"
          onClick={() => {
            setSelected(true);
            const newCounter = 1;
            setCounter(newCounter);
            updateSelectedItems(newCounter);
            const newTotal = total + dessert.price;
            setTotal(newTotal);
          }}
        >
          <img src="images/icon-add-to-cart.svg" alt="Add to Cart" />
          Add to Cart
        </button>
      ) : (
        <div className="bg-customRed text-customRose50 absolute -top-6 flex w-45 items-center justify-between gap-3 rounded-3xl border p-3 font-bold">
          <div
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-2xl border p-0.5"
            onClick={() => {
              if (counter > 1) {
                const newCounter = counter - 1;
                setCounter(newCounter);
                updateSelectedItems(newCounter);
                const newTotal = total - dessert.price;
                setTotal(newTotal);
              }
            }}
          >
            <img src="images/icon-decrement-quantity.svg" alt="Decrement" />
          </div>
          {counter}
          <div
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-2xl border p-0.5"
            onClick={() => {
              const newCounter = counter + 1;
              setCounter(newCounter);
              updateSelectedItems(newCounter);
              const newTotal = total + dessert.price;
              setTotal(newTotal);
            }}
          >
            <img src="images/icon-increment-quantity.svg" alt="Increment" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
