import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function CrearTareaPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    document.title = "Crear Tarea | TP U4y5";
  }, []);

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
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
            placeholder="Ej: Estudiar hooks"
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