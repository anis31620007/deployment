import React, { useState ,useEffect} from 'react'
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoStopCircleSharp } from "react-icons/io5";

function StormingList() {
    const [brains, setBrains] = useState(() => {
        // Load the saved ideas from local storage
        const savedBrains = localStorage.getItem('stormingListBrains');
        return savedBrains ? JSON.parse(savedBrains) : [];
    });

    const [input, setInput] = useState('');

        useEffect(() => {
        // Save the ideas to local storage whenever it changes
        localStorage.setItem('stormingListBrains', JSON.stringify(brains));
        }, [brains]);
    

    // const addIdea = async () => {
    //     try {
    //         if (input.trim() !== '') {
    //             setBrains([...brains, { id: new Date(), brain: input }]);
    //             setInput('')
    //         }
            
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // };

    const addIdea = () => {
        if (input.trim() !== '') {
            setBrains([...brains, { id: new Date().getTime(), brain: input }]);
            setInput('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key behavior (form submission)
            addIdea();
        } // this function use enter key in ur keybord to click autaumatically the add button
    };

    const handleEditToggle = (id) => {
        setBrains(brains.map(idea => {
            if (idea.id === id) {
                return { ...idea, editable: !idea.editable };
            }
            return idea;
        }));
    };

    const handleEditChange = (id, newValue) => {
        setBrains(brains.map(idea => {
            if (idea.id === id) {
                return { ...idea, brain: newValue };
            }
            return idea;
        }));
    };

    const handleDeleteIdea = (id) => {
        setBrains(brains.filter(idea => idea.id !== id));
    };

    return (
        <div className='main-h-screen flex flex-col items-center justify-center gap-4 p-4 overflow-hidden'>
            <div className='centered-content p-6 rounded shadow-md w-full overflow-auto'>
                <h1 className='text-3xl font-bold text-center mb-4'>
                    <img src='..\src\assets\Brain session.svg' className='inline-block mr-2' alt='SVG Photo' />
                    Brain Session 
                </h1>
                <div className='flex mb-2'>
                    <input
                        type="text"
                        placeholder='Lets brain'
                        className='bg-white py-2 px-4 border rounded w-full focus:outline-none mr-2'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={addIdea} className='bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4'>
                        <IoAddOutline />
                    </button>
                </div>
                {
                    brains.length > 0 && (
                        <div className='bg-gray-100 mt-2 p-6 rounded shadow-md w-full'>
                            <ul>
                                {brains.map((brain, index) => (
                                    <li key={index} className='flex items-center justify-between bg-white p-3 rounded shadow-md mb-3'>
                                        {brain.editable ? (
                                            <input
                                                type="text"
                                                value={brain.brain}
                                                onChange={(e) => handleEditChange(brain.id, e.target.value)}
                                                className='bg-white py-2 px-4 border rounded w-full focus:outline-none mr-2'
                                            />
                                        ) : (
                                            <span className='text-lg'>{brain.brain}</span>
                                        )}
                                <div className='flex'>
                                <button onClick={() => handleEditToggle(brain.id)} className='mr-2 p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4'>{brain.editable ? <IoStopCircleSharp /> : <MdEdit />}</button>
                                <button onClick={() => handleDeleteIdea(brain.id)}  className='mr-2 p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4'><MdDelete /></button>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
                    )
                }
            </div>
        </div>
    );
}

export default StormingList;