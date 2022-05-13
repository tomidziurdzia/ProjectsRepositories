import { Link } from "react-router-dom";

const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-center text-4xl md:text-6xl">
        Reestablece tu contraseña y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="password"
            className="text-gray-600 block text-xl font-bold"
          >
            Nueva Contraseña
          </label>
          <input
            id="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="password"
            placeholder="Nueva contraseña"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="repetir-password"
            className="text-gray-600 block text-xl font-bold"
          >
            Repetir Contraseña
          </label>
          <input
            id="repetir-password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="password"
            placeholder="Repetir contraseña"
          />
        </div>
        <input
          type="submit"
          value="Reestablecer Contraseña"
          className="bg-sky-600 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link className="block text-center my-5 text-slate-500 text-sm" to="/">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 text-sm"
          to="/olvide-password"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  );
};

export default NuevoPassword;
