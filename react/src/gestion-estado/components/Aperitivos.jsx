import { useState } from 'react';

const elemsIniciales = [
  { titulo: 'cacahuetes', id: 0 },
  { titulo: 'almendras', id: 1 },
  { titulo: 'pistachos', id: 2 },
];

export default function Aperitivos() {
  const [elems, setElems] = useState(elemsIniciales);
  const [indSeleccionado, setIndSeleccionado] = useState(0);

  const elemSeleccionado = elems.find(elem =>
    elem.id === indSeleccionado
  );

  function handleItemChange(id, e) {
    setElems(elems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          titulo: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>¿Cuál es tu aperitivo favoritooo?</h2> 
      <ul>
        {elems.map((elem) => (
          <li key={elem.id}>
            <input
              value={elem.titulo}
              onChange={e => {
                handleItemChange(elem.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setIndSeleccionado(elem.id);
            }}>Elegir</button>
          </li>
        ))}
      </ul>
      <p>Has elegido {elemSeleccionado.titulo}.</p>
    </>
  );
}
