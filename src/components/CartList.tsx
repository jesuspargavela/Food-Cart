import { useCounterMap } from "../hooks/useCounterMap";
import { useSelectedItems } from "../hooks/useSelectedItems";
import { useSelectedMap } from "../hooks/useSelectedMap";
import { useTotal } from "../hooks/useTotal";

import type { Dessert } from "../models/Dessert";

import "./cart-list.css";

function CartList() {
  const { selectedItems, setSelectedItems } = useSelectedItems();
  const { total, setTotal } = useTotal();
  const { setSelectedMap } = useSelectedMap();
  const { setCounterMap } = useCounterMap();

  return (
    <>
      <ul>
        {selectedItems.map((item: Dessert) => {
          return (
            <li key={item.id}>
              <div className="flex items-baseline justify-between">
                <div className="flex flex-col gap-y-1">
                  <h2 className="text-customRose900 font-bold">{item.name}</h2>
                  <div className="flex gap-x-3">
                    <span className="text-customRed">{item.quantity}x</span>
                    <span className="text-customRose300 -mr-1">
                      @${item.price.toFixed(2)}
                    </span>
                    <span className="text-customRose500">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="h-3 w-3 cursor-pointer rounded-xl border">
                  <img
                    className="flex items-center justify-center"
                    src="images/icon-remove-item.svg"
                    alt="Remove item"
                    onClick={() => {
                      const newTotal = total - item.quantity * item.price;
                      setTotal(newTotal);
                      setSelectedItems(
                        selectedItems.filter((i: Dessert) => i.id !== item.id),
                      );
                      setSelectedMap((prev) => ({
                        ...prev,
                        [item.name]: false,
                      }));
                      setCounterMap((prev) => ({
                        ...prev,
                        [item.quantity]: 1,
                      }));
                    }}
                  />
                </div>
              </div>
              <hr className="text-customRose100" />
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex items-baseline justify-between">
        <span className="text-customRose900">Order Total</span>
        <span className="text-customRose900 font-bold">
          ${total.toFixed(2)}
        </span>
      </div>
    </>
  );
}

export default CartList;
