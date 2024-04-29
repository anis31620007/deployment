import React from "react";
import CardProject from "./CardProject";
import { GiBrainstorm } from "react-icons/gi";
import { FaBrain } from "react-icons/fa";
import { CiFolderOn } from "react-icons/ci";
import { useState } from 'react';
import ModalCreateStormProject from "./ModalCreateStormProject ";



const ContendMainPage = () => {

    // State to manage modal visibility
    const [isModalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className=" flex-col items-center justify-center grid grid-cols-3 gap-4 mb-4">
          <div
            className="flex flex-col items-center justify-center h-24 rounded-2xl bg-gray-50 dark:bg-gray-800"
            // style={{background:'rgba(22, 100, 242, 1)'}}
          >
            <FaBrain className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 " />
            <a href="#" onClick={openModal}>
                <p className="text-2xl text-gray-400 dark:text-gray-500 mt-2">
                    BrainStorming
                </p>
            </a>
           {/* Conditionally render the modal */}
           {isModalOpen && (
                <ModalCreateStormProject onClose={closeModal} />
            )}
          </div>
          <div className="flex flex-col items-center justify-center h-24 rounded-2xl bg-gray-50 dark:bg-gray-800">

            <GiBrainstorm className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
            <a href="#" onClick={openModal}>
                <p className="text-2xl text-gray-400 dark:text-gray-500 mt-2">
                    BrainWriting
                </p>
            </a>
           {/* Conditionally render the modal */}
           {isModalOpen && (
                <ModalCreateStormProject onClose={closeModal} />
            )}
            
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-xl text-gray-500 mr-2">My Projects</span>
          <div className="h-1 bg-gray-500 w-full"></div>
        </div>
        {/* <CardProject/> */}
        <div className="flex flex-col items-center justify-center h-full mt-10">
          <div className="flex items-center justify-center bg-gray-400 rounded-full w-40 h-40">
            <CiFolderOn className="text-gray-600 text-4xl" />
          </div>
          <h1 className="text-xl text-gray-500 mt-4">
            This is your projects listing... but it’s empty
          </h1>
          <h2 className="text-gray-500">
            You can have all your projects here if you have some start creating
            and come back later
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContendMainPage;
