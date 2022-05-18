import { useEffect } from "react";
import PreviewProyecto from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyectos";
import Alerta from "../components/Alerta";

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos();

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>

      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="py-5 text-center text-gray600">No hay proyectos aún</p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
