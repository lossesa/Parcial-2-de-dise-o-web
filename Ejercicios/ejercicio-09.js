// Manejo de Arrays Complejos

// Array de objetos que representa las ventas realizadas
const ventas = [
  { producto: "Laptop", categoria: "Electrónica", unidades: 5 },
  { producto: "Celular", categoria: "Electrónica", unidades: 8 },
  { producto: "Silla", categoria: "Muebles", unidades: 4 },
  { producto: "Mesa", categoria: "Muebles", unidades: 6 },
  { producto: "Camisa", categoria: "Ropa", unidades: 10 },
  { producto: "Pantalón", categoria: "Ropa", unidades: 7 }
];

// Total por categoria
function calcularTotalesPorCategoria(ventas) {
  const totales = {}; // Objeto para guardar los totales por categoría

  for (let venta of ventas) {
    const categoria = venta.categoria;
    const unidades = venta.unidades;

    // Si la categoría no existe aún, la inicializamos en 0
    if (!totales[categoria]) {
      totales[categoria] = 0;
    }

    // Sumamos las unidades vendidas
    totales[categoria] += unidades;
  }

  return totales;
}
// Producto mas vendido
function encontrarProductoMasVendido(ventas) {
  let masVendido = ventas[0]; // Empezamos con el primer producto

  for (let venta of ventas) {
    // Si encontramos uno con más unidades, lo actualizamos
    if (venta.unidades > masVendido.unidades) {
      masVendido = venta;
    }
  }

  return masVendido;
}

// Pruebas manuales
// console.log("🧮 Totales por categoría:");
// console.log(calcularTotalesPorCategoria(ventas));

// console.log("🏆 Producto más vendido:");
// console.log(encontrarProductoMasVendido(ventas));