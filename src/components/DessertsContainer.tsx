import DessertsList from "./DessertsList";

import type { Dessert } from "../models/Dessert";

import "./desserts-container.css";

type DessertsContainerType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
  selectedMap: Record<string, boolean>;
  setSelectedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  counterMap: Record<string, number>;
  setCounterMap: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

function DessertsContainer({
  total,
  setTotal,
  setSelectedItems,
  selectedMap,
  setSelectedMap,
  counterMap,
  setCounterMap,
}: DessertsContainerType) {
  return (
    <article>
      <h1 className="text-customRose900 mb-5 text-5xl">Desserts</h1>
      <DessertsList
        setSelectedItems={setSelectedItems}
        total={total}
        setTotal={setTotal}
        selectedMap={selectedMap}
        setSelectedMap={setSelectedMap}
        counterMap={counterMap}
        setCounterMap={setCounterMap}
      />
    </article>
  );
}

export default DessertsContainer;
