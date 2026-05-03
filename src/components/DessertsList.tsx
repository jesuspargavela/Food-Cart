import { useState } from "react";

import DessertsItem from "./DessertsItem";

import type { Dessert } from "../models/Dessert";

import { DESSERTS } from "../services/api";

import "./desserts-list.css";

type DessertsListType = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setSelectedItems: React.Dispatch<React.SetStateAction<Dessert[]>>;
  selectedMap: Record<string, boolean>;
  setSelectedMap: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  counterMap: Record<string, number>;
  setCounterMap: React.Dispatch<React.SetStateAction<Record<string, number>>>;
};

function DessertsList({
  total,
  setTotal,
  setSelectedItems,
  selectedMap,
  setSelectedMap,
  counterMap,
  setCounterMap,
}: DessertsListType) {
  const [desserts] = useState<Dessert[]>(DESSERTS);

  return (
    <div className="grid grid-cols-3 gap-5">
      {desserts.map((d: Dessert) => (
        <DessertsItem
          key={d.id}
          dessert={d}
          selected={!!selectedMap[d.name]}
          setSelected={(value: boolean) =>
            setSelectedMap((prev) => ({ ...prev, [d.name]: value }))
          }
          counter={counterMap[d.name]}
          setCounter={(value: number) =>
            setCounterMap((prev) => ({ ...prev, [d.name]: value }))
          }
          setSelectedItems={setSelectedItems}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </div>
  );
}

export default DessertsList;
