import { useState } from 'react';

function Panel({ titulo, children }) {
  const [estaActivo, setEstaActivo] = useState(false);
  return (
    <section className="panel">
      <h3>{titulo}</h3>
      {estaActivo ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setEstaActivo(true)}>
          Mostrar
        </button>
      )}
    </section>
  );
}

export default function PanelAcordeon() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel titulo="Sobre">
        Con una población de 2 millones de personas, Almaty es la ciudad más grande de Kazajistán. Desde 1929 hasta 1997, fue su capital.
      </Panel>
      <Panel titulo="Etimología">
        El nombre viene de <span lang="kk-KZ">алма</span>, la palabra kazaja para "manzana" y a menudo se traduce como "lleno de manzanas". De hecho, se cree que la región que rodea Almaty es el hogar ancestral de la manzana, y la silvestre <i lang="la">Malus sieversii</i> se considera un candidato probable para el ancestro de la manzana doméstica moderna.
      </Panel>
    </>
  );
}
