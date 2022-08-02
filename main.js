function personaje (nombre, genero, raza, clase) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
    this.clase = clase;
    this.eleccion = function() { 
        alert ("Has elegijo a " + this.nombre + ", bienvenido a la aventura")};
    }
        
    let botonPaladin = 
        document.querySelector('#paladin');
        botonPaladin.onclick = () => {personaje1.eleccion(), cambioNombre(), elejirP1()};

    let botonarquera = 
        document.querySelector('#arquera')
        botonarquera.onclick = () => {personaje2.eleccion(), cambioNombre(), elejirP2()};

    let botonorco = 
        document.querySelector('#orco')
        botonorco.onclick = () => {personaje3.eleccion(), cambioNombre(), elejirP3()};

    let botonmaga = 
        document.querySelector('#maga')
        botonmaga.onclick = () => {personaje4.eleccion(), cambioNombre(), elejirP4()};
        
            function elejirP1 (){
            const desaparecerPersonaje2 = document.querySelector("#arquera");
            desaparecerPersonaje2.remove();
            const desaparecerPersonaje3 = document.querySelector("#orco");
            desaparecerPersonaje3.remove();
            const desaparecerPersonaje4 = document.querySelector("#maga");
            desaparecerPersonaje4.remove();}
        
            
            
            function elejirP2 (){
            const desaparecerPersonaje1 = document.querySelector("#paladin");
            desaparecerPersonaje1.remove();
            const desaparecerPersonaje3 = document.querySelector("#orco");
            desaparecerPersonaje3.remove();
            const desaparecerPersonaje4 = document.querySelector("#maga");
            desaparecerPersonaje4.remove();}
            
            function elejirP3 (){
            const desaparecerPersonaje1 = document.querySelector("#paladin");
            desaparecerPersonaje1.remove();
            const desaparecerPersonaje2 = document.querySelector("#arquera");
            desaparecerPersonaje2.remove();
            const desaparecerPersonaje4 = document.querySelector("#maga");
            desaparecerPersonaje4.remove();}
        
            function elejirP4 (){
            const desaparecerPersonaje1 = document.querySelector("#paladin");
            desaparecerPersonaje1.remove();
            const desaparecerPersonaje2 = document.querySelector("#arquera");
            desaparecerPersonaje2.remove();
            const desaparecerPersonaje3 = document.querySelector("#orco");
            desaparecerPersonaje3.remove();}

            /*function botonSiguente() {
                const botonCarac = document.createElement('button');
                button.className = "miDiv";
                button.type = 'button'; 
                button.innerText = 'Siguiente'; 
                document.body.appendChild(botonCarac);
            }
            botonCarac.onclick = () => {window.location.href='caracterizacion.html'};
                
           function caracterizacion() {
            window.location.href='caracterizacion.html';
           } */  
            
        
    
            

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
let puntosPendientes = 50;

let puntitos = document.querySelector("#puntos_disponibles")
    puntitos.innerHTML = puntosPendientes
    

let fuerza = 0;


let vida = 0
let magia  = 0

function sumaFuerza(){
    if (puntosPendientes > 0) {
    fuerza = fuerza + 1
    puntosPendientes = puntosPendientes - 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
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
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
    document.querySelector("#fuerza").innerHTML = fuerza;}
}
function sumaVida(){
    if (puntosPendientes > 0) {
    vida = vida + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
    document.querySelector("#vida").innerHTML = vida;}
    else {
        alert ('No posee puntos disponibles')
    }
}
function restaVida(){
    if (vida > 0){
    vida = vida - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
    document.querySelector("#vida").innerHTML = vida;}
    
}

function sumaMagia(){
    if (puntosPendientes > 0){
    magia = magia + 1
    puntosPendientes = puntosPendientes -1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
    document.querySelector("#magia").innerHTML = magia;}
    else {
        'No posee puntos disponibles'
    }
}
function restaMagia(){
    if (magia > 0){
    magia = magia - 1
    puntosPendientes = puntosPendientes + 1
    document.querySelector("#puntos_disponibles").innerHTML = puntosPendientes;
    document.querySelector("#magia").innerHTML = magia;}
   
}





//Inventario

    /*const inventario = [];

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

    function buscarInventario (){
        let buscar = prompt ('Ingrese el elemnto a buscar')
        const busqueda = inventario.find ((el) => el.nombre == buscar)
        console.log (busqueda)
    }

   */