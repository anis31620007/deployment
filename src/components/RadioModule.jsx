import React, { useState, useEffect, useRef } from 'react';

const RadioModule = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setShowAdditionalOptions(true); // Show additional options when a radio button is selected
    };

    return (
        <>
            <div>
                <input
                    type="radio"
                    id="Module"
                    name="Module"
                    value="Module"
                    checked={selectedOption === 'Club'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="Module">Module</label>
            </div>
                <div className='flex'>
                    <div style={{ marginRight: '10px' }}>
                        <select
                            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                            style={{ backgroundColor: '#f9fafb' }}
                            id="year"
                            name="year"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>year</option>
                            <option value="option1">1CP</option>
                            <option value="option2">2CP</option>
                            <option value="option3">1CS</option>
                            <option value="option3">2CS</option>
                            <option value="option3">3CS</option>
                        </select>
                        <label htmlFor="year"></label>
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <input
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                            style={{ backgroundColor: '#f9fafb' }}
                            type="text"
                            id="modulo"
                            name="modulo"
                            placeholder='module'
                        />
                        <label htmlFor="modulo"></label>
                    </div>
                    <div>
                        <select
                            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                            style={{ backgroundColor: '#f9fafb' }}
                            id="type"
                            name="type"
                            defaultValue=""
                        >
                            <option value="" disabled  hidden>type</option>
                            <option value="option1">Project</option>
                            <option value="option2">TP</option>
                            <option value="option2">TD</option>
                            <option value="option2">Presentation</option>
                        </select>
                        <label htmlFor="type"></label>
                    </div>
                </div>
        </>
    );
};

export default RadioModule;