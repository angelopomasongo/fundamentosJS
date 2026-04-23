console.log("Conexion exitosa con JS...")

/*
==========================
¿Que es una condicion en JS?
una condicion nos permite tomar decisiones durante el codigo
separando dos caminos: el si(if) y el no(else)

Estructura basica:(sintaxis--> reglas del lenguaje de programacion)

if(condicion){
//condigo que se ejecuta si la condicion es verdadera.
}
else{
    //codigo se ejecuta si la condicion es falsa    
}
*/
//ejemplo 1 : (numerico)
let edad = 18 

if(edad <= 18){
    console.log("eres mayor de edad")
}
//ejemplo2 : dos camino posibles
let temperatura = 10
if(temperatura < 20){
    console.log("hace calor")
}
else {
    console.log("hace frio")
    
}

//ejemplo3: IF - ELSE IF _ ELSE (Multiples condiciones)

let nota = 5.5
if(nota >=6.0){
    console.log("Exelente")
}
else if (nota <=5.0){
    console.log("aprobado")
}
else {
    console.log("desaprovado")
}
//ejemplo4: condiciones con string
let nombre = "Angelo"

//comparacion exacta(===)
if(nombre === "Angelo"){
    console.log("Hola," + nombre)
    }
    else{
    console.log("tu no eres Angelo")
    }

/*
operaciones de comparacion 
> mayor que
<menor que
<= menor o igual
=== estricta igualdad
== igualdad
!= distinto
*/

//ejemplo distinto 

let num = 10;
let num2 = 5
if(num !== 5){
    console.log(`el numero : ${num} es distinto que: ${num2}`)
}else{
    console.log("son iguales")
}