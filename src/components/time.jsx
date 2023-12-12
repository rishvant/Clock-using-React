import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => {
            clearInterval(timer);
        }

    }, []);

    return <div>
        <p>
            This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </p>
    </div>
}

export default Time;