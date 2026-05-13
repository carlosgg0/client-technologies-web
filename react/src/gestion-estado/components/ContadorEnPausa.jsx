import { useState } from 'react';

export default function ContadorEnPausa() {
  const [enPausa, setEnPausa] = useState(false);
  return (
    <div>
      {enPausa ? (
        <p>
        Estamos en pausa, volveremos pronto.
        </p>
      ) : (
        <Contador /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={enPausa}
          onChange={e => {
            setEnPausa(e.target.checked)
          }}
        />
        Contador en pausa
      </label>
    </div>
  );
}

function Contador() {
  const [puntuacion, setPuntuacion] = useState(0);

  return (
    <div>
      <h1>{puntuacion}</h1>
      <button onClick={() => setPuntuacion(puntuacion + 1)}>
        Añadir uno
      </button>
    </div>
  );
}
