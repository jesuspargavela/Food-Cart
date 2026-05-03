import { useRef } from "react";

import CartList from "./CartList";
import Dialog from "./Dialog";
import DialogList from "./DialogList";

import type { Dessert } from "../models/Dessert";

import "./cart-container.css";

type CartType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedItems: Dessert[];
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
  setSelectedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  setCounterMap: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

function Cart({
  total,
  setTotal,
  selectedItems,
  setSelectedItems,
  setSelectedMap,
  setCounterMap,
}: CartType) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toggleDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current?.close();
      return;
    }

    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    setTotal(0);
    setSelectedItems([]);
    setSelectedMap({});
    setCounterMap({});
    dialogRef.current?.close();
  };

  return (
    <>
      <CartList
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        total={total}
        setTotal={setTotal}
        setSelectedMap={setSelectedMap}
        setCounterMap={setCounterMap}
      />
      <div className="bg-customRose100 text-customRose900 mt-5 flex justify-center gap-2 rounded-sm p-3">
        <img src="images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
        <p>
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button
        type="button"
        className="text-customRose50 bg-customRed mt-5 h-13 w-full cursor-pointer rounded-3xl p-2"
        onClick={toggleDialog}
      >
        Confirm Order
      </button>
      <Dialog ref={dialogRef}>
        <img src="images/icon-order-confirmed.svg" alt="Order Confirmed" />
        <h1 className="text-customRose900 text-3xl font-bold mt-2">
          Order Confirmed
        </h1>
        <h2 className="text-customRose500 mt-2 mb-7">We hope you enjoy your food</h2>
        <DialogList selectedItems={selectedItems} total={total} />
        <button
          type="button"
          className="text-customRose50 bg-customRed mt-5 h-13 w-full cursor-pointer rounded-3xl p-2"
          onClick={closeDialog}
        >
          Start New Order
        </button>
      </Dialog>
    </>
  );
}

export default Cart;
