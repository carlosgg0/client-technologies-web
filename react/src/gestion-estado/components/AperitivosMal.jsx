import { useState } from 'react';

const elemsIniciales = [
  { titulo: 'cacahuetes', id: 0 },
  { titulo: 'almendras', id: 1 },
  { titulo: 'pistachos', id: 2 },
];

export default function AperitivosMal() {
  const [elems, setElems] = useState(elemsIniciales);
  const [elemSeleccionado, setElemSeleccionado] = useState(
    elems[0]
  );

  function handleItemChange(id, e) {
    setElems(elems.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          titulo: e.target.value,
        };
      } else {
        return elem;
      }
    }));
  }

  return (
    <>
      <h2>¿Cuál es tu aperitivo favorito?</h2> 
      <ul>
        {elems.map((elem, index) => (
          <li key={elem.id}>
            <input
              value={elem.titulo}
              onChange={e => {
                handleItemChange(elem.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setElemSeleccionado(elem);
            }}>Elegir</button>
          </li>
        ))}
      </ul>
      <p>Has elegido {elemSeleccionado.titulo}.</p>
    </>
  );
}
