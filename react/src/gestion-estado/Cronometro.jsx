import { useState } from "react";


function Clock() {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTimeout(() => setTime(new Date()), 1000);
    }

    return (
        <h3>HOLA: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</h3>
    );
}


export default function Cronometro() {
    return (
        <Clock />
    )
}