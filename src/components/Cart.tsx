import { useEffect, useState } from "react";

import CartList from "./CartList";
import Dialog from "./Dialog";
import DialogList from "./DialogList";

import { useSelectedItems } from "../hooks/useSelectedItems";
import { useTotal } from "../hooks/useTotal";
import { useSelectedMap } from "../hooks/useSelectedMap";
import { useCounterMap } from "../hooks/useCounterMap";

import "./cart-container.css";

function Cart() {
  const { selectedItems, setSelectedItems } = useSelectedItems();
  const { total, setTotal } = useTotal();
  const { setSelectedMap } = useSelectedMap();
  const { setCounterMap } = useCounterMap();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keyup", handleEscape);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keyup", handleEscape);
    }

    return () => {
      document.removeEventListener("keyup", handleEscape);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDialogOpen]);

  const toggleDialog = () => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
      return;
    }

    setIsDialogOpen(true);
  };

  const closeDialogAndRemoveInformation = () => {
    setTotal(0);
    setSelectedItems([]);
    setSelectedMap({});
    setCounterMap({});
    setIsDialogOpen(false);
  };

  return (
    <>
      <CartList />
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
      {isDialogOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsDialogOpen(false)}
          ></div>
          <Dialog isDialogOpen={isDialogOpen}>
            <img src="images/icon-order-confirmed.svg" alt="Order Confirmed" />
            <h1 className="text-customRose900 mt-2 text-3xl font-bold">
              Order Confirmed
            </h1>
            <h2 className="text-customRose500 mt-2 mb-7">
              We hope you enjoy your food
            </h2>
            <DialogList selectedItems={selectedItems} total={total} />
            <button
              type="button"
              className="text-customRose50 bg-customRed mt-5 h-13 w-full cursor-pointer rounded-3xl p-2"
              onClick={closeDialogAndRemoveInformation}
            >
              Start New Order
            </button>
          </Dialog>
        </>
      )}
    </>
  );
}

export default Cart;
