import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [passwordModificado, setPasswordModificado] = useState(false);

  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg, error: false });
      setPassword("");
      setRepetirPassword("");

      setPasswordModificado(true);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-black text-center text-4xl md:text-6xl">
        Reestablece tu contraseña y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      {tokenValido && (
        <form
          className="my-10 bg-white shadow rounded-lg p-10"
          onSubmit={handleSubmit}
        >
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
              placeholder="Repetir contraseña"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Reestablecer Contraseña"
            className="bg-sky-600 w-full py-3 text-white font-bold rounded hover:cursor-pointer hover:bg-sky-700 transition-colors"
          />
        </form>
      )}
      {passwordModificado && (
        <Link className="block text-center my-5 text-slate-500 text-sm" to="/">
          Inicia Sesión
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
