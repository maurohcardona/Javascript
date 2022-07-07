let nombre = prompt('Ingrese su nombre');
let verificarNOmbre = prompt("El nombre ingresado es " + nombre + ", ¿es correcto?, escriba si para aceptar o no para ingresarlo nuevamente");
   
    while (((verificarNOmbre != "si") && (verificarNOmbre != "no")) || (verificarNOmbre == "no")) {
       
        nombre = prompt ("Vuelva a ingresar su nombre")
        verificarNOmbre = prompt("El nombre ingresado es " + nombre + ", ¿es correcto?, escriba si para aceptar o no para ingresarlo nuevamente");
   }
   
    
    if (verificarNOmbre =="si") {
        alert ("Muchas gracias")
    
    }

    alert ("juguemos un juego.... Vamos!!")
    alert ('Escriba primero el numero 11 y luego vaya agregando numeros 1 susecivamente, si se olvida de un 1 o pone un 1 de mas perdera')
    alert ('Buena suerte')
    let n =50
    
    for (let i = 1; i > 0 ; i ) {
        i= i + '1'
        //alert (i);
        n = parseInt (prompt('Ingerese el numero anterior'));
        //alert (n);
        if (i != n) {
            break
        }
    }

    alert('perdiste')

    

        
        
        
           
    