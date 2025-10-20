// Arrays
// Dado un array de números, implementar funciones para:

// Encontrar el número mayor y menor
function hallar_mayor_menor(array){
    // Uso de spread operator para expandir el array.
    let num_mayor = Math.max(...array);
    let num_menor = Math.min(...array);
    return `Numero mayor: ${num_mayor}\nNumero menor: ${num_menor}`
}


// Calcular el promedio
function promedio(array){
    let acumulador = 0;
    for(let i = 0; i < array.length; i++){
        acumulador += array[i]; // Se suma el valor, no el indice [i]
    }
    // Se hace el return por fuera para evitar que la funcion termine en la 1era iteracion.
    let promedio = acumulador / array.length;
    return `El promedio es ${promedio}`
}


// Filtrar números pares
// Opcion 1
function filtrar_pares(array){
    let array_pares = []
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            array_pares.push(array[i]);
        }
    }
    return array_pares;
}


// Conjunto de array
let array_numeros = [1,2,4,12,9,5]

// Ordenar el array de menor a mayor
array_numeros.sort((a,b) => a - b);


// Pruebas manuales
// console.log(hallar_mayor_menor(array_numeros));
// console.log(promedio(array_numeros));
// console.log(filtrar_pares(array_numeros));
// console.log(array_numeros);



