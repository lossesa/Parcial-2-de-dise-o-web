// Variables y Tipos de Datos

function estudiante(nombre, edad, promedio, semestre){
    if (promedio >= 3){
        return `Hola, ${nombre}. Tienes ${edad} años, estás en el semestre ${semestre} y tu promedio es ${promedio}. ¡Felicitaciones, vas bien académicamente!`;
    } else {
        return `Hola, ${nombre}. Tienes ${edad} años, estás en el semestre ${semestre} y tu promedio es ${promedio}. Necesitas esforzarte un poco más.`
    }
};

// console.log(estudiante('Sara', 20, 1, 4));
