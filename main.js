function personaje (nombre, genero, raza, clase) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = raza;
    this.clase = clase;
    
}
let nombre;
let nombrep;
const saludar = (nombrep) => {
    Swal.fire({
        title: `Estas seguro de elegir a ${nombrep}`,
        
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(`Haz elegido a ${nombrep}`);
                ;
                cambioNombre()
                
                
            }
        })}
        function cambioNombre(){
                Swal.fire({
                title: 'Quieres cambiarle el nombre a tu personaje?',
                showDenyButton: true,
                confirmButtonText: 'Si quiero',
                denyButtonText: `No, no quiero`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Ingresa el nuevo nombre',
                        input: 'text',
                        showDenyButton: true,
                        confirmButtonText: 'Confirmar',
                        denyButtonText: `Cancelar`,
                    }).then((resultado) => {
                        if (resultado.value) {
                             nombre = resultado.value;
                             Swal.fire(`tu personaje ahora de llama ${nombre}`);
                                
                            }
                })
            } })}
                
                    
            
            

const personaje1 = new personaje ("Oliver", "Hombre", "Humano", "Paladin");
const personaje2 = new personaje ("Morana", "Mujer", "elfa", "Arquera");
const personaje3 = new personaje ("Tron", "Hombre", "Orco", "Guerrero");
const personaje4 = new personaje ("Loli", "Mujer", "Dranei", "Maga");



/*let nombre;

   function cambioNombre () {
        nombre = confirm ('¿Quiere cambiarle el nombre a su personaje?')
        switch (nombre) {
            case true:
                nombre = prompt ('Ingrese el nuevo nombre')
                alert ('Su personaje ahora se llama ' + nombre)
                    break;
            case false:
                
                break;
                }
   }*/

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


       
    document.querySelector('#paladin').onclick = () => {saludar(personaje1.nombre), elejirP1(),botonSiguente()};
       

    let botonarquera = 
        document.querySelector('#arquera')
        botonarquera.onclick = () => {saludar(personaje2.nombre), elejirP2(),botonSiguente()};

    let botonorco = 
        document.querySelector('#orco')
        botonorco.onclick = () => {saludar(personaje3.nombre), elejirP3(),botonSiguente()};

    let botonmaga = 
        document.querySelector('#maga')
        botonmaga.onclick = () => {saludar(personaje4.nombre), elejirP4(), botonSiguente()};
        
            

  function botonSiguente() {
              document.querySelector('#miDiv').innerHTML = '<button id="bc" class = "miDiv"> Siguiente </button>' 
                document.querySelector('#bc').onclick = () => location.href = "caracterizacion.html"}
          
  
  
  
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

    function buscarInventario (){
        let buscar = prompt ('Ingrese el elemnto a buscar')
        const busqueda = inventario.find ((el) => el.nombre == buscar)
        console.log (busqueda)
    }

    // apis

    const datosPaldin = () => {
        fetch (`https://www.dnd5eapi.co/api/classes/paladin`)
         .then((response) => response.json())
        .then(info => {
            console.log (info)
            let data =""
            //console.log (info.name)
             data = `<h2>${info.name}</h2>
                    <p>${info.spellcasting.info[0].desc}`
            document.getElementById('informacion').innerHTML = data;
        })
          
        }


            const datosArquero = () => {
                fetch (`https://www.dnd5eapi.co/api/classes/ranger`)
                 .then((response) => response.json())
                .then(info => {
                    console.log (info)
                    let data =""
                    //console.log (info.name)
                     data = `<h2>${info.name}</h2>
                            <p>${info.spellcasting.info[0].desc}`
                    document.getElementById('informacion').innerHTML = data;
                })
                  
                }

                const darosorco = () => {
                    fetch (`https://www.dnd5eapi.co/api/classes/druid`)
                     .then((response) => response.json())
                    .then(info => {
                        console.log (info)
                        let data =""
                        //console.log (info.name)
                         data = `<h2>${info.name}</h2>
                                <p>${info.spellcasting.info[0].desc}`
                        document.getElementById('informacion').innerHTML = data;
                    })
                      
                    }

                    const datosmago = () => {
                        fetch (`https://www.dnd5eapi.co/api/classes/wizard`)
                         .then((response) => response.json())
                        .then(info => {
                            console.log (info)
                            let data =""
                            //console.log (info.name)
                             data = `<h2>${info.name}</h2>
                                    <p>${info.spellcasting.info[0].desc}`
                            document.getElementById('informacion').innerHTML = data;
                        })
                          
                        }
    

    document.querySelector('#ipaladin').onclick = () => {datosPaldin()}
    document.querySelector('#iarquero').onclick = () => {datosArquero()}
    document.querySelector('#iwarrior').onclick = () => {darosorco()}
    document.querySelector('#image').onclick = () => {datosmago()}
   
    