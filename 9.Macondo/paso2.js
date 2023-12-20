//Punto#02 - Macondo
let maletaHildebrando = [60, 40, 20]; // Se define las dimensiones de la maleta de Hildebrando 
let tamañoMaletaAereopuerto = [55, 40, 20];// Se define las dimensiones de tamaño permitidas en el aeropuerto
console.log(tamañoMaletaAereopuerto[1]);//Se imprime la posición 1 de tamañoMaletaAereopuerto (40 porque inicia en 0)
let reduccionMaleta = Math.min( //Se toma el mínimo de las divisiones de las dimensiones de la maleta de Hildebrando entre las dimensiones permitidas en el aeropuerto
  tamañoMaletaAereopuerto[0] / maletaHildebrando[0],
  tamañoMaletaAereopuerto[1] / maletaHildebrando[1],
  tamañoMaletaAereopuerto[2] / maletaHildebrando[2]
);
console.log(reduccionMaleta); // Se imprime el factor de reducción
let alturaMaleta = maletaHildebrando[0] * reduccionMaleta; // Se calculan las nuevas dimensiones de la maleta aplicando el factor de reducción
let anchoMaleta = parseInt(maletaHildebrando[1] * reduccionMaleta);
let largoMaleta = parseInt(maletaHildebrando[2] * reduccionMaleta);
console.log(anchoMaleta, largoMaleta); // Se imprimen las nuevas medidas de la maleta
alert("El resultado del segundo punto es: " + anchoMaleta + ", " + largoMaleta);// Alerta que muestra el resultado del segundo punto (ancho y largo de la maleta reducida)