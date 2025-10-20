// Funciones

function area_rectangulo(base, altura){
    let area = base * altura;
    return `El area del rectangulo es de ${area}`
};

function area_circulo(radio){
    let area = Math.PI * (radio **2);
    return `El area del circulo es de ${area.toFixed(2)}`
};

function area_triangulo(base, altura){
    let area = (base * altura) / 2;
    return `El area del triangulo es de ${area}`
};


function devolver_calculo(tipo_figura, base = 0, altura = 0, raio = 0){
    if (tipo_figura === 'rectangulo'){
        return area_rectangulo(base, altura);
    } else if (tipo_figura === 'circulo'){
        return area_circulo(radio);
    } else if (tipo_figura === 'triangulo'){
        return area_triangulo(base, altura);
    } else {
        return 'Opcion no valida.'
    }
};

// console.log(devolver_calculo('rectangulo', 5, 10));