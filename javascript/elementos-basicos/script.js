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

