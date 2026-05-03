import type { Dessert } from "../models/Dessert";

import "./dialog-list.css";

type DialogListType = {
  total: number;
  selectedItems: Dessert[];
};

function DialogList({ total, selectedItems }: DialogListType) {
  return (
    <div className="bg-customRose100 rounded-md p-5">
      <ul className="overflow-y-auto">
        {selectedItems.map((item: Dessert) => {
          return (
            <li key={item.id}>
              <div className="flex items-center justify-between p-2">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-16 w-16 rounded-md"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />
                  <div className="flex flex-col gap-y-1">
                    <h2 className="text-customRose900 font-bold">
                      {item.name}
                    </h2>
                    <div className="flex gap-x-3">
                      <span className="text-customRed">{item.quantity}x</span>
                      <span className="text-customRose300 -mr-1">
                        @${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-customRose500">
                  ${(item.quantity * item.price).toFixed(2)}
                </span>
              </div>
              <hr className="text-customRose900" />
            </li>
          );
        })}
      </ul>
      <div className="mt-4 flex items-baseline justify-between p-2">
        <span className="text-customRose900">Order Total</span>
        <span className="text-customRose900 font-bold">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default DialogList;
