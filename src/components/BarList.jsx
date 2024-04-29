import React from 'react'
import { FaRegClock } from "react-icons/fa6"
import Timer from './Timer.jsx'

const BarList = () => {
    return (
        <div className="fixed top-0 left-0 flex justify-start items-center m-72 p-2 md:p-4 w-full">
            <img src="src\assets\logo_light.png" alt="Logo" className="w-48 h-auto" />
            {/* <div className="flex items-center ml-40"><FaRegClock className="text-gray-600 h-6 w-6" /><Timer duration={5*60*1000} /></div> */}
        </div>
    )
}

export default BarList