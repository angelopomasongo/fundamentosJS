console.log("Conexion exitosa....");

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
let nombre="Sasha";
alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
let suma= 5;
let suma2= 10;
alert(`el resultado de la suma  de : ${suma + suma2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
let resta= 20;
let resta3=8;
alert(`el resultado de la resta es: ${resta - resta3}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
let multiplicación= 6;
let num2=4;
alert(`La multiplicacion es: ${multiplicación * num2}`);

}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let nota1=6.0;
let nota2=5.5;
let nota3=5.7;
let promedio = (nota1 + nota2 + nota3) /3;
alert(`El promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let numero=10;
let num0=3;
if(numero > num0 ){ 
    alert("es mayor de edad");
} else{ 
    alert("no es mayor de edad")
}
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
let numero4= 18;
if (numero4 % 2 == 0){
    alert(`El numero es par`);
} else{
    alert("el numero es impar");
}
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let nota=6.5;
if(nota >= 4.0){
    alert(`Estudiante aprobado`);
} else{
    alert(`Desaprobado`)
}
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precio=20000;
let descuento=0.1;
alert(`Precio final con descuento: $${precio - ( precio * descuento)}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num8=10;
let num90=5;
if(num8 > num90){
    alert(`El numero es mayor es: ${num8}`);
}else{
    alert(`El numero mayor es: ${num90}`);
}
}