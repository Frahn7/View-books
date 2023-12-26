"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Recuperar() {
  const { push } = useRouter();

  const Volver = () => {
    push("/");
  };

  return (
    <div className="bg-gradient-to-t from-gray-700 via-gray-900 to-black h-screen align-middle items-center">
      <div className="bg-black">
        <button className="text-white pl-2 pt-3" type="button" onClick={Volver}>
          <IoIosArrowBack className="text-4xl" />
        </button>
      </div>
      <div className=" mt-20  flex justify-center ">
        <div className="text-white text-center">
          <h1 className="flex justify-center py-3 text-2xl font-bold pb-10">
            Recuperar contraseña
          </h1>
          <div className="w-full flex justify-center">
            <form className="bg-zinc-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="GMAIL"
                >
                  GMAIL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  id="GMAIL"
                  type="text"
                  placeholder="GMAIL"
                  required
                />
              </div>

              <div className="flex flex-col items-center justify-center gap-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Recuperar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
