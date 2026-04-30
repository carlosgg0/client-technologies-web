function TarjetaProducto({ nombre, precio, descuento = 0, imagen, enStock = true }) {
  
  const seccionPrecio = (descuento > 0) ? 
    `Precio original: ${precio}, ` +
    `Precio con descuento: ${(precio * descuento).toFixed(2)}, ` + 
    `Ahorro: ${precio - (precio * descuento).toFixed(2)}` : `Precio: ${precio.toFixed(2)}`; 
  
  return (
    <>
      {imagen && <img src={imagen} alt={nombre} width={100}/>}
      
      <h3>{nombre}</h3>
      
      <p>{seccionPrecio}</p>
      
      <p>{enStock ? 'Disponible ✅' : 'Agotado ❌'}</p>
      
      <button disabled={!enStock}>
        {enStock ? "Comprar" : "Sin existencias"}
      </button>
    </>
  );
}

export default TarjetaProducto;