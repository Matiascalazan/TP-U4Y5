import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearTareaPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => { document.title = "Gestor de Tareas"; }, []);

  const onSubmit = (data) => {
    const nueva = { id: Date.now(), titulo: data.titulo.trim() };
    navigate("/tareas", { state: { nuevaTarea: nueva } });
  };

  return (
    <section>
      <h2>Crear Tarea</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titulo">Título de la tarea</label>
          <input
            id="titulo" className="input" type="text"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && <div className="error">Este campo es obligatorio.</div>}
        </div>
        <div style={{ display:"flex", gap: 8 }}>
          <button type="submit" className="btn btn-primary">Guardar</button>
          <button type="button" className="btn btn-ghost" onClick={()=>navigate(-1)}>Cancelar</button>
        </div>
      </form>
    </section>
  );
}

