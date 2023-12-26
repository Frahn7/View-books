"use client";

import { CardEscritos } from "../components/ui/CardEscritos";

export default function Escritos() {
  return (
    <div
      className="bg-gradient-to-t from-gray-700 via-gray-900 to-black
    min-h-screen text-white w-full justify-center flex"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-mono text-center font-semibold py-14">
          Libros escritos
        </h1>
        <div className="flex-wrap flex flex-row gap-5 align-middle justify-center">
          <CardEscritos title="test" history="test para la history" />
          <CardEscritos title="test" history="test para la history" />
          <CardEscritos title="test" history="test para la history" />
          <CardEscritos title="test" history="test para la history" />
        </div>
      </div>
    </div>
  );
}
