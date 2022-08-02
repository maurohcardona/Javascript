// funcion caracterizacion
let puntosPendientes = 10;

 document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes 
    
    

let fuerza = 0;


let vida = 0
let magia  = 0

function sumaFuerza(){
    if (puntosPendientes > 0) {
    fuerza = fuerza + 1
    puntosPendientes = puntosPendientes - 1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#fuerza").innerHTML = fuerza;
    //alert (puntosPendientes)
    }
    
        else {
            alert ('No posee puntos disponibles')
        }
    }
        
    
function restaFuerza(){
    if (fuerza > 0){
    fuerza = fuerza - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#fuerza").innerHTML = fuerza;}
}
function sumaVida(){
    if (puntosPendientes > 0) {
    vida = vida + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#vida").innerHTML = vida;}
    else {
        alert ('No posee puntos disponibles')
    }
}
function restaVida(){
    if (vida > 0){
    vida = vida - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#vida").innerHTML = vida;}
    
}

function sumaMagia(){
    if (puntosPendientes > 0){
    magia = magia + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#magia").innerHTML = magia;}
    else {
        alert('No posee puntos disponibles')
    }
}
function restaMagia(){
    if (magia > 0){
    magia = magia - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = "<b>Puntos pendientes: </b>"  + puntosPendientes
    document.querySelector("#magia").innerHTML = magia;}
    
}