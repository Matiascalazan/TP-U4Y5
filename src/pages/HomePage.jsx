import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Bienvenido/a</h1>
        <p>Organizá y gestioná tus tareas de manera sencilla y eficiente</p>
        <p>Tareas · Rutinas · Ideas</p>
        <div style={{ display:"flex", gap: 8 }}>
          <Link to="/tareas" className="btn btn-ghost">Ver tareas</Link>
          <Link to="/crear" className="btn btn-primary">Crear tarea</Link>
        </div>
      </section>
    </>
  );
}
