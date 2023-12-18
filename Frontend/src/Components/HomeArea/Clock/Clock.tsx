import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const [time, setTime] = useState("");

    useEffect(() => {

        const timerId = window.setInterval(() => {
            const now = new Date();
            const currentTime = now.toLocaleTimeString();
            setTime(currentTime);
            console.log("Testing");
        }, 1000);

        // Following return function will be invoked when react destroys this component:
        return () => {
            window.clearInterval(timerId);
        };

    }, []);

    return (
        <div className="Clock Box">
            <span>{time}</span>
        </div>
    );
}

export default Clock;
