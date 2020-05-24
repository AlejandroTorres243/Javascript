var nombre = "Manuel Higueras"
var altura = 1.89

var cadena = nombre + "esta es tu altura " + altura + "metros."

var datos = document.getElementById("datos");

document.write(nombre + altura);

datos.innerHTML = cadena;

var caja = document.getElementById("bloque");

caja.innerHTML = `
    <h1>Este es un mensaje por JAVASCRIPT</h1>
    <h2>You are welcome</h2>
    <h3>{altura}</h3>
`
if(altura > 2){
    caja.innerHTML += `
        <h1>Perfecto</h1>
    `
}
else
    caja.innerHTML += `
        <h3>No eres perfecto</h3>
    `

function Muestra_funcion(name, number){
    caja.innerHTML += `
    <h1>Esta es una funcion</h1>
    <h2>Este texto lo mando de alli</h2>
    <h3> ${name} / ${number} / Informatico </h3>
`
}

function Muestra_funcion2(name, number){
    caja.innerHTML += `
    <h1>Esta es una funcion</h1>
    <h2>Este texto lo mando de alli</h2>
    <h3> ${name} / ${number} / Informatico </h3>
`
    return caja

}

function imprime(){

    Muestra_funcion("Jose", 7)

}

Muestra_funcion("Manuel", 5)
imprime()

var vocales = ["a", "e", "i", "o", "u"]

for(cont = 0; cont < vocales.length; cont++){
    caja.innerHTML += `<h3>${vocales[cont]}</h3><br>`
}

vocales.forEach(function(vocal){
    caja.innerHTML += `<h4>${vocal}</h4>`
})