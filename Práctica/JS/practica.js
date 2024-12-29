/*console.log("ok")

const nombreUsuario = document.getElementById("nombre").value
console.log(nombreUsuario)

const parrafoSaludo = document.getElementById("saludo")
//console.log(parrafoSaludo)
parrafoSaludo.innerText="Hola " + nombreUsuario

const edad = document.getElementById("edad").value
console.log(edad)
mayorDeEdad.innerText ="Tenés " + edad + "años."

//console.log(edad >= 18)
const esMayor = document.getElementById("esMayor")
if (edad>60) {
    esMayor.innerText="Tiene un descuento del 15% por jubilado."
} else if (edad>=18 && edad<41) {
    esMayor.innerText="Podes comprar bebidas alcohólicas."
} else if (edad>=41 && edad<61) {
    esMayor.innerText="Tiene un descuento del 20%."
} else {
    esMayor.innerText="Sos menor de edad. Solo podes comprar agua y gaseosa."
}

console.log(typeof(edad)) //para saber qué tipo de dato tengo
console.log(parseInt(edad))
console.log(isNaN(parseInt("48"))) //para ver si no es un número. NaN = Not a number
const validarEdad=document.getElementById("validarEdad")
if(isNaN(edad)){ //true or false
    validarEdad.innerText="El valor ingresado no es correcto. Ingrese un número"
} //este if es para validar los datos que ingresa un usuario
*/
//Ahora vamos a tomar el valor con un prompt
//const nombrePrompt=prompt("Escribi tu nombre")
//console.log(nombrePrompt)
/*let edadPrompt=parseInt(prompt("Cuantos años tenes?"))
console.log(edadPrompt)
console.log(typeof(edadPrompt))
*/
/*if(edadPrompt<0||edadPrompt>100||isNaN(edadPrompt)){
    console.log("Ingrese un valor correcto para su edad")
} else {
    console.log("La edad es correcta.")
}
*/
/*
//Como no sabemos cuántas veces el usuario va a ingresar un valor incorrecto, usamos while o do while
let edadPrompt//LO DEJO UNDEFINED =parseInt(prompt("Cuantos años tenes?"))
while(edadPrompt<0||edadPrompt>100||isNaN(edadPrompt)) {
    edadPrompt=parseInt(prompt("Cuantos años tenes?"))
    if(edadPrompt<0||edadPrompt>100||isNaN(edadPrompt)){
        console.log("Ingrese un valor correcto para su edad")
    } else {
        break
    }
}
console.log("La edad es correcta.")  
*/

/*
//También se puede haacer con do while
let edadPrompt
do {
    edadPrompt=parseInt(prompt("Cuantos años tenes?"))
    if(edadPrompt<0||edadPrompt>100||isNaN(edadPrompt)){
        console.log("Ingrese un valor correcto para su edad")
    }    
} while (edadPrompt<0||edadPrompt>100||isNaN(edadPrompt));
console.log("La edad es correcta");
*/
/*
//Ahora va el for
for (let contador = 0; contador < 10; contador++) {//repite 10 veces la accion
    console.log("El valor del contador es: "+contador);
}
*/


console.log("Objetos");
let frutas=["peras","naranjas", "manzanas","uvas"];
console.log(frutas);
//console.log(frutas[0])
//Para mostrar todos los elementos del array
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}
//Para cambiar un elemento del array
frutas[2]="pomelos";
console.log(frutas);

//Una forma de buscar un elemento dentro del array
const elementoBuscado="pomelos";
for (let i = 0; i < frutas.length; i++) {
    if(frutas[i]===elementoBuscado){
        console.log(elementoBuscado+" encontrado en la posición: "+i+"/"+frutas.length)
        break
    } else {
        console.log(elementoBuscado+" no está en la posición: "+i+"/"+frutas.length)
    }
}


//OBJETOS EN JS: json (Java Script Object Notation)
/*let producto = {
    codigo:181,
    descripcion:"producto",
    nombre:"nombre",
    precio:8000,
}
console.log(producto)
*/

//Arreglos de objetos
let productos=[
    {
        codigo:1,
        descripcion:"producto1",
        nombre:"nombre1",
        precio:8000,
    },
    {
        codigo:2,
        descripcion:"producto2",
        nombre:"nombre2",
        precio:8000,
    },
    {
        codigo:3,
        descripcion:"producto3",
        nombre:"nombre3",
        precio:8000,
    },
]
console.log(productos)