// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;
    if (nota > 6.0) {
        alert(`Excelente rendimiento`);
    } else if (nota > 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante reprobado`)
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre1 = "Daniel Perez";
    alert(`El nombre convertido es: ${nombre1.toUpperCase()} tiene: ${nombre1.length} letras`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ejemplo@gmail.com";
    let texto = "correo valido";
    alert(`El correo convertido es: ${correo} y el resultado es: ${texto.toLowerCase()}`)
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    if (frase) {
        alert(`tiene ${frase.length} y es una frase larga `);
    } else if (frase) {
        alert(`tiene ${frase.length} y es frase mediana tiene entre 11 y 20 caracteres`);
    } else {
        alert(`tiene  ${frase.length} y es frase corta tiene entre 10 o menos caracteres`)
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
 let producto = "teclado";
    let precio = 5000;
    let descuento = 0.1;
    alert(`el producto ${producto.toLocaleUpperCase()} tiene un pecio final $${precio - (precio * descuento)}`);
}


function ejercicio16() {
let cliente="Pepe";
    let producto="Televisor";
    let precio=149990;
    let decuentoP=0.2;
    let decuentoF=0.1;
    if(precio >= 100000){
        alert(`el cliente: ${cliente.toUpperCase()} compro una ${producto} por un precio original de: ${precio}
        \nsu precio con decuento es: ${precio - (precio * decuentoP)} porque ${cliente} es un cliemet premium`);
    }else if (precio >= 50000){
        alert(`el cliente ${cliente.toUpperCase()} compro una ${producto} por un precio original de:
        ${precio}
        \nsu precio con decuento es: ${precio - (precio * decuentoF)} porque ${cliente} es un cliente frecuente `);
    }else {
        alert(`el cliente ${cliente.toUpperCase()} compro una ${producto} por un precio original de: ${precio}
        \nNo tiene decuento po lo que queda en ${precio} porque ${clienet} es un cliente normal`);
    }
}














function ejercicio17() {
    let nombreCliente = "maria lopez"
    let precioCompra = 120000
    if (precioCompra >= 100000) {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Premium y tiene un precio final de $${precioCompra - (precioCompra * 0.2)}`)
    } else if (precioCompra >= 50000) {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Frecuente y tiene un precio final de $${precioCompra - (precioCompra * 0.1)}`)
    } else {
        alert(`El cliente ${nombreCliente.toUpperCase()} es un cliente Normal y tiene un precio final de $${precioCompra}`)
    }
}

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado
function calcularNotas() {
    let nombre = "Papelucho";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 6.7;
    let promedio = (n1 + n2 + n3) / 3;
    let nombreMayusculas = nombre.toUpperCase()
    if (promedio >= 6) {
        alert(`el estudiante ${nombreMayusculas} esta destacado 
            \npromedio: ${promedio}
            \nLargo nombre ${nombre.length}`)
        }else if(promedio >= 4) {
            alert(`el estudiante ${nombreMayusculas} esta aprobado
            \npromedio: ${promedio}
            \nLargo nombre ${nombre.length}`)
    } 
    else {
            alert(`el estudiante ${nombreMayusculas} esta reprobado
            \npromedio: ${promedio}
            \nLargo nombre ${nombre.length}`
            )
    }
}
function desempeño() {
    let nombre1 = "Juanita";
    let nota1 = 6.6;
    let nota2 = 6.1;
    let nota3 = 5.2;
    let nota4 = 4.0;
    let promedio1 = (nota1 + nota2 + nota3 + nota4) / 4;
    let nombre1Mayuscula = nombre1.toLocaleUpperCase();
    if (promedio1 >= 6.5){
        alert(`El estudiante ${nombre1Mayuscula} Sobresaliste.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 6.0){
        alert(`El estudiante ${nombre1Mayuscula} Muy buen rendimiento.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 5.0){
        alert(`El estudiante ${nombre1Mayuscula} Buen rendimiento.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else if(promedio1 >= 4.0){
        alert(`El estudiante ${nombre1Mayuscula} Suficiente.
            \nPromedio: ${promedio1}.
            \nLargo nombre: ${nombre1.length}`)
    } else{
        alert(`El estudiante ${nombre1Mayuscula} Insuficiente.
        \nPromedio: ${promedio1}.
        \nLargo nombre: ${nombre1.length}`)
    }
}



function producto(){
    let producto="leche";
    let precio=200000;
    let precio1= 100000;
    let precio2=50000;
    let precio3= 21000;
    let precio4=1500;
    let productoMinuscula= producto.toLocaleLowerCase();
    if(precio){
        alert(`El producto ${productoMinuscula} Producto de lujo.
            \nPrecio: ${precio}.`)
    }else if(precio1 >= 0.85){
        alert(`El producto ${productoMinuscula} Producto premion.
            \nPrecio: ${precio1}.`)
    }else if(precio2 >= 0.1){
        alert(`El producto ${productoMinuscula} Producto estandar.
            \nPrecio: ${precio2}`)
    }
    }
