function FormularioControlado() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert("Confirmado");
        }}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" />

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" />
            
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default FormularioControlado;