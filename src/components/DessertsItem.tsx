import AddToCart from "./AddToCart";

import type { Dessert } from "../models/Dessert";

import "./desserts-item.css";

type DessertItemType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  dessert: Dessert;
  selected: boolean;
  setSelected: (value: boolean) => void;
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
  counter: number;
  setCounter: (value: number) => void;
};

function DessertsItem({
  total,
  setTotal,
  dessert,
  selected,
  setSelected,
  setSelectedItems,
  counter,
  setCounter,
}: DessertItemType) {
  return (
    <div className="flex flex-col">
      <img
        className={`rounded-md ${selected ? "border-customRed border-3" : "border-none"}`}
        src={dessert.image.desktop}
        alt={dessert.name}
      />
      <AddToCart
        dessert={dessert}
        selected={selected}
        setSelected={setSelected}
        counter={counter}
        setCounter={setCounter}
        setSelectedItems={setSelectedItems}
        total={total}
        setTotal={setTotal}
      />
      <div className="mt-7">
        <h3 className="text-customRose500">{dessert.category}</h3>
        <h2 className="text-customRose900 font-bold">{dessert.name}</h2>
        <p className="text-customRed">${dessert.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default DessertsItem;
