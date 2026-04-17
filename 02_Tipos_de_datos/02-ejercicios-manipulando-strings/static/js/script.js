console.log("conexion con js correcta...");


// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
let nombre1 = "Camila";
let edad1 = "25";
let edad1_texto = String(edad1);
console.log(`Ella es ${nombre1} y su edad es ${edad1_texto} es de tipo ${typeof edad1_texto}`)

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas}
let comuna = "Maipu";
let region = "Metropolitana";
console.log(`Esta persona vive en la comuna ${comuna.toUpperCase()} y en la region ${region.toLowerCase()}`);

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python"
console.log(`El leguaje ${lenguaje.toUpperCase()} tiene ${lenguaje.length} letras y es un dato tipo ${typeof lenguaje}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas}
let mensaje1 = "Me encanta programar en JavaScript"
console.log(`${mensaje1.toLowerCase()} y contiene la cantidad de ${mensaje1.length} caracteres`)
console.log(mensaje1.includes("JavaScript"))


// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal"
console.log(`${compras.toUpperCase()} y contiene ${compras.length} caracteres`);
console.log(compras.includes("aceite"));



// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene

let numeroCasa = "456"
let numeroCasaTexto= String(numeroCasa)
console.log(`su casa es la ${numeroCasaTexto} es de tipo ${typeof numeroCasaTexto} y el numero de caracteres son de ${numeroCasaTexto.length}`)


// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let nombre2 = "Diego"
let apellido="Rojas"
let nombre_completo = "Diego Rojas"
console.log(`su nombre es ${nombre_completo.toUpperCase()} y tiene una cantidad de ${nombre_completo.length} caracteres`)


// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let frase1 = "hoy aprendemos strings"
console.log(`${frase1.toUpperCase()} tiene ${frase1.length} caracteres`)
console.log(frase1.includes("string"))



// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto2 = "Programar es divertido"
console.log(texto2, `,${texto2.toUpperCase()}, ${texto2.toUpperCase()} y tiene ${texto2.length} caracteres`)

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso ="4c"
let año ="2026"
let año_texto = String(año)
let mensaje_completo = "el cuso 4c del año 2026 y los caracteres de año son de "
console.log(`${mensaje_completo.toUpperCase()}${año_texto.length}`)
