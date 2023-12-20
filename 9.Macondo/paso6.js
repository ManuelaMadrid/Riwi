//Punto#06 - Macondo
function muestra(){
    let colorVestimenta = document.getElementById("tipoRopa").value;
    let bandera = true;
    let vivo = "Estoy vivo";
    alert(colorVestimenta)
    
    if(colorVestimenta = "1"){
        if(bandera = true){
            console.log("- ir a la piscina, el agua huele raro, pero no le pone importancia");
            console.log("-si se mete, empieza a sentirse ahogado, demasiado cloro, muere");
            console.log("(terminan las vacaciones)");
        } else {
            console.log("No pasa nada: ");
            alert(vivo)
        }
    
    } else if(colorVestimenta = "2") {
        if(bandera = true){
            console.log("aminatas, y agüita para el camino");
            console.log("si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos");
        }else{
            console.log("-si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde");
            alert(vivo)
        }
       
    } else if(colorVestimenta = "3"){
    console.log("- actividades en la playa");
    console.log("- voleibol, juega y la pasa genial");
    console.log("- nada en el mar, y monta moto");
    console.log("- se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia terminan las vacaciones");
    }else{
    console.log("actividades dentro del hotel");
    console.log("1- bingo, se lo gana y aumenta su dinero");
    console.log("2- bailar, y la pasa muy bien");
    console.log("3- casino y apuesta, y solo se queda con pasaje de regreso (terminan las vacaciones)");
    }
}
    
muestra();