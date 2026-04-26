function Botones({ role }) {
    const acciones = {
        admin: ["Editar", "Eliminar", "Configurar"],
        editor: ["Editar", "Guardar"],
        visitante: ["Ver contenido"]
    };

    const listaBotones = acciones[role] || [];

    return (
        <>
            {listaBotones.map((texto, i) => (
                <button key={i}>{texto}</button>
            ))}
        </>
    );
}

export default Botones;