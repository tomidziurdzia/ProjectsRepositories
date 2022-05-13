import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña es muy corta",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario en al API
    console.log("creando");
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-center text-4xl md:text-6xl">
        Crea tu cuenta y adminisstra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            htmlFor="nombre"
            className="text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className="text-gray-600 block text-xl font-bold"
          >
            Contraseña
          </label>
          <input
            id="password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            type="password"
            placeholder="Contraseña de registro"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            placeholder="Password de registro"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-sky-600 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
      {msg && <Alerta alerta={alerta} />}
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

export default Registrar;
