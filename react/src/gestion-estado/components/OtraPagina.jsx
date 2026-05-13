import {useContext} from 'react';
import { createContext } from 'react';

const ContextoNivel = createContext(1);

function Seccion({ children }) {

  const nivel = useContext(ContextoNivel);

  return (
    <section className="section" style={{ border: '1px solid black', padding: '10px' }}>
    <ContextoNivel value={nivel + 1}>
      {children}
    </ContextoNivel>
    </section>
  );
}

function Cabecera({ children }) {

  const nivel = useContext(ContextoNivel);

  switch (nivel) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Nivel desconocido: ' + nivel);
  }
}

export default function OtraPagina() {
  return (
    <Seccion>
      <Cabecera>Título</Cabecera>
      <Seccion >
        <Cabecera>Cabecera</Cabecera>
        <Cabecera>Cabecera</Cabecera>
        <Cabecera>Cabecera</Cabecera>
        <Seccion>
          <Cabecera>Sub-cabecera</Cabecera>
          <Cabecera>Sub-cabecera</Cabecera>
          <Cabecera>Sub-cabecera</Cabecera>
          <Seccion>
            <Cabecera>Sub-sub-cabecera</Cabecera>
            <Cabecera>Sub-sub-cabecera</Cabecera>
            <Cabecera>Sub-sub-cabecera</Cabecera>
          </Seccion>
        </Seccion>
      </Seccion>
    </Seccion>
  );
}
