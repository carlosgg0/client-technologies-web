import { useState } from 'react';

export default function CityQuizEstado() {
  const [respuesta, setRespuesta] = useState('');
  const [error, setError] = useState(null);
  const [estado, setEstado] = useState('escribiendo'); // 'escribiendo', 'enviando' o 'exito'

  if (estado === 'exito') {
    return <h1>¡Correcto!</h1>
  } else {
    async function handleSubmit(e) {
      e.preventDefault();
      setEstado('enviando');
      try {
        await submitForm(respuesta);
        setEstado('exito');
      } catch (err) {
        setEstado('escribiendo');
        setError(err);
      }
    }

    function handleTextareaChange(e) {
      setRespuesta(e.target.value);
    }

    return (
      <>
        <h2>Adivina la ciudad</h2>
        <p>
          ¿En qué ciudad hay una cartelera que convierte el aire en agua potable?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={respuesta}
            onChange={handleTextareaChange}
            disabled={estado === 'enviando'}
          />
          <br />
          <button disabled={
            respuesta.length === 0 ||
            estado === 'enviando'
          }>
            Submit
          </button>
          {error !== null &&
            <p className="Error">
              {error.message}
            </p>
          }
        </form>
      </>
    );
  }
}

function submitForm(respuesta) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const acierto = respuesta.toLowerCase() === 'lima';
      if (!acierto) {
        reject(new Error('Buen intento, pero la respuesta es incorrecta. ¡Inténtalo de nuevo!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
