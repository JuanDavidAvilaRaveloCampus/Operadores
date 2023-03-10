// OPERADORES ANS
let tabla = {
    "NOMBRE" : "DESCRIPCIÓN",
    "Math.ceil(x)" : "Redondea un número hacia arriba hasta el número entero más próximo y devuelve el resultado. Si el argumento pasado es un numero entero, no redondeará el valor.",
    "Math.floor(x)" : "Redondea un número hacia abajo hasta el número entero más próximo y devuelve el resultado. Si el argumento pasado es un numero entero, no redondeará el valor."
};
console.table(tabla);

// EJEMPLO
console.log("Ejemplo con Math.ceil()...Redondeando un número hacia arriba. Siendo N = 1.4, entonces Math.ceil(N) = " + Math.ceil(1.4));

// EJEMPLO 2
console.log("Ejemplo 2 con Math.floor()...Redondeando un número hacia abajo. Siendo N = 5.9, entonces Math.floor(N) = " + Math.floor(5.9));