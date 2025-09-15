import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TareasPage() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Gestor de Tareas";
    const id = setTimeout(() => {
      setTareas([
        { id: 1, titulo: "Terminar TP U4y5" },
        { id: 2, titulo: "Estudiar para el parcial de Desarrollo WEB" },
        { id: 3, titulo: "Gimnasio 7hs" },
      ]);
      setCargando(false);
    }, 900);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!cargando && location.state?.nuevaTarea) {
      const nueva = location.state.nuevaTarea;
      setTareas(prev => prev.some(t => t.id === nueva.id) ? prev : [...prev, nueva]);
      navigate(".", { replace: true, state: null });
    }
  }, [cargando, location.state, navigate]);

  return (
    <section>
      <h2 style={{ margin: "6px 0 12px" }}>Lista de Tareas</h2>

      {cargando ? (
        <ul className="list">
          {Array.from({length: 3}).map((_,i)=>(
            <li key={i} className="card"><div className="skeleton" /></li>
          ))}
        </ul>
      ) : tareas.length === 0 ? (
        <div className="card">No hay tareas aún.</div>
      ) : (
        <ul className="list">
          {tareas.map((t) => (
            <li key={t.id} className="card">
              <Link to={`/tarea/${t.id}`} style={{ textDecoration:"none" }}>
                {t.titulo}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

