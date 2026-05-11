import { useState } from "react";


// En este ejemplo conseguimos que sólo un Panel esté activo a 
// la vez mediante la elevación del estado al componente padre 
// Accordion

function Panel({ activado, handleClick, title, children }) {

    // const [isActive, setIsActive] = useState(false);

    return (
        <section className="panel">
            <h3>{title}</h3>
            {activado ? (
                <p>{children}</p>
            ) : (
                <button onClick={handleClick}>
                    Mostrar
                </button>
            )}
        </section>
    );
}

export default function Accordion() {

    const [idActivado, setIdActivado] = useState(0);

    return (
        <>
            <h2>Alma Ata, Kazajistán</h2>
            <Panel
                activado={idActivado == 0}
                handleClick={() => setIdActivado(0)}
                title="Acerca de"
            >
                ...
            </Panel>
            <br />
            <Panel
                activado={idActivado == 1}
                handleClick={() => setIdActivado(1)}
                title="Etimología"
            >
                ...
            </Panel>
        </>
    );

}