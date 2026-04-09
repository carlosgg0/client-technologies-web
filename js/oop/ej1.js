const objetoLiteral = {
    ciudad: "Madrid",
    saludar() {
        console.log(`Saludos desde ${this.ciudad}`);
    }
};

const objetoNew = new Date(2026, 4, 10);

const objetoCreate = Object.create(Date);

let objeto = objetoLiteral;
do {
    objeto = Object.getPrototypeOf(objeto);
    console.log(objeto);
} while (objeto);

objeto = objetoNew;
do {
    objeto = Object.getPrototypeOf(objeto);
    console.log(objeto);
} while (objeto);

objeto = objetoCreate;
do {
    objeto = Object.getPrototypeOf(objeto);
    console.log(objeto);
} while (objeto);