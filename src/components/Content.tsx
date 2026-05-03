import DessertsContainer from "./DessertsContainer";
import CartContainer from "./CartContainer";

import "./content.css";

function Content() {
  return (
    <main className="mx-auto mt-5 h-screen w-7xl">
      <section className="flex">
        <DessertsContainer />
        <CartContainer />
      </section>
    </main>
  );
}

export default Content;
