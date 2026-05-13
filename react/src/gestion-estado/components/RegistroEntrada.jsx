import { useState } from 'react';

export default function RegistroEntrada() {
  const [nombrePila, setNombrePila] = useState('');
  const [apellidos, setApellidos] = useState('');

  const nombreCompleto = nombrePila + ' ' + apellidos;

  function handleNombrePilaChange(e) {
    setNombrePila(e.target.value);
  }

  function handleApellidosChange(e) {
    setApellidos(e.target.value);
  }

  return (
    <>
      <h2>Hagamos el registro</h2>
      <label>
        Nombre de pila:{' '}
        <input
          value={nombrePila}
          onChange={handleNombrePilaChange}
        />
      </label>&nbsp;
      <label>
        Apellidos:{' '}
        <input
          value={apellidos}
          onChange={handleApellidosChange}
        />
      </label>
      <p>
        Tu entrada será emitida a nombre de: <b>{nombreCompleto}</b>
      </p>
    </>
  );
}
