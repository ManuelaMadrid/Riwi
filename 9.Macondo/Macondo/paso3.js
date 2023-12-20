//Punto#03 - Macondo
function convertirAdecimales(binario){
    let decimal = 0;

    for (let index = 0, j = binario.length; index < binario.length; index++, j--) {
        decimal += Number(binario[index]) * Math.pow(2, j - 1);
    }
   
    return decimal;
}

let wifi = "elpassEs";
let passwordWifi = "01110010_01101001_01110111_01101001";
passwordWifi = passwordWifi.split("_");


let password = passwordWifi.map((elemento) => String.fromCharCode(convertirAdecimales(elemento))).join("");
alert(`La contraseña es : ${password}`)