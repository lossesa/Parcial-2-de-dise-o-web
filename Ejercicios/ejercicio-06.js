// Programación Estructurada

// Tabla de multiplicar especifica
function mostrarTablaMultiplicar(numero) {
  console.log("📌 Tabla de multiplicar del " + numero + ":");
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
}


// Lista de numeros primos hasta un limite dado
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function listarNumerosPrimos(limite) {
  const primos = [];
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }
  return primos;
}


// Pruebas maanuales
let numeroTabla = 7;    
let limitePrimos = 50;  

// mostrarTablaMultiplicar(numeroTabla);

// console.log("🔍 Números primos hasta " + limitePrimos + ":");
// console.log(listarNumerosPrimos(limitePrimos));