import DessertsList from "./DessertsList";

import "./desserts-container.css";

function DessertsContainer() {
  return (
    <article>
      <h1 className="text-customRose900 mb-5 text-5xl">Desserts</h1>
      <DessertsList />
    </article>
  );
}

export default DessertsContainer;
