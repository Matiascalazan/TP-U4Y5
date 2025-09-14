import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <h1>Bienvenido a la App de Tareas</h1>
      <p>Gestioná tus tareas y practicá Router, formularios y efectos.</p>
      <Link to="/tareas">Ir a la lista de tareas</Link>
    </section>
  );
}
