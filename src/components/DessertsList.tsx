import { useState } from "react";

import DessertsItem from "./DessertsItem";

import type { Dessert } from "../models/Dessert";

import { DESSERTS } from "../services/api";

import { useCounterMap } from "../hooks/useCounterMap";
import { useSelectedMap } from "../hooks/useSelectedMap";

import "./desserts-list.css";

function DessertsList() {
  const [desserts] = useState<Dessert[]>(DESSERTS);

  const { selectedMap, setSelectedMap } = useSelectedMap();
  const { counterMap, setCounterMap } = useCounterMap();

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
        />
      ))}
    </div>
  );
}

export default DessertsList;
