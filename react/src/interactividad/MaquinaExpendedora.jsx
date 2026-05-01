import { useState } from "react";

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function Boton({ handleClick, nombreProducto }) {
    return (
        <button onClick={handleClick}>
            {nombreProducto}
        </button>
    )
}

function MaquinaExpendedora() {

    const [productos, setProductos] = useState([]);

    const total = productos.reduce((acc, prod) => acc + prod.precio, 0.0);

    const agregarProducto = (nombre, precio) => {
        setProductos([...productos, new Producto(nombre, precio)]);
    }

    return (
        <>
            <h2>Tu tiquet:</h2>
            <ul>
                {productos.map((p, i) => (
                    <li key={i}>{p.nombre}, {p.precio}€</li>
                ))}
            </ul>
            <p><strong>Precio total: {total.toFixed(2)}</strong></p>
            <Boton
                handleClick={() => agregarProducto("ChocoBom", 3.49)}
                nombreProducto={"Chocobom"} />
            <Boton
                handleClick={() => agregarProducto("Oreos", 4.00)}
                nombreProducto={"Oreos"} />
            <Boton
                handleClick={() => agregarProducto("Kit-Kat", 5.49)}
                nombreProducto={"Kit-Kat"} />
        </>
    )
}

export default MaquinaExpendedora;