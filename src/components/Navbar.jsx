import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <strong style={{ marginRight: 8 }}>Gestor de Tareas</strong>
        <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/tareas" className={({isActive}) => isActive ? "active" : ""}>Ver Tareas</NavLink>
        <NavLink to="/crear" className={({isActive}) => isActive ? "active" : ""}>Crear Tarea</NavLink>
      </div>
    </nav>
  );
}

