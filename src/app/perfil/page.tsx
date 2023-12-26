import { BotonLibros } from "../components/ui/BotonLibros";
import { Campo } from "../components/ui/Campo";

export default function Perfil() {
  return (
    <div
      className="
    bg-gradient-to-t from-gray-700 via-gray-900 to-black
    h-screen text-white"
    >
      <div className="flex justify-center mb-7 text-2xl pt-[10%] font-mono font-semibold  leading-none tracking-tight">
        <h1 className="">PERFIL</h1>
      </div>
      <div className="flex justify-center w-full">
        <div className="w-[40%]">
          <Campo TitleLabel="Nombre" />
          <Campo TitleLabel="Gmail" />
          <div className="flex flex-row justify-center">
            <a href="/escritos">
              <BotonLibros name="Libros escritos" mostrar={true} />
            </a>
            <a href="/leidos">
              <BotonLibros name="Libros leidos" mostrar={true} />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="/more">
              <BotonLibros name="Explorar" mostrar={false} next={true} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
