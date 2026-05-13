import { useState } from 'react';

export default function OtroContadorEnIngles() {
  const [enIngles, setEnIngles] = useState(false);
  return (
    <div>
      {enIngles ? (
        <div>
        <Contador enIngles={true} /> 
        </div>
      ) : (
        <section>
        <Contador enIngles={false} /> 
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={enIngles}
          onChange={e => {
            setEnIngles(e.target.checked)
          }}
        />
        Contador en inglés
      </label>
    </div>
  );
}

function Contador({ enIngles }) {
  const [puntuacion, setPuntuacion] = useState(0);

  const etiqueta = enIngles ? 'Add one' : 'Añadir uno';

  return (
    <div>
      <h1>{puntuacion}</h1>
      <button onClick={() => setPuntuacion(puntuacion + 1)}>
        {etiqueta}
      </button>
    </div>
  );
}
