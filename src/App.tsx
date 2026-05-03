import Content from "./components/Content";

import { SelectedItemsProvider } from "./contexts/SelectedItemsContext";
import { TotalProvider } from "./contexts/TotalContext";
import { SelectedMapProvider } from "./contexts/SelectedMapContext";
import { CounterMapProvider } from "./contexts/CounterMapContext";

import "./App.css";

function App() {
  return (
    <SelectedItemsProvider>
      <TotalProvider>
        <SelectedMapProvider>
          <CounterMapProvider>
            <Content />
          </CounterMapProvider>
        </SelectedMapProvider>
      </TotalProvider>
    </SelectedItemsProvider>
  );
}

export default App;
