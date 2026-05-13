import { useState } from 'react';

export default function MostrarB() {
  const [mostrarB, setMostrarB] = useState(true);
  return (
    <div>
      <Contador />
      {mostrarB && <Contador />} 
      <label>
        <input
          type="checkbox"
          checked={mostrarB}
          onChange={e => {
            setMostrarB(e.target.checked)
          }}
        />
        Mostrar el segundo contador
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
