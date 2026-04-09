async function obtenerSuperheroes() {
    
    const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/oojs/json/superhearoes.json"
    );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data.members;
}

obtenerSuperheroes()
    .then((superheroes) => {
        for (const superheroe of superheroes) {
            console.log(`Nombre: ${superheroe.name} | Poderes: ${superheroe.powers}`);
        }
    })
    .catch((err) => {
        console.log(err);
    })

