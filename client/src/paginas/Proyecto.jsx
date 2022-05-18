import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import useAdmin from "../hooks/useAdmin";
import { useEffect } from "react";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import Tarea from "../components/Tarea";
import Alerta from "../components/Alerta";
import Colaborador from "../components/Colaborador";
import ModalEliminarColaborador from "../components/ModalEliminarColaborador";
import io from "socket.io-client";

let socket;

const Proyecto = () => {
  const params = useParams();

  const {
    obtenerProyecto,
    proyecto,
    cargando,
    handleModalTarea,
    alerta,
    submitTareasProyecto,
  } = useProyectos();

  const admin = useAdmin();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("abrir proyecto", params.id);
  }, []);

  useEffect(() => {
    socket.on("tarea agregada", (tareaNueva) => {
      if (tareaNueva.proyecto === proyecto._id) {
        submitTareasProyecto(tareaNueva);
      }
    });
  });

  const { nombre } = proyecto;

  if (cargando) return "Cargando...";
  const { msg } = alerta;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">{nombre}</h1>
        {admin && (
          <div className="flex items-center gap-2 text-gray-400 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <Link to={`/proyectos/editar/${params.id}`} className="font-bold">
              Editar
            </Link>
          </div>
        )}
      </div>

      {admin && (
        <button
          onClick={handleModalTarea}
          type="button"
          className="flex gap-2 items-center justify-center text-sm px-5 py-3 w-full md:w-auto mt-5 rounded-lg font-bold bg-sky-400 text-white text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Nueva Tarea
        </button>
      )}

      <p className="font-bold text-xl mt-10">Tareas del Proyecto</p>

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))
        ) : (
          <p className="text-center my-5 p-10">
            No hay tareas en este proyecto
          </p>
        )}
      </div>

      {admin && (
        <>
          <div className="flex items-center justify-between mt-10">
            <p className="font-bold text-xl mt-10">Colaboradores</p>
            <Link
              className="text-gray-500 font-bold hover:text-gray-600"
              to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
            >
              Añadir
            </Link>
          </div>

          <div className="bg-white shadow mt-10 rounded-lg">
            {proyecto.colaboradores?.length ? (
              proyecto.colaboradores?.map((colaborador) => (
                <Colaborador key={colaborador._id} colaborador={colaborador} />
              ))
            ) : (
              <p className="text-center my-5 p-10">
                No hay colaboradores en este proyecto
              </p>
            )}
          </div>
        </>
      )}

      <ModalFormularioTarea />
      <ModalEliminarTarea />
      <ModalEliminarColaborador />
    </>
  );
};

export default Proyecto;
