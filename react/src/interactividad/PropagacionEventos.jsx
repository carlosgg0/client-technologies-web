function BotonAlerta({ mensaje, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation(); // Con esto evitamos el manejador del Componente padre
            alert(mensaje);
        }}>
            {children}
        </button>
    )
}

function BarraTareas() {
    return (
        <div onClick={() => alert("Pulsado en la barra de tareas!")}>
            <BotonAlerta mensaje={"Reproduciendo"}>
                Reproducir película
            </BotonAlerta>
            <BotonAlerta mensaje={"Subiendo"}>
                Subir imagen
            </BotonAlerta>
        </div>
    );
}

export default BarraTareas;