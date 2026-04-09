const lista = document.getElementById("lista");
const boton = document.getElementById("boton");

let contador = 4;
let total = 4;

boton.addEventListener("click", () => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = `Elemento ${contador}`;
    lista.appendChild(nuevoElemento);
    contador++;
    
    if (total > 10) {
        lista.firstElementChild.remove();
    } else {
        total++;
    }
});
