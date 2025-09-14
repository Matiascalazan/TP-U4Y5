import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearTareaPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Crear Tarea | TP U4y5";
  }, []);

  const onSubmit = (data) => {
    // Enviamos la nueva tarea a /tareas mediante navigate state
    const nueva = { id: Date.now(), titulo: data.titulo };
    navigate("/tareas", { state: { nuevaTarea: nueva } });
  };

  return (
    <section>
      <h2>Crear Tarea</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="titulo">Título de la tarea</label><br />
          <input
            id="titulo"
            type="text"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && (
            <span style={{ color: "crimson", marginLeft: 8 }}>
              Este campo es obligatorio.
            </span>
          )}
        </div>
        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}
