import { useState } from "react";

function sendForm() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('¡Gracias por tu retroalimentación!');
        }, 1000);
    })
}

function PonyPisador() {

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        setMsg(await sendForm());
        setStatus('sent');
    }

    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState('typing');
    const [text, setText] = useState('');

    if (status === 'sent') {
        return (<h1>{msg}</h1>);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>¿Cómo fue tu estancia en el pony pisador?</label>
            <br />
            <textarea
                value={text}
                disabled={status === 'sending' ? true : false}
                onChange={(e) => setText(e.target.value)}
            />
            {status === 'sending' && <p>Enviando...</p>}
            <br />
            <button 
                type='submit'
                disabled={status === 'sending' || text.length === 0}
            >
                Enviar
            </button>
        </form>
    );
}

export default PonyPisador;