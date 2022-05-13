import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-center text-4xl md:text-6xl">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="email"
            className="text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="email"
            placeholder="Email de registro"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="password"
            placeholder="Password de registro"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-600 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 text-sm"
          to="olvide-password"
        >
          Olvide mi password
        </Link>
      </nav>
    </>
  );
};

export default Login;
