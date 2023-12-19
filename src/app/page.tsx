"use client";

import { useRouter } from "next/navigation";
import { Ingresar } from "./components/ui/ingresarCon";

export default function Home() {
  const { push } = useRouter();

  const Loged = (e: any) => {
    e.preventDefault();
    let name = e.target.elements.username.value;
    let pasword = e.target.elements.password.value;
    if (name.length > 0 && pasword.length > 0) {
      push("/perfil");
    }
  };

  return (
    <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black h-screen align-middle flex justify-center items-center flex-col">
      <div className="text-white text-center">
        <h1 className="flex justify-center py-3 text-2xl font-bold pb-10">
          Inicia sesión
        </h1>
        <div className="w-full flex justify-center">
          <form
            className="bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={Loged}
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Clave
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                required
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                INGRESAR
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/recuperar"
              >
                Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
      <Ingresar />
    </div>
  );
}
