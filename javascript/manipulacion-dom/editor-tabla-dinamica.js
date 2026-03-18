


const addRowBtn = document.querySelector("#btn-añadir-fila");

const nameInput = document.querySelector("#campo-nombre");
const surnameInput = document.querySelector("#campo-apellido");
const ageInput = document.querySelector("#campo-edad");

const tableBody = document.querySelector("#cuerpo-tabla");

let totalRows = document.querySelector("#contador");

addRowBtn.addEventListener("click", (event) => {
    const name = nameInput.value;
    const surname = surnameInput.value;
    const age = ageInput.value;

    console.log(age);

    if (!name || !surname || !age) {
        let msg = document.querySelector("#msg");
        if (!msg) {
            msg = document.createElement("p");
            msg.setAttribute("id", "msg");
            msg.textContent = "Debe introducir todos los campos!";
            msg.style.color = "red";
            document.body.appendChild(msg);
        }
    } else {
        let msg;
        if ((msg = document.querySelector("#msg"))) {
            msg.remove();
        }

        let tdName = document.createElement("td");
        tdName.textContent = name;
        let tdSurname = document.createElement("td");
        tdSurname.textContent = surname;
        let tdAge = document.createElement("td");
        tdAge.textContent = age;
        
        let editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        let newRow = document.createElement("tr");
        newRow.appendChild(tdName);
        newRow.appendChild(tdSurname);
        newRow.appendChild(tdAge);
        newRow.appendChild(editBtn);
        newRow.appendChild(deleteBtn);

        nameInput.value = "";
        surnameInput.value = "";
        ageInput.value = "";

        tableBody.appendChild(newRow);
    }
})

fetch