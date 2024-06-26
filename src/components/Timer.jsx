import React, {useState,useEffect} from 'react'

const Timer = ({ duration }) => {
    const [time, setTime] = useState(duration);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time - 1000);
    //     }, 1000);
    // }, [time]);

    const getFormattedTime = ((millisecond) => {
        if(millisecond > 10*60*1000){ setTime(5*60*1000)}
        let total_seconds = parseInt(Math.floor(millisecond / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));
        let seconds = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);
        // return `${days}: ${hours}: ${minutes}: ${seconds}`;
        return `${minutes} : ${seconds}`;
    });

    return (
        <>
        {getFormattedTime(time)}
        </>
    )
    }

export default Timer;   