import { useState } from 'react';

export default function FormularioOpinion() {
  const [texto, setTexto] = useState('');
  const [estado, setEstado] = useState('escribiendo');

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado('enviando');
    await sendMessage(texto);
    setEstado('enviado');
  }

  const estaEnviando = estado === 'enviando';
  const estaEnviado = estado === 'enviado';

  if (estaEnviado) {
    return <h1>¡Gracias por tus comentarios!</h1>
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <p>¿Qué te ha parecido tu estancia en el Hostal Luis Manuel?</p>
        <textarea
          disabled={estaEnviando}
          value={texto}
          onChange={e => setTexto(e.target.value)}
        />
        <br />
        <button
          disabled={estaEnviando}
          type="submit"
        >
          Send
        </button>
        {estaEnviando && <p>Enviando...</p>}
      </form>
    );
  }
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}
