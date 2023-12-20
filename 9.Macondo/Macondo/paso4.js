//Punto#04 - Macondo
let vocals = ["a", "e", "o", "u"];
let taxi = "Taxi me puede llevar al hotel mariposas amarillas"

vocals.forEach(function(vocal){
    taxi = taxi.replaceAll(vocal, "i");
})
