console.log("\nEjercicio 1:\n");

function showType(variable, name) {
    console.log(`Type of ${name}: ${typeof(variable)}`);
}

let variable = 10;      // number
showType(variable, "variable");

variable = "string";    // string
showType(variable, "variable");

variable = true;        // boolean
showType(variable, "variable");

variable = null;        // null
showType(variable, "variable");


console.log("\nEjercicio 2:\n");

let pi = 3.14159;
showType(pi, "pi");     // number

/*
We can call methods on variables because
javascript automatically wraps these inside 
wrapper types (objects), whenever they are passed
as arguments to a function.
*/
console.log(pi.toString());
console.log(pi.toFixed(2));
console.log(pi.toExponential());

console.log("\nEjercicio 3:\n");

const book = {
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    pages: 600
};
console.log(book);

book.pages += 100;
book.editorial = "MaxiTusQuets";
console.log(book);

// book = { // This produces an error since the object is declared const
//     title: "The Wind-Up Bird Chronicle",
//     author: "Haruki Murakami",
//     pages: 700
// };
// console.log(book);


console.log("\nEjercicio 4:\n");

let nullVar = null;
let undefVar = undefined;
let zero = 0;
let emptyStr = "";

nullVar = nullVar ?? "default value";
undefVar = undefVar ?? "default value";
zero = zero ?? "default value";
emptyStr = emptyStr ?? "default value";

console.log(nullVar);
console.log(undefVar);
console.log(zero);
console.log(emptyStr);


// Numbers and operators

console.log("\nEjercicio 5\n:");

let num1 = 10;
let num2 = 20;

console.log("sum:", num1 + num2);
console.log("sub:", num1 - num2);
console.log("product:", num1 * num2);
console.log("division:", num1 / num2);
console.log("remainder:", num1 % num2);
console.log("exp:", num1 ** num2);

let num1Str = "10";

console.log("== :", num1 == num1Str);
console.log("=== :", num1 === num1Str);
console.log("!= :", num1 != num1Str);
console.log("!== :", num1 !== num1Str);


console.log("\nEjercicio 6:\n");

function clasificarNota(nota) {
    let res;

    res = (nota < 5) ? "Suspenso" : (nota < 7) ? "Aprobado" : (nota < 9) ? "Notable" : "Sobresaliente";
    
    return res;
}

console.log(clasificarNota(6));


console.log("\nEjercicio 7:\n");

let vehiculo = {
    marca: "Renault",
    modelo: "Kangoo",
    año: "2005"
};

console.log("marca" in vehiculo); // true
console.log("Renault" in vehiculo); // false

let arr = [1, 2, 3, 4, 5];
console.log(0 in arr); // true
console.log(4 in arr); // true
console.log(7 in arr); // false
console.log("length" in arr); // true

console.log("Length of arr:", arr.length);


// STRINGS

console.log("\nEjercicio 8:\n");

let str = "Desarrollo de Aplicaciones Web";

console.log(str.length);                // 30
console.log(str.charAt(11));            // d 
console.log(str.includes("Web"));       // true
console.log(str.startsWith("Desa"));    // true
console.log(str.endsWith("web"));       // false
console.log(str.search("a"));           // 3
console.log(str.substring(12));         // e Aplicaciones Web


console.log("\nEjercicio 9:\n");

str = "la programación javascript es divertida";

console.log(str.toUpperCase());

let res = str
    .split(" ")
    .map((x) => {
        return x.charAt(0).toUpperCase() + x.slice(1)
    })
    .join(" ");

console.log(res);


console.log("\nEjercicio 10:\n");

let producto = {
    nombre: "leche desnatada",
    precio: 3.99,
    cantidad: 5,
    stock: 100
};

function muestraProducto(p) {
    let res = 
    `Nombre: ${p.nombre}
Precio total: ${(p.precio * p.cantidad).toFixed(2)}
${(p.stock < 5) ? "Stock Bajo" : "Stock OK"}`;
    console.log(res);
}

muestraProducto(producto);

console.log("\nEjercicio 11:\n");

let multiLineStr = `Platero es pequeño, peludo, suave;
tan blando por fuera, que se diría todo de algodón,
que no lleva huesos.`

console.log(multiLineStr);

let versos = multiLineStr.split("\n");

console.log(versos)
console.log(`Hay ${versos.length} versos`);

console.log(versos.join("\n"));


console.log("\nEjercicio 12:\n");

