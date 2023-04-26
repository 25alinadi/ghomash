import React, {useEffect, useState} from "react";
import {TimerDiv} from "./TimerElements";
import {MdOutlineTimer} from "react-icons/md";

interface TimerProps{
    handleResend: any,
    start_seconds: number,
    start_minutes: number,
}

const Timer:React.FC<TimerProps> = ({handleResend, start_minutes = 0, start_seconds = 0}) => {
    const [seconds, setSeconds] = useState(start_seconds);
    const [minutes, setMinutes] = useState(start_minutes);

    const updateTime = () => {
        if (minutes === 0 && seconds === 0) {
            setSeconds(start_seconds);
            setMinutes(start_minutes);
            handleResend(true)
        }
        else {
            if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds - 1);
            }
        }
    }

    useEffect(() => {
        const timer = setInterval(updateTime, 1000)
        return () => {clearInterval(timer)}
    }, [seconds]);

    return(
        <React.Fragment>
            <TimerDiv className={"text-gray-400 text-xl"}>
                <span><MdOutlineTimer /></span>
                <span>{`${seconds} : 0${minutes}`}</span>
            </TimerDiv>
        </React.Fragment>
    )
}

export default Timer;