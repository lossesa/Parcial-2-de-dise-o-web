// Programación Funcional

// Array de objetos
const estudiantes = [
  { nombre: "Laura", promedio: 4.5 },
  { nombre: "Carlos", promedio: 3.2 },
  { nombre: "Ana", promedio: 2.8 },
  { nombre: "Luis", promedio: 3.9 },
  { nombre: "Sofía", promedio: 2.0 }
];

// Uso de .map()
function agregarEstado(estudiantes) {
  return estudiantes.map(est => {
    let estado = "";

    if (est.promedio >= 3.5) {
      estado = "Aprobado";
    } else if (est.promedio >= 3.0) {
      estado = "En observación"; // Más latino y cercano
    } else {
      estado = "Reprobado";
    }

    return {
      ...est,
      estado: estado
    };
  });
}

// Pruebas manuales
// const estudiantesConEstado = agregarEstado(estudiantes);
// console.log("📋 Lista de estudiantes con estado:");
// console.log(estudiantesConEstado);