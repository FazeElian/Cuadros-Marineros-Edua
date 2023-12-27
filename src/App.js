import { Routes, Route } from "react-router-dom";

// Componentes de vistas
  // Página Principal
  import { HomeView } from "./views/HomeView";

  // Cuadros Marineros
  import { SailorPaintingsView } from "./views/SailorPaintingsView";

  // Botes Marineros
  import { SailorBoatsView } from "./views/SailorBoatsView";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" index element={<HomeView />} />
        <Route path="/cuadros-marineros" element={<SailorPaintingsView />} />
        <Route path="/botes-marineros" element={<SailorBoatsView />} />
      </Route>
    </Routes>
  );
}

export default App;
