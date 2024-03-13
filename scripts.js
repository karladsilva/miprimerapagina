//alert("Hola este es mi Javascript");
 
// let nombre = "karla";
// nombre = "desiree";

// var nombre1 = "denesis";

// const nombre2 = "keila";
// nombre2 ="esther"

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";
let titulo = document.querySelector("a.fuente-acento");
console.log(titulo);

titulo.innerHTML = contenidoTitulo;

// CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre" ) {
     titulo.innerHTML = "Otro";
} else{
    console.log("no se cumple");
}

// FUNCIONES

let nombre = "Ani";
let ciudad = " Bs As";
let gusto = "chocolate";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y  vivo en Lima. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.` ;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);