function personaje (nombre, genero, raza, clase) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
    this.clase = clase;
    this.eleccion = function() { alert ("Has elegijo a " + this.nombre + ", bienvenido a la aventura")}
    
}

const personaje1 = new personaje ("Oliver", "Hombre", "Humano", "Paladin");
const personaje2 = new personaje ("Morana", "Mujer", "elfa", "Arquera");
const personaje3 = new personaje ("Tron", "Hombre", "Orco", "Guerrero");
const personaje4 = new personaje ("Loli", "Mujer", "Dranei", "Maga");



let nombre;

   function cambioNombre () {
        nombre = confirm ('¿Quiere cambiarle el nombre a su personaje?')
        switch (nombre) {
            case true:
                nombre = prompt ('Ingrese el nuevo nombre')
                alert ('Su personaje ahora se llama ' + nombre)
                window.location.href='caracterizacion.html'
                
                
                    break;
            case false:
                window.location.href='caracterizacion.html'
                break;
                }
   }

  //Funcion vidas restantes
   let vidas = 3
    function vidasRestantes(vidas){
    for (vidas = 3; vidas > 0; vidas--){
       if (vidas >= 1){
        alert ('Puede seguir jugando')}
        else{
        alert('Game Over')}
    }
}

// funcion caracterizacion

let puntosPendientes = 10
let fuerza = 0
let vida = 0
let magia  = 0

function sumaFuerza(){
    fuerza = fuerza + 1
    return(fuerza)
}
function restaFuerza(){
    fuerza = fuerza - 1
    return(fuerza)
}
function sumaVida(){
    vida = vida + 1
    return(vida)
}
function restaVida(){
    vida = vida - 1
    return(vida)
}
function sumaMagia(){
    return(magia)
    magia = magia + 1
}
function restaMagia(){
    return(magia)
    magia = magia - 1
}


function caracterizacion(){
    puntosPendientes = puntosPendientes - ((fuerza - vida - magia))
    
}


function puntosPendiente() {
    if (puntosPendientes >= 0){
       let i = confirm('¿Confirmar puntos asignados?')}
          if (i = true){
                    window.location.href='nuevaVentana.html'}
          else {
            alert ('No posee los puntos suficientes')
          }
        }

//Inventario

    const inventario = [];

     function AgregarAlInventario (objeto){
        inventario.push (objeto.nombre)
        console.log (inventario)
     } 


    function objeto (id, nombre, vida, magia, fuerza, daño) {
        this.id = id;
        this.nombre = nombre;
        this.vida = vida;
        this.magia = magia;
        this.fuerza = fuerza;
        this.daño = daño;
        
    }

    const pocion = new objeto (1, 'Pocion', 10, 0, 0, 0);
    const espada = new objeto (2, 'Espada', 0, 0, 2, 15 );

   