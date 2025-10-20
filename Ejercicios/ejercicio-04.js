// Objetos y Propiedades
// Crear un objeto "Producto" con propiedades (nombre, precio, stock) y funciones para:

let Producto = {
    nombre: "Smartphone",
    precio: 800,
    stock: 15,

    // Calcula el precio con descuento (porcentaje entre 0 y 100)
    calcularPrecioConDescuento: function (porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            console.log("Porcentaje inválido.");
            return null;
        }
        let descuento = (this.precio * porcentaje) / 100;
        return this.precio - descuento;
    },

    // Verifica si hay disponibilidad en stock
    verificarDisponibilidad: function () {
        return this.stock > 0;
    },

    // Muestra toda la información del producto
    mostrarInformacion: function () {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Disponible: ${this.verificarDisponibilidad() ? "Sí" : "No"}`);
    }
};

// Prueba manual
// Producto.mostrarInformacion(); // Muestra info completa
// console.log("Precio con 20% de descuento: $" + Producto.calcularPrecioConDescuento(20));
// console.log("¿Hay disponibilidad?: " + (Producto.verificarDisponibilidad() ? "Sí" : "No"));
