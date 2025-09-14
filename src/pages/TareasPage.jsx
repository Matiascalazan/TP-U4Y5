import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function TareasPage() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AppTareas | TP U4y5";

    const id = setTimeout(() => {
      setTareas([
        { id: 1, titulo: "Terminar tp 4y5-DesarrolloWeb" },
        { id: 2, titulo: "Estudiar para el parcial" },
        { id: 3, titulo: "Ordenar cuarto" },
      ]);
      setCargando(false);
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!cargando && location.state?.nuevaTarea) {
      const nueva = location.state.nuevaTarea;
      setTareas(prev =>
        prev.some(t => t.id === nueva.id) ? prev : [...prev, nueva]
      );
      navigate(".", { replace: true, state: null });
    }
  }, [cargando, location.state, navigate]);

  if (cargando) return <p>Cargando tareas...</p>;

  return (
    <section>
      <h2>Lista de Tareas</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas aún.</p>
      ) : (
        <ul>
          {tareas.map((t) => (
            <li key={t.id}>
              <Link to={`/tarea/${t.id}`}>{t.titulo}</Link>
            </li>
          ))}
        </ul>
      )}
      <p><Link to="/crear">+ Crear otra tarea</Link></p>
    </section>
  );
}
