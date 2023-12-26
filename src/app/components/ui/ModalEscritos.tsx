import { useState } from "react";

interface Props {
  title: string;
  description: string;
  Modal: boolean;
}

export const ModalEscritos = ({ title, description, Modal }: Props) => {
  const [openModal, setopenModal] = useState(Modal);

  return (
    <div>
      {openModal ? (
        <div className="fixed p-[50px] top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] ">
          <div className=" bg-white rounded-lg shadow dark:bg-gray-700  ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={() => {
                  setopenModal(false);
                  console.log("false");
                }}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only"></span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4 min-h-[450px] ">
              <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
