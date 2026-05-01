function BotonSaludo() {

    const handleClick = () => alert("Has pulsado el botón!");

    return (
        <button onClick={handleClick}>
            Pulsa aquí
        </button>
    );
}

export default BotonSaludo;