function Comentario({ autor, texto, fecha}) {
    return (
        <div className="comentario"
            style={{border: "2px solid"}}>
            <h3>Autor: {autor}</h3>
            <h4>Fecha: {fecha}</h4>
            <p>{texto}</p>
        </div>
    )
}

export default Comentario;