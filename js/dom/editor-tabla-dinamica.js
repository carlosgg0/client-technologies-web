const addRowBtn = document.querySelector("#btn-añadir-fila");

const nameInput = document.querySelector("#campo-nombre");
const lastNameInput = document.querySelector("#campo-apellido");
const ageInput = document.querySelector("#campo-edad");

const tableBody = document.querySelector("#cuerpo-tabla");
const totalRows = document.querySelector("#contador");

addRowBtn.addEventListener("click", () => {
    
    const name = nameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

    if (!name || !lastName || !age) {
        showError();
    } else {
        hideError();
        createRow(name, lastName, age);
        resetForm();
        updateCounter();
    }
});

function createRow(name, lastName, age) {
    const row = document.createElement("tr");

    [name, lastName, age].forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        row.appendChild(td);
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    const delBtn = document.createElement("button");
    delBtn.textContent = "Borrar";

    row.append(editBtn, delBtn);
    
    editBtn.addEventListener("click", (event) => {
        const btn = event.target;
        const currentRow = btn.parentNode.parentNode;
        const celdas = currentRow.querySelectorAll("td");    
    
        if (btn.textContent === "Editar") {
            
            celdas.forEach((celda) => {
                const valorAEditar = celda.textContent;
                celda.textContent = "";
                const nuevoInput = document.createElement("input");
                nuevoInput.setAttribute("type", "text");
                nuevoInput.value = valorAEditar;
                celda.appendChild(nuevoInput);
            });

            btn.textContent = "Guardar";
        } else {
            celdas.forEach((celda) => {
                const nuevoInput = celda.querySelector("input");
                celda.textContent = nuevoInput.value;
            });

            btn.textContent = "Editar";
        }
    });
    
    delBtn.addEventListener("click", () => {
        row.remove();
        updateCounter();
    });

    tableBody.append(row);
}


function initEditBtn(editBtn, nameCell, lastNameCell, ageCell) {
    nameCell.textContent = "";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameCell.append(nameInput);

    lastNameCell.textContent = "";
    let lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameCell.append(lastNameInput);

    ageCell.textContent = "";
    let ageInput = document.createElement("input");
    ageInput.setAttribute("type", "text");
    ageCell.append(ageInput);

    editBtn.textContent = "Guardar";
    editBtn.addEventListener("click", () => {
        
        const newName = nameInput.value;
        const newLastName = lastNameInput.value;
        const newAge = ageInput.value;

        if (!newName || !newLastName || !newAge) {
            showError();
        } else {
            hideError();

            nameInput.remove();
            lastNameInput.remove();
            ageInput.remove();

            nameCell.textContent = newName;
            lastNameCell.textContent = newLastName;
            ageCell.textContent = newAge;

            editBtn.textContent = "Guardar";
            editBtn.addEventListener(
                "click", 
                () => initEditBtn(editBtn, nameCell, lastNameCell, ageCell)
            );
        }
    })
}

function showError(message) {
    let msg = document.querySelector("#msg");
    if (!msg) {
        msg = document.createElement("p");
        msg.id = "msg";
        msg.style.color = "red";
        document.body.appendChild(msg);
    }
    msg.textContent = message;
}

function hideError() {
    const msg = document.querySelector("#msg");
    if (msg) msg.remove();
}

function resetForm() {
    nameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    nameInput.focus();
}

function updateCounter() {
    totalRows.textContent = `Total de filas: ${tableBody.rows.length}`;
}
