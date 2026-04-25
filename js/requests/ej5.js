
async function ejemploPOST() {
    
    const URL = "https://jsonplaceholder.typicode.com/posts";
    
    const nuevoProducto = {
        name: "Teclado mecánico",
        body: "Interruptores Blue, retroiluminado RGB",
        userId: 1
    };

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoProducto)
        });
        console.log("Payload enviado:", nuevoProducto);
        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Datos confirmados por el servidor:", data);
    } catch (err) {
        console.error("Error en la petición POST:", err);
    }
}

ejemploPOST();