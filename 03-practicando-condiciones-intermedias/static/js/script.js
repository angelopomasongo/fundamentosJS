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
let correo="ejemplo@gmail.com";
let texto="correo valido";
alert(`El correo convertido es: ${correo} y el resultado es: ${texto.toLowerCase()}`)
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase="Estoy aprendiendo JavaScript";
if(frase){
    alert(`tiene ${frase.length} y es una frase larga `);
}else if (frase){
    alert(`tiene ${frase.length} y es frase mediana tiene entre 11 y 20 caracteres`);
}else{
    alert(`tiene  ${frase.length} y es frase corta tiene entre 10 o menos caracteres`)
}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {

}