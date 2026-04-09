// const promesaProductos = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// const promesaSuperheroes = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
// );

// const promesaInexistente = fetch(
//     "https://esto-no-existe/"
//     //"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );

// Promise.all([promesaProductos, promesaSuperheroes, promesaInexistente])
//     .then((respuestas) => {
//         respuestas.forEach(respuesta => {
//             console.log(respuesta.status);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });


console.log("Empezamos con Promise.any() ...");

const promesaSim1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Petición 1 falla"));
    }, 800);
});

const promesaSim2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Petición 2 funciona");
    }, 3000);
});

const promesaSim3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Petición 3 funciona");
    }, 1500);
})

// Se puede jugar con Promise.any(), Promise.all(), Promise.race() 
// y Promise.allSettled() cambiando los diferentes timeouts
Promise.race([promesaSim1, promesaSim2, promesaSim3])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(`Fallo en la operación fetch: ${err}`);
    });
