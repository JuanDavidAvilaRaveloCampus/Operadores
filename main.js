// OPERADORES ANS
let tabla = {
    "NOMBRE" : "DESCRIPCIÓN",
    "Math.max(x1, x2...)" : "Retorna el mayor número de cero o más números dados como parámetros de entrada, o NaN si quialquier parámetro no es un número y no puede ser convertido en uno.",
    "Math.min(x1, x2...)" : "Retorna el menor número de cero o más números dados como parámetros de entrada, o NaN si quialquier parámetro no es un número y no puede ser convertido en uno."
}
console.table(tabla)

// EJEMPLO
console.log("Ejemplo con Math.max()\nHallando el número mayor de 1-10\n\nEste número es: " + Math.max(1,2,3,4,5,6,7,8,9,10))

// EJEMPLO 2
console.log("Ejemplo con Math.min()\nHallando el número mayor de 1-10\n\nEste número es: " + Math.min(1,2,3,4,5,6,7,8,9,10))