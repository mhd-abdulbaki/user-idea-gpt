import { ReactNode, useEffect } from "react";

interface IProps {
  title: string;
  isOpen: boolean;
  openHandler: () => void;
  children: ReactNode;
}

export const ModalComponent = ({
  title,
  isOpen,
  openHandler,
  children,
}: IProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div
      onClick={openHandler}
      className={`${
        isOpen ? "fixed" : "hidden"
      } overflow-y-auto overflow-x-hidden  top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-screen bg-[#000000a7]`}
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-4  w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              onClick={openHandler}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
