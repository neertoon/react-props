import { useState, useRef } from 'react';
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    let dialog = useRef();
    const [ timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime  * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => {
                return prevTimeRemaining - 10;
            });
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop :  handleStart}>
                        {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : ''}>
                    {timerIsActive ? 'Time is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}