let frutas = ["piña", "sandía", "melón", "uva", "mango"];

frutas.push("pera");
frutas.shift();
frutas.unshift("banana", "aguacate");
frutas.splice(3, 1);

console.log(frutas);


console.log("\nEjercicio 13:\n");

let nums = [10, 20, 30, 20, 40, 20, 50];
console.log(nums);
if (nums.indexOf(20) >= 0) {
    console.log(`First position: ${nums.indexOf(20)}`);
    console.log(`Last position: ${nums.lastIndexOf(20)}`);
    let count = nums.filter(x => x == 20).length;
    console.log(`Number of 20s: ${count}`);
}

console.log("\nEjercicio 14:\n");

let pares = [0, 2, 4, 6, 8];
let impares = [1, 3, 5, 6, 7];

let paresImpares = pares.concat(impares);

console.log(paresImpares.join(" - "));



console.log("\nEjercicio 15:\n");

let semana = ["lunes", "martes", "miércoles", "jueves", "viernes"];

console.log("for tradicional:");
for (let i = 0; i < semana.length; i++) {
    console.log(i, ":", semana[i]);
}

console.log("for of:");
for (const dia of semana) {
    console.log(dia.toUpperCase());
}

console.log("método forEach:");
semana.forEach((x) => {
    console.log(x, x.length);
})


console.log("\nEjercicio 17:\n");

function imc(peso, altura, unidad = "métrico") {
    if (unidad === "imperial") {
        peso = peso * 0.453592;
        altura = altura * 0.0254;
    }
    console.log(`Unidad: ${unidad}, IMC: ${peso * (altura ^ 2)}`);
}

imc(80, 1.8);

imc(176.369953615, 39.387308534, "imperial");


console.log("\nEjercicio 18:\n");


let a = [4, 8, 15, 16, 23, 42];

function mediaAritmetica(data) {
    let sum = data.reduce((x, y) => {return x + y}, 0);   
    return sum / data.length;
}

console.log(mediaAritmetica(a));

const meanStatement = function (data) {
    let sum = data.reduce((x, y) => {return x + y}, 0);   
    return sum / data.length;
}

console.log(meanStatement(a));

const meanArrow = (data) => {
    return data.reduce((x, y) => {
        return x + y;
    }, 0) / data.length;
}

console.log(meanArrow(a));


console.log("\nEjercicio 19:\n");

let names = ["Ana", "Carlos", "Beatriz", "David", "Elena"];

console.log(names.filter(x => x.length > 5).map(x => `Hola, ${x}`));



console.log("\nEjercicio 21:\n");

let biblioteca = {
    libro1: {
        titulo: "Libro1",
        autor: "Autor1",
        año: 2026,
        disponible: true,
    },
    libro2: {
        titulo: "Libro2",
        autor: "Autor2",
        año: 2025,
        disponible: false,
    },
    libro3: {
        titulo: "Libro3",
        autor: "Autor3",
        año: 2024,
        disponible: true,
    }
};

console.log(biblioteca.libro2.titulo);
console.log(biblioteca["libro2"]["titulo"]);
console.log(biblioteca.libro3.autor);
console.log(biblioteca["libro3"]["autor"]);


console.log("\nEjercicio 22:\n");

let calculadora = {
    marca: "CASIO",
    modelo: "fx-55 PLUS",
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
    multiplicar(a, b) {
        return a * b;
    },
    dividir(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by 0!");
        }
        return a / b;
    }
};

try {
    calculadora.dividir(10, 0);
} catch (e) {
    console.log(e.message);
}


console.log("\nEjercicio 23:\n");

function Persona(nombre, apellido, curso) {
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
    
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    };

    this.presentacion = function() {
        console.log(`Soy ${this.nombre}, y estoy en ${this.curso}`);
    };
}

const persona1 = new Persona("Carlos", "García", 3);
const persona2 = new Persona("María", "Solís", -1);
const persona3 = new Persona("Daniel", "García", 3);

persona1.presentacion();
persona2.presentacion();

console.log(typeof (persona1));

console.log(typeof (persona2));

console.log(persona1 instanceof Persona);


console.log("\nEjercicio 24:\n");

let cont = 0;
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
    const now = new Date();
    alert(now.getHours() + ":" + now.getMinutes());
});

btn.addEventListener("click", (e) => {
    console.log(e.clientX, e.clientY);
})

btn.addEventListener("click", (e) => {
    cont++;
    console.log("Contador:", cont);
})

