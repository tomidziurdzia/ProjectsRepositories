import useProyectos from "../hooks/useProyectos";

const Proyectos = () => {
  const { proyectos } = useProyectos();
  console.log(proyectos);

  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? (
          <p>si hay</p>
        ) : (
          <p className="py-5 text-center text-gray600">No hay proyectos aún</p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
