alert("Vamos a calcular el monto de tu compra")
let producto1 = parseInt(prompt ("Ingrese el valor del primer producto"))
let producto2 = parseInt(prompt ("Ingrese el valor del segundo producto"))
let resultado = 0

function costoTotal (Parametro1, Parametro2) {
    
    resultado = Parametro1 + Parametro2
}
costoTotal(producto1, producto2)


function mostrarCosto (resultadoCosto) {
    alert("el costo total es "+ "$" + resultadoCosto)
}

mostrarCosto(resultado)

let totalEnvio = resultado + 50
if (resultado<100) {
    alert("El valor es menor a $100, el producto tendrá un costo de envío de $50. El total mas el envío es: " + "$" + totalEnvio )
} else {
    alert("El valor es mayor a $100, el producto no tendrá costro de envío")
}






// const nombre = "Facu"
// const edad = 27
// const variableConst = true 
// console.log(variableConst)

// if(variableConst){
//     console.log(typeof variableConst)
// }

//if estructura de control para evaluar una condición
// if(condicion{} lo que esta entre 2 llaves se llama bloque

//let entrada = prompt("ingrese una letra")
//let salida = entrada + " " + "ingresada"
//alert(salida)

//let entrada = Number (prompt("ingrese un numero"))
//let salida = entrada + 1
//alert(entrada + 1)


// console.log("hola mundo 1")

// if(false){
//     console.log("hola mundo 2")
// }

// let condition = true
// let numero = 3

// if(condition){
//     console.log("hola mundo 3")
// }

// if(numero === 3){
//     console.log("hola mundo 4")
// }


// let nombreUsuario = prompt("Ingrese un nombre de usuario")
// console.log(nombreUsuario)

// if(nombreUsuario === ""){
//     alert("No ingresaste el nombre")
// } else{
//     alert("El nombre ingresado es : " + nombreUsuario)
// }


// let nombreIngresado =  prompt("Ingrese Nombre")
// let apellidoIngresado= prompt("Ingrese apellido")

// if ( (nombreIngresado !== "") && (apellidoIngresado !== "") ) {
//     alert("Nombre: "+ nombreIngresado + " y el apellido es: " + apellidoIngresado)
// }

// for(let contador = 0; contador < 10 ; contador++){
//     alert(contador)
// }

// let numeroIngresado = parseInt(prompt("Ingresar un numero: "))
// for (let i = 1; i<= 10; i++){
//     let resultado = numeroIngresado * i
//     alert(numeroIngresado + "X" + i + "=" + resultado)
// }
//  let entrada = prompt("Ingresar un dato: ")
//  while(entrada!== "ESC"){
//     alert("El usuario ingresado es: "+ entrada)
//     entrada=prompt("Ingresar otro dato: ")
//  }

// let contador = 0

// do{
// console.log(contador)
//     contador++
// }while(contador<10)

// let variab = 10

// switch (variab) {
//     case 1:
//         console.log("Es un uno")
//         break;
//     case 2:
//         console.log("Es un dos")
//         break;
//     case 3:
//         console.log("Es un tres")
//         break;
//     case 4:
//         console.log("Es un cuatro")
//         break;    

//     default:
//         console.log("Es otro numero")
//         break;
// }

// let enter = prompt("Ingrese un nombre:")
// while (enter !== "ESC") {
//     switch (enter){
//         case "ANA":
//             alert ("Hola ANA")
//             break;
//         case "FACU":
//                 alert ("Hola FACU")
//             break;    
//     }
//     enter=prompt("Ingrese otro nombre")
// }

// let años = parseInt(prompt("ingrese su edad"))
// let requisito = true

// while (requisito) {
//     if (años>=18) {
//         alert("Bienvenido")
//         requisito=false
//     }else{
//         alert("Eres menor de edad")
//         años = parseInt(prompt("ingrese otra edad"))
//     }
// }
// let años = parseInt(prompt("ingrese su edad"))
// do {
//     if (años>=18) {
//         alert("Bienvenido")
//         break
//     } else {
//         alert("No puedes ver esta pagina")
//         años = parseInt(prompt("ingrese su edad"))
//     } 
// } while (años < 18);  
//si es true vuelve a repetir, si es false corta

// let resultado = 0

// function sumar (numero1, numero2) {
//     console.log(numero1);
//     console.log(numero2);
//    
//     return numero1 + numero2
// }

// function mostrarResultado (resultadoParam) {
//     console.log("el resultado es ", resultadoParam)
// }

// mostrarResultado(sumar(3,10))

// sumar (3,10)
// mostrarResultado(resultado)

//--------------------

// function calculadora(numero3, numero4, operacion) {
//     switch (operacion) {
//         case "+":
//             return numero3 + numero4
//             break;
//         case "-":
//             return numero3 - numero4
//             break;    
//         case "*":
//             return numero3 * numero4
//             break; 
//         case "/":
//             if (numero4 === 0) {
//                return "no se puede dividir por cero"
//             }
//             return numero3 / numero4
//             break;
//         default:
//             return "Debe definir una operación correcta + - * /"
//             break;
//     }
// }

// console.log(calculadora(5,5,"+"));