//Punto#05 - Macondo 
let dineroHilder = sessionStorage.getItem("salario")

var dinero = dineroHilder;

let opcionTaxista = ["piedra", "papel", "tijeras"];
let opcionPersona = ["piedra", "papel", "tijeras"]

let opcionAzarTaxista = opcionTaxista[Math.floor(Math.random() * opcionTaxista.length)]
document.getElementById("azarTaxista").innerText = `el taxista saca ${opcionAzarTaxista}`

let opcionAzarPersona = opcionPersona[Math.floor(Math.random() * opcionPersona.length)]
document.getElementById("azarPersona").innerText = `tu sacas ${opcionAzarPersona}`
let modTextHtml = document.getElementById("infoJuego")

if((opcionAzarTaxista == "tijeras" && opcionAzarPersona == "piedra" ) || (opcionAzarTaxista == "papel" && opcionAzarPersona == "tijeras" ) || (opcionAzarTaxista == "piedra" && opcionAzarPersona == "papel" )){
    dinero = dinero
    modTextHtml.innerText = `Coramos no le pagamos nada, Dinero siponible: ${dinero}`;
} else if ((opcionAzarTaxista == "piedra" && opcionAzarPersona == "tijeras" ) || (opcionAzarTaxista == "tijeras" && opcionAzarPersona == "papel" ) || (opcionAzarTaxista == "papel" && opcionAzarPersona == "piedra" )){
    dinero = dinero - 300000
    modTextHtml.innerText = `paga porque perdistes, Dinero disponible: ${dinero}`
}else{
    dinero = dinero
    modTextHtml.innerText = `empate no se hace nd, dinero disponible; ${dinero}`
}

sessionStorage.setItem("salario", dinero)

