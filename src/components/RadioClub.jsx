import React, { useState, useEffect, useRef } from 'react';

const RadioClub = () => {
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
                    id="Club"
                    name="Club"
                    value="club"
                    checked={selectedOption === 'Club'}
                    onChange={handleOptionChange}
                />
                <label htmlFor="Club">Club</label>
            </div>
                <div className='flex'>
                    <div style={{ marginRight: '10px' }}>
                        <input
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                            style={{ backgroundColor: '#f9fafb' }}
                            type="text"
                            id="club name"
                            name="club name"
                            placeholder='club name'
                        />
                        <label htmlFor="club name"></label>
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <select
                            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-400 dark:hover:bg-gray-700"
                            style={{ backgroundColor: '#f9fafb' }}
                            id="activity"
                            name="activity"
                            defaultValue=""
                        >
                            <option value="" disabled hidden>activity</option>
                            <option value="option1">Event</option>
                            <option value="option2">Meet</option>
                            <option value="option2">internal activity</option>
                            <option value="option2">Teaser</option>
                            <option value="option2">Plan comm</option>
                        </select>
                        <label htmlFor="activity"></label>
                    </div>
                </div>
        </>
    );
};

export default RadioClub;