// funcion caracterizacion
let puntosPendientes = JSON.parse(localStorage.getItem('puntosHAbilidad')) ?? 10;
document.querySelector('#puntos_disponibles').innerHTML = puntosPendientes

let fuerza = JSON.parse(localStorage.getItem('fuerza')) ?? 0;
let vida = JSON.parse(localStorage.getItem('vida')) ?? 0;
let magia  = JSON.parse(localStorage.getItem('magia')) ?? 0;

 document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
 document.querySelector('#fuerza').innerHTML = fuerza 
 document.querySelector('#vida').innerHTML = vida 
 document.querySelector('#magia').innerHTML = magia 
    
/*function sumarHabilidad(habilidad){
    if (puntosPendientes > 0) {
        habilidad = habilidad + 1
        puntosPendientes = puntosPendientes - 1
        
        document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
        document.querySelector("#fuerza").innerHTML = habilidad;
        //localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))
        alert(habilidad)
    }
}*/


function sumaFuerza(){
    if (puntosPendientes > 0) {
    fuerza = fuerza + 1
    puntosPendientes = puntosPendientes - 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#fuerza").innerHTML = fuerza;
    localStorage.setItem('fuerza', JSON.stringify(fuerza))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))
    //alert (puntosPendientes)
    }
    
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Parece que no posee puntos disponibles',
                
              })
        }
    }
        
    
function restaFuerza(){
    if (fuerza > 0){
    fuerza = fuerza - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#fuerza").innerHTML = fuerza
    localStorage.setItem('fuerza', JSON.stringify(fuerza))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))}
}
function sumaVida(){
    if (puntosPendientes > 0) {
    vida = vida + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#vida").innerHTML = vida;
    localStorage.setItem('vida', JSON.stringify(vida))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))}
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Parece que no posee puntos disponibles',
            
          })
    }
    }

function restaVida(){
    if (vida > 0){
    vida = vida - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#vida").innerHTML = vida;
    localStorage.setItem('vida', JSON.stringify(vida))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))}
    
}

function sumaMagia(){
    if (puntosPendientes > 0){
    magia = magia + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#magia").innerHTML = magia;
    localStorage.setItem('magia', JSON.stringify(magia))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))}
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: ' Parece que no posee puntos disponibles',
            
          })
    }
    }

function restaMagia(){
    if (magia > 0){
    magia = magia - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#magia").innerHTML = magia;
    localStorage.setItem('magia', JSON.stringify(magia))
    localStorage.setItem('puntosHAbilidad', JSON.stringify(puntosPendientes))}
    
}

function reset() {
    puntosPendientes = 10
    fuerza = 0
    magia = 0
    vida = 0
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes
    document.querySelector("#magia").innerHTML = magia;
    document.querySelector("#fuerza").innerHTML = fuerza;
    document.querySelector("#vida").innerHTML = vida;
}