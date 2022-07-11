/*function personaje (nombre, genero, raza, clase) {
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
        nombre = confirm ('Quiere cambiarle el nombre a su perdonaje')
        switch (nombre) {
            case true:
                nombre = prompt ('Ingrese el nuevo nomre')
                alert ('Su personaje ahora se llama ' + nombre)
                
                
                    break;
            case false:
                break;
                }
   }*/

   //Distribucion de puntos de habilidad

   let puntosHabilidadInicial = 10;
   let fuerza = 0;
   let vida = 0;
   let magia = 0;

   function puntosDeHabilidad(){
   for (puntosHabilidadInicial = 10; puntosHabilidadInicial = 0; puntosHabilidadInicial - (fuerza + vida + magia)) {
    fuerza = prompt('ingrese fuerza')
    vida = prompt('ingrese vida')
    magia = prompt('ingrese magia')
   }
}

puntosDeHabilidad()

