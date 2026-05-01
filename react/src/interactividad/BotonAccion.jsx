function BotonAccion({ onAccion, children }) {
    return (
        <button onClick={onAccion}>
            {children}
        </button>
    );
}

function CuadroDeMandos() {
    return (
        <div>
            <BotonAccion 
                onAccion={() => alert("Guardando")}
                children={"Guardar"}
                />
            <BotonAccion 
                onAccion={() => alert("Eliminando")}
                children={"Eliminar"}
                />
            <BotonAccion 
                onAccion={() => alert("Compartiendo")}
                children={"Compartir"}/>
        </div>
    );
}

export default CuadroDeMandos;