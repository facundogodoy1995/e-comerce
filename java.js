//PRE ENTREGA 1

// alert("Vamos a calcular el monto de tu compra")
// let producto1 = parseInt(prompt ("Ingrese el valor del primer producto"))
// let producto2 = parseInt(prompt ("Ingrese el valor del segundo producto"))
// let resultado = 0

// function costoTotal (Parametro1, Parametro2) {
    
//     resultado = Parametro1 + Parametro2
// }
// costoTotal(producto1, producto2)


// function mostrarCosto (resultadoCosto) {
//     alert("el costo total es "+ "$" + resultadoCosto)
// }

// mostrarCosto(resultado)

// let totalEnvio = resultado + 50
// if (resultado<100) {
//     alert("El valor es menor a $100, el producto tendrá un costo de envío de $50. El total mas el envío es: " + "$" + totalEnvio )
// } else {
//     alert("El valor es mayor a $100, el producto no tendrá costro de envío")
// }



//PRE ENTREGA 2

class producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.vendido = false
    }
    sumarIva(){
        this.precio = this.precio * 1.21   
    }
}

const producto3 = new producto ("perfume para ropa", 1200)

const listaProducto = []
console.log(listaProducto.length)
let cantidad = Number(prompt("Ingrese cantidad de productos"))
do{ 
    let entrada = prompt("Ingresar nombre producto:")
    listaProducto.push(entrada.toLocaleUpperCase())
    console.log("listado", listaProducto)
    console.log( "tamaño array:", listaProducto.length)
}while(listaProducto.length !== cantidad)










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

// arrow function

// const sumar = (param1, param2) =>{
//     console.log(param1 + param2)
// }

// sumar(5,5)

// const suma = (a, b) => a + b   //tiene return

// const calcularIva = valorProducto => valorProducto * 0.21

// const calcularValorProducto = valor => {
//     return valor + calcularIva(valor)
// }

// console.log(calcularValorProducto(100)) 

// const persona = {
//     nombre: "Homero",
//     apellido:"Simpsons",
//     edad:"35",
//     email:"homero@gmail.com"

// }

// console.log(persona.nombre)
// console.log(persona["nombre"])


//funciones constructoras (Pascal case)


// for (let i = 0; i<1; i++) {
    //     const nombre = prompt("ingresar nombre")
    //     const apellido = prompt("ingresar apellido")
    //     const edad = parseInt( prompt("ingresar edad"))
    // }
    
    function Personal (nombre, apellido, edad){
        this.nombre   = nombre
        this.apellido = apellido
        this.edad     = edad
    }
//creando dos objetos (instancias)
const persona3 = new Personal ("Lucas","Rodriguez", 25)
const persona4 = new Personal ("Juan", "Perez", 35)


console.log(persona3)
console.log(persona4)

const saludar = ()=>{
    
}

const objeto = {
    nombre: "faq",
    edad: 28
}

//metodos (.log  .length  .lowercase)

console.log(objeto)

let texto = "Hola Coders"
console.log(texto.length)
console.log(texto.toLowerCase())

function People(nombree, apellidoo, edadd) {
    this.nombree   = nombree
    this.apellidoo = apellidoo
    this.hablar    = function () {
        return("Hola soy" + this.nombree)
    }
}

const people1 = new People("facu","faka")

console.log(people1.hablar());

//me enumeró las propiedades del objeto
for (const propiedad in people1) {
    console.log("propiedad: ", propiedad)
    console.log("valor propiedad:", people1[propiedad])
}

// clases => suggar sintax => forma generica de escribir funciones constructoras

class Pipol {
    constructor(nombre, apellido, edad){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
    }
    talk(){      //metodo-function-va por fuera 
        console.log("hola soy ", this.nombre)  
    }
}

const humano = new Pipol ("juan", "perez", "29")
console.log(humano)

console.log(humano.talk)  //llamando a la funcion talk


// class producto{
//     constructor(nombre, precio){
//         this.nombre = nombre
//         this.precio = precio
//         this.vendido = false
//     }
//     sumarIva(){
//         this.precio = this.precio * 1.21   
//     }
// }

// const producto3 = new producto ("arroz", 125)

const arrayA = [1,2,"c3", true,{nombre:"facu"}]
console.log(arrayA[4]) //para acceder utilizar la posicion entre corchetes

// const numeros = [1,2,3,4,5,6]
// for(let index=0; index<6; index++){
//     alert(numeros[index])
// }

const miArray = ["facu", true,false]
console.log(miArray.length)                //tamaño
console.log(miArray[miArray.length - 1])   //ultima posicion
// console.log/table/dir
//.push agrega un dato mas al array miArray.push(3)
//.unshift agrega un dato al principio miarray.unshift(true)
//.shift elimina el primer elemento
//.pop elimina el ultimo
//.splice borra elementos
//.join une los elementois de un array
//.concat une 2 o mas arrays y elementos
//.slice copiar desde hasta en un array
//.indexOf devuelve la posicion dentro de un array de la primer coincidencia que encuentra
//.includes() si un elemento que recibo por parámetro existe o no dentro de un array
//.reverse() reversa los elementos

// const listaProducto = []
// console.log(listaProducto.length)
// let cantidad = Number(prompt("Ingrese cantidad de productos"))
// do{ 
//     let entrada = prompt("Ingresar nombre producto:")
//     listaProducto.push(entrada.toLocaleUpperCase())
//     console.log("listado", listaProducto)
//     console.log( "tamaño array:", listaProducto.length)
// }while(listaProducto.length !== cantidad)