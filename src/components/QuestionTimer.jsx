import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout,mode }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => { clearTimeout(timer) }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100)
        }, 100)

        return () => { clearInterval(interval) }
    }, []);

    return (
        <progress value={remainingTime} max={timeout} className={mode}/>
    );
}