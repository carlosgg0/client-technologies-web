const APP_ID = "b16fdd61ee08f2ac195943cf7513292f";
const WEATHER_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
const ICON_ENDPOINT = "https://openweathermap.org/img/wn/";

const farenheitToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2) ;

async function obtenerDatosTiempo(ciudad) {
    try {
        const params = new URLSearchParams({
            q: ciudad,
            appid: APP_ID
        });
        const response = await fetch(`${WEATHER_ENDPOINT}?${params}`);
        if (!response.ok) {
            throw new Error("Response status:", response.status);
        }
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

async function obtenerIcono(id) {
    try {
        const response = await fetch(`${ICON_ENDPOINT}${id}@2x.png`);
        if (!response.ok) {
            throw new Error("Response status:", response.status);
        }
        return await response.blob();
    } catch (err) {
        console.log(err);
    }
}

function actualizarVistaTiempo(ciudadIntroducida) {
    mensaje.textContent = "";
    obtenerDatosTiempo(ciudadIntroducida)
        .then((data) => {
            ciudad.textContent = data.name;
            temperatura.textContent =
                farenheitToCelsius(Number(data.main.temp)) + "ºC";
            descripcion.textContent = data.weather[0].description;
            estado.textContent = data.weather[0].main;

            return obtenerIcono(data.weather[0].icon);
        })
        .then((imgBlob) => {
            const objectURL = URL.createObjectURL(imgBlob);
            imagen.src = objectURL;
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
            mensaje.textContent = "No se pudo encontrar información";
        });
}

const inputCiudad = document.querySelector("input");
const boton = document.querySelector("button");

const mensaje = document.querySelector("#msg");

const imagen = document.querySelector(".float-image");
const ciudad = document.querySelector("#ciudad");
const temperatura = document.querySelector("#temp");
const estado = document.querySelector("#estado");
const descripcion = document.querySelector("#descripcion");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const ciudadIntroducida = inputCiudad.value.trim().toLowerCase();
    
    // console.log("Nombre de la ciudad:", ciudadIntroducida);

    actualizarVistaTiempo(ciudadIntroducida);
});

actualizarVistaTiempo("madrid"); // Madrid por defecto

