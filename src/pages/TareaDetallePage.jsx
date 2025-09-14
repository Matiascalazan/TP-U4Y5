import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

export default function TareaDetallePage() {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Detalle Tarea ${id} | TP U4y5`;
  }, [id]);

  return (
    <section>
      <h2>Detalles de la Tarea ID: {id}</h2>
      <p>Acá podrías cargar datos reales de la tarea {id} desde una API.</p>
      <Link to="/tareas">← Volver a Tareas</Link>
    </section>
  );
}