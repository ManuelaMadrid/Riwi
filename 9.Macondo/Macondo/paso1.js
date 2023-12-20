//Punto #01 - Macondo
let salarioHildebrando = 2500000; //Se define el salario de Hildebrando
let compra = prompt("1-) Almojábana 2-) Subway elije una opcion:") //Se ponen dos opciones a seleccionar 1 o 2
if(compra == 1){ //Alerta disponible, si compra una almojábana, también muestra el dinero disponible
    salarioHildebrando = salarioHildebrando - 15000;
    alert("Has comprado un almojábana, esta te caerá mal, ya que llevas mucho en el stand. Tu saldo restante es: " +salarioHildebrando)
}else if(compra == 2){ //Alerta disponible, si compra un subway con gaseosa, también muestra el dinero disponible
    salarioHildebrando = salarioHildebrando - 23000;
    alert("Has comprado un subway, estarás bien llenito. Tu saldo restante es: " +salarioHildebrando);
}else{ //Alerta disponible en caso de que no compre nada
    alert("No has comprado nada, deberás de alimentarte en la ciudad de Medellín.");
}
console.log(salarioHildebrando); //Mostramos el dinero disponible

sessionStorage.setItem("salario", salarioHildebrando)