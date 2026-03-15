const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const mailInput = document.getElementById("mail");

function valid(nombre, correo) {
    return nombre !== "" 
        && correo !== "" 
        && correo.includes("@"); 
}

form.addEventListener("submit", (event) => {
    console.log("You clicked the button!");
    let nombre = nameInput.value;
    let correo = mailInput.value;

    if (!valid(nameInput.value, mailInput.value)) {
        event.preventDefault();
        alert("Debe rellenar todos los campos!");
    } else {
        alert(`Bienvenido: ${nombre}, ${correo}`);
    }
})