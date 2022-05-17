import React from "react";
import FormularioColaborador from "../components/FormularioColaborador";

const NuevoColaborador = () => {
  return (
    <>
      <h1 className="text-3xl font-black ">Añadir Colaborador</h1>
      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>
    </>
  );
};

export default NuevoColaborador;
