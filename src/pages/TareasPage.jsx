import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TareasPage() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    document.title = "Tareas | TP U4y5";
    const id = setTimeout(() => {
      setTareas([
        { id: 1, titulo: "Terminar TP de unidad 4y5-Desarrollo Web" },
        { id: 2, titulo: "Estudiar para el parcial" },
        { id: 3, titulo: "Ordenar cuarto" },
      ]);
      setCargando(false);
    }, 1000);
    return () => clearTimeout(id);
  }, []);

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
    </section>
  );
}