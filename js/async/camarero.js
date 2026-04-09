function cocinarCafe() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("CAFÉ LISTO!");
        }, 3000);
    });
}

async function pedirCafe() {
    console.log("1. El cliente pide el café");
    const resultado = await cocinarCafe();
    console.log("4. El camarero entrega: ", resultado);
}

// Flujo principal de ejecución ("main")

pedirCafe();

console.log("2. El camarero está libre: Toma nota a otra mesa");
console.log("3. El camarero está libre: limpia una barra");
