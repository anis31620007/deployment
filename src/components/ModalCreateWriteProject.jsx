import React from "react";
import RadioModule from "./RadioModule";
import RadioClub from "./RadioClub";
import Timer from "./Timer";

const ModalCreateWriteProject = () => {
  return (
    <>
      {/* Main modal */}
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-white-700">
            {/* Modal header */}
            <div className="flex flex-col items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <h3
                className="text-lg font-semibold flex flex-col items-center"
                style={{ color: "#263238" }}
              >
                Create a brainstorming session
              </h3>
              <h3
                className="text-lg font-semibold flex flex-col items-center text-gray-900 dark:text-white"
                style={{ color: "rgba(38, 50, 56, 0.2)" }}
              >
                Every thing begins with an idea
              </h3>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{ color: "#263238" }}
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="name"
                    required=""
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col">
                  <RadioModule />

                  <RadioClub />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{ color: "#263238" }}
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write project description here"
                    defaultValue={""}
                    autoComplete="off"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="sharing"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{ color: "#263238" }}
                  >
                    Share with
                  </label>
                  <input
                    type="email"
                    name="sharing"
                    id="sharing"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="ma_hammani@esi.dz"
                    required=""
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label
                    htmlFor="timer"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    style={{ color: "#263238" }}
                  >
                    Timer
                  </label>
                  <input
                    type="text"
                    name="timer"
                    id="timer"
                    className="bg-gray-50 border  text-gray-900 text-sm rounded-lg "
                    placeholder="between 5 & 10 min"
                    required=""
                    autoComplete="off"
                  />
                </div>
              </div>

              <button
                type="button"
                className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start session
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateWriteProject;
