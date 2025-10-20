// Integración de Conceptos - Sistema de Gestión

// Clase que representa un libro en la biblioteca
class Libro {
  constructor(id, titulo, autor, genero, disponible = true) {
    this.id = id; 
    this.titulo = titulo; 
    this.autor = autor; 
    this.genero = genero; 
    this.disponible = disponible; 
  }
}

// Clase que representa a un usuario de la biblioteca
class Usuario {
  constructor(id, nombre) {
    this.id = id; 
    this.nombre = nombre; 
    this.prestamos = []; 
  }
}

// Clase que representa un préstamo de libro
class Prestamo {
  constructor(libro, usuario, fechaPrestamo = new Date()) {
    if (!libro.disponible) {
      throw new Error("El libro no está disponible para préstamo.");
    }
    this.libro = libro; 
    this.usuario = usuario; 
    this.fechaPrestamo = fechaPrestamo; 
    libro.disponible = false; 
    usuario.prestamos.push(this); 
  }
}

// Funciones de busqueda
// Buscar libros por título (parcial o completo)
function buscarPorTitulo(libros, titulo) {
  return libros.filter(libro =>
    libro.titulo.toLowerCase().includes(titulo.toLowerCase())
  );
}

// Buscar libros por autor
function buscarPorAutor(libros, autor) {
  return libros.filter(libro =>
    libro.autor.toLowerCase().includes(autor.toLowerCase())
  );
}

// Buscar libros por género
function buscarPorGenero(libros, genero) {
  return libros.filter(libro =>
    libro.genero.toLowerCase() === genero.toLowerCase()
  );
}


// Funcion para prestar libro con validaciones
function prestarLibro(libros, usuarios, libroId, usuarioId) {
  try {
    const libro = libros.find(l => l.id === libroId);
    const usuario = usuarios.find(u => u.id === usuarioId);

    if (!libro || !usuario) {
      throw new Error("Libro o usuario no encontrado.");
    }

    const prestamo = new Prestamo(libro, usuario);
    console.log(`Préstamo exitoso: ${libro.titulo} para ${usuario.nombre}`);
    return prestamo;

  } catch (error) {
    console.error("Error al prestar libro:", error.message);
    return null;
  }
}

// Funciones de reporte con funcional
// Reporte de usuarios con libros prestados
function reportePrestamos(usuarios) {
  return usuarios
    .filter(u => u.prestamos.length > 0) // Solo usuarios que han prestado libros
    .map(u => ({
      usuario: u.nombre,
      librosPrestados: u.prestamos.map(p => p.libro.titulo)
    }));
}

// Lista de libros disponibles para préstamo
function librosDisponibles(libros) {
  return libros
    .filter(libro => libro.disponible)
    .map(libro => libro.titulo);
}


// Pruebas manuales
// Creamos algunos libros
const libros = [
  new Libro(1, "Cien años de soledad", "Gabriel García Márquez", "Realismo mágico"),
  new Libro(2, "El Principito", "Antoine de Saint-Exupéry", "Fábula"),
  new Libro(3, "1984", "George Orwell", "Distopía")
];

// Creamos algunos usuarios
const usuarios = [
  new Usuario(1, "Laura"),
  new Usuario(2, "Carlos")
];

// Realizamos un préstamo
// prestarLibro(libros, usuarios, 2, 1); 

// // Mostramos reporte de préstamos
// console.log("📋 Reporte de préstamos:");
// console.log(reportePrestamos(usuarios));

// // Mostramos libros disponibles
// console.log("📚 Libros disponibles:");
// console.log(librosDisponibles(libros));