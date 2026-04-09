const enlaceBuscador = document.querySelector("#enlace-buscador");
const botonCambiarBuscador = document.querySelector("#boton-cambiar-buscador");
botonCambiarBuscador.addEventListener("click", () => {
    if (enlaceBuscador.textContent.includes("Google")) {
        // Cambiar el texto del enlace
        enlaceBuscador.textContent = "Buscador: DuckDuckGo";
        // Cambiar el atributo href del enlace
        enlaceBuscador.setAttribute("href", "https://duckduckgo.com");
    } else {
        // Cambiar el texto del enlace
        enlaceBuscador.textContent = "Buscador: Google";
        // Cambiar el atributo href del enlace
        enlaceBuscador.setAttribute("href", "https://google.com");
    }
});

// --------------------------------------------------------------

// seleccion por id
botonAnyadir = document.querySelector("#anyadir");
botonBorrar = document.querySelector("#borrar");

let cont = 1;

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

botonAnyadir.addEventListener("click", () => {
    nuevoParrafo = document.createElement("p");
    nuevoNodoTexto = document.createTextNode("nuevo pÃ¡rrafo " + cont + "; ");
    nuevoParrafo.appendChild(nuevoNodoTexto);
    cont++;
    contenedor = document.querySelector(".contenedor");
    contenedor.appendChild(nuevoParrafo);
});

botonBorrar.addEventListener("click", () => {
    // USANDO VARIABLES EN SELECTORES CSS
    const containerClass = "contenedor";
    const selector = "p:first-child";

    // CON TEMPLATE LITERALS
    contenedor = document.querySelector(`.${containerClass}`);
    
    parrafoAEliminar = contenedor.querySelector("p:first-of-type");

    console.log(parrafoAEliminar);

    if (parrafoAEliminar) {
        contenedor.removeChild(parrafoAEliminar);
    }
});

/*
// FunciÃ³n para obtener el Ãºltimo nodo de texto de un pÃ¡rrafo
function getLastTextNode(paragraph) {
    const walker = document.createTreeWalker(
        paragraph,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let lastTextNode = null;
    let node;
    
    while (node = walker.nextNode()) {
        if (node.textContent.trim() !== '') {
            lastTextNode = node;
        }
    }
    
    return lastTextNode;
}

// Uso:
const paragraph = document.querySelector('p');
const lastTextNode = getLastTextNode(paragraph);
console.log(lastTextNode.textContent);
*/

/*
// Obtener todos los nodos de texto de un pÃ¡rrafo
function getTextNodes(element) {
    const textNodes = [];
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        node => node.textContent.trim() !== '' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    );
    
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    return textNodes;
}

// Obtener el Ãºltimo nodo de texto
const paragraph = document.querySelector('p');
const textNodes = getTextNodes(paragraph);
const lastTextNode = textNodes[textNodes.length - 1];
*/

let walker = document.createTreeWalker(
    document.querySelector('p'),
    NodeFilter.SHOW_TEXT,
    node => (node.textContent.trim() !== '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT 
)

const textNodes = [];
let node;
while (node = walker.nextNode()) {
    textNodes.push(node);
} 

console.log(textNodes[textNodes.length - 1]);


// --------------------------------------------------------------

const parrafoAModificar = document.querySelector("#parrafo-a-modificar-directamente");
const botonModificarParrafo = document.querySelector("#boton-cambiar-estilo");
botonModificarParrafo.addEventListener("click", () => {
    // Modificar el texto del pÃ¡rrafo directamente
    parrafoAModificar.style.color = "white";
    parrafoAModificar.style.backgroundColor = "black";
    parrafoAModificar.style.padding = "10px";
    parrafoAModificar.style.width = "250px";
    parrafoAModificar.style.textAlign = "center";
});


// --------------------------------------------------------------

const parrafoAModificarClases = document.querySelector("#parrafo-a-modificar-con-clases");
const botonModificarParrafoClases = document.querySelector("#boton-cambiar-estilo-con-clases");
botonModificarParrafoClases.addEventListener("click", () => {
    parrafoAModificarClases.classList.add("estilo-modificado");
});
