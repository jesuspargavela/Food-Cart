import { useState } from "react";

import DessertsContainer from "./DessertsContainer";
import CartContainer from "./CartContainer";

import type { Dessert } from "../models/Dessert";

import "./content.css";

function Content() {
  const [selectedItems, setSelectedItems] = useState<Dessert[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [selectedMap, setSelectedMap] = useState<Record<string, boolean>>({});
  const [counterMap, setCounterMap] = useState<Record<string, number>>({});

  return (
    <main className="mx-auto mt-5 h-screen w-7xl">
      <section className="flex">
        <DessertsContainer
          setSelectedItems={setSelectedItems}
          total={total}
          setTotal={setTotal}
          selectedMap={selectedMap}
          setSelectedMap={setSelectedMap}
          counterMap={counterMap}
          setCounterMap={setCounterMap}
        />
        <CartContainer
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          total={total}
          setTotal={setTotal}
          setSelectedMap={setSelectedMap}
          setCounterMap={setCounterMap}
        />
      </section>
    </main>
  );
}

export default Content;
