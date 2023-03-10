// OPERADORES ANS
let tabla = {
    "NOMBRE" : "DESCRIPCIÓN",
    "Math.round(x)" : "Redondea un número al entero más cercano. Si es <= .49 será redondeado hacia abajo y si es >= .5 será redondeado hacia arriba."
};
console.table(tabla);

// EJEMPLO
console.log("Ejemplo con Math.round()...Redondeando un número hacia abajo. Siendo N = 1.49, entonces Math.round(N) = " + Math.round(1.49));

// EJEMPLO 2
console.log("Ejemplo 2 con Math.round()...Redondeando un número hacia arriba. Siendo N = 5.5, entonces Math.round(N) = " + Math.round(5.5));