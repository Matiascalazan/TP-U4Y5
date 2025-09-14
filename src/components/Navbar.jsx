import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = { marginRight: 12, textDecoration: "none" };
  return (
    <nav style={{ padding: "12px 16px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/tareas" style={linkStyle}>Ver Tareas</Link>
      <Link to="/crear" style={linkStyle}>Crear Tarea</Link>
    </nav>
  );
}
