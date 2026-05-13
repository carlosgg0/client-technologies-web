import { useContext } from 'react';
import { createContext } from 'react';

const ContextoNivel = createContext(1);

function Seccion({ nivel, children }) {

  return (
    <section className="section" style={{ border: '1px solid black', padding: '10px' }}>
      <ContextoNivel value={nivel}>
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

export default function Pagina() {
  return (
    <Seccion nivel={1}>
      <Cabecera>Título</Cabecera>
      <Seccion nivel={2}>
        <Cabecera>Cabecera</Cabecera>
        <Cabecera>Cabecera</Cabecera>
        <Cabecera>Cabecera</Cabecera>
        <Seccion nivel={3}>
          <Cabecera>Sub-cabecera</Cabecera>
          <Cabecera>Sub-cabecera</Cabecera>
          <Cabecera>Sub-cabecera</Cabecera>
          <Seccion nivel={4}>
            <Cabecera>Sub-sub-cabecera</Cabecera>
            <Cabecera>Sub-sub-cabecera</Cabecera>
            <Cabecera>Sub-sub-cabecera</Cabecera>
          </Seccion>
        </Seccion>
      </Seccion>
    </Seccion>
  );
}
