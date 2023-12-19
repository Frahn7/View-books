import { SiBookstack } from "react-icons/si";
import { GrFormNext } from "react-icons/gr";

interface Props {
  name: string;
  mostrar: boolean;
  next?: boolean;
}

export const BotonLibros = ({ name, mostrar, next }: Props) => {
  return (
    <div>
      <button
        type="button"
        className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        {mostrar ? <SiBookstack className="mr-2 text-lg" /> : null}
        {name}
        {next ? <GrFormNext className="text-lg" /> : null}
      </button>
    </div>
  );
};
