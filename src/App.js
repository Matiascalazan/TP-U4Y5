// src/App.js
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TareasPage from "./pages/TareasPage";
import CrearTareaPage from "./pages/CrearTareaPage";
import TareaDetallePage from "./pages/TareaDetallePage";

// ...
export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/crear" element={<CrearTareaPage />} />
          <Route path="/tarea/:id" element={<TareaDetallePage />} />
        </Routes>
      </main>
    </>
  );
}

