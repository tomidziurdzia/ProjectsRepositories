import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import { useEffect } from "react";

const Proyecto = () => {
  const params = useParams();

  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;

  console.log(proyecto);

  return cargando ? (
    "Cargando..."
  ) : (
    <div>
      <h1 className="font-black text-4xl">{nombre}</h1>
    </div>
  );
};

export default Proyecto;
