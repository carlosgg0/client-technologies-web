import { useState } from 'react';

export default function ContadorJugadorClave() {
  const [esJugadorA, setEsJugadorA] = useState(true);
  return (
    <div>
      {esJugadorA ? (
        <Contador key="Teresa" persona="Teresa" />
      ):
      (
        <Contador key="Sabino" persona="Sabino" />
      )
    }
      <button onClick={() => {
        setEsJugadorA(!esJugadorA);
      }}>
       ¡Siguiente jugador!
      </button>
    </div>
  );
}

function Contador({ persona }) {
  const [puntuacion, setPuntuacion] = useState(0);

  return (
    <div>
      <h1>Puntuación de {persona}: {puntuacion}</h1>
      <button onClick={() => setPuntuacion(puntuacion + 1)}>
        Añadir uno
      </button>
    </div>
  );
}
