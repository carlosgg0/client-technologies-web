const urlProductos = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";


fetch(urlProductos)
    .then((productos) => {
        return productos.json();
    })
    .then((productos) => {
        const producto = productos[0];
        const urlFicticia = `https://api.ejemplo.com/stock/${producto.name}`; 
        console.log(producto);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    producto: producto.name,
                    unidades: Math.floor(Math.random() * 100)
                })
            }, 500);
        });
    })
    .then((producto) => {
        console.log(producto);
    });
    
