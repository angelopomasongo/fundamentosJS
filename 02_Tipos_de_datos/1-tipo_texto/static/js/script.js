console.log("conexion con js correcta...");
/*
dato: tipo texto(string)
concatenacion de texto con el signo +
podemos unir texto y variables
*/
//concatenacion: unir texto y/o variable.
const nombre = "Angelo";
const apellido = "Pomasongo";
//unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2- ver tipo de dato(typeof)*/

console.log("la variable nombe es un tipo de dato: " + typeof nombre);

//template literals (forma moderna para concatenar ``) 
console.log(`hola, mi nombre es ${nombre} ${apellido} `);

//mostrar un largo de un string(texto) - contar los caracteres 
//.legth --> para contar caracteres y espacios.
let palabra = "paralelepipedo"
console.log(`La palabra ${palabra} tiene ${palabra.length} letras`)

//crear una frase y contar sus caracteres
let frase = "mañana no vengo"
console.log(`la frase ${frase} tiene  ${frase.length} letras`)

//metodos comunes en javascript para formatear texto
//transformar textos en mayuscula 
let texto1 = "jaVAscrIpt Es lO meJor"
console.log(texto1.toUpperCase());

//transformar texto a minuscula .tolowercase()

console.log(texto1.toLowerCase())

//buscar un texto dentro de un srting .includes()
let texto2 = "leche, azucar, peras, huevo, harina"
console.log(texto2.includes("peras")); //true

//convertir una variable a texto
let telefono = 89192926;
let telefono_texto = String(telefono)
console.log(`mi numero de telefono ${telefono_texto} es de tipo ${typeof telefono_texto}`)
