let estudiantePrueba = [
    {
        nombre: "",
        edad: '',
        familia: '',
        linaje: '',
        casa: '',
        animalPatronus: '',
        cualidades: ""
    }
]
let clases = {
    transformaciones: 'Profesor Kevin Slughorn',
    herbologia: 'Profesor Maria Umbridge',
    pociones: 'Profesor Liliana McGonagall',
    encantamientos: 'Profesora Jackie',
    defensaContraLasArtesOscuras: 'Profesor Robinson Snape ',
    animalesMagicos: 'Profesor David Filch',
    historiaDeMagia: 'Profesor Ronald Sprout',
}
class casas {
    constructor(cualidades, linaje) {
        this.cualidades = cualidades
        this.linaje = linaje
    }
}
const Gryffindor = new casas(
    ['Valor', 'Fuerza', 'Audacia'],
    ['Sangre pura', 'Mestizo', 'Muggle']
)
const Hufflepuff = new casas(
    ['Justicia', 'Lealtad', 'Paciencia'],
    ['Mestizo', 'Muggle']
)
const Ravenclaw = new casas(
    ['Creatividad', 'Erudición', 'Inteligencia'],
    ['Sangre pura', 'Mestizo', 'Muggle']
)
const Slytherin = new casas(
    ['Ambición', 'Determinación', 'Astucia'],
    ['Sangre pura']
)

if (String(Gryffindor.cualidades) == String(estudiantes.cualidades) && Gryffindor.linaje.includes(estudiantes.linaje)) {
    estudiantes.casa = 'Gryffindor'
}
else if (String(Hufflepuff.cualidades) == String(estudiantes.cualidades) && Hufflepuff.linaje.includes(estudiantes.linaje)) {
    estudiantes.casa = 'Hufflepuff'
}
else if (String(Slytherin.cualidades) == String(estudiantes.cualidades) && Slytherin.linaje.includes(estudiantes.linaje)) {
    estudiantes.casa = 'Slytherin'
}
else if (String(Ravenclaw.cualidades) == String(estudiantes.cualidades) && Ravenclaw.linaje.includes(estudiantes.linaje)) {
    estudiantes.casa = 'Ravenclaw'
}
console.log(estudiantes)

let transformaciones = {
    Profesor: 'Kevin Slughorn',
    horario: '3:00P.M.',
    boggart: 'arañas',
    realizarTransformacionRiddikulus(boggartSi) {
        if (boggartSi) {
            this.enfrentarBoggart(this.boggart)

        }
        else {
            console.log("No hay ningun boggart.")
        }

    },

    noBoggart(boggart) {
        this.boggart = "yoyo"
        return "yoyoyo"
    },


}
let boggartt = {
    apariencia: "payaso"


}
transformaciones.realizarTransformacionRiddikulus(true)
console.log(transformaciones.boggart)

boggartt.apariencia = transformaciones.noBoggart()
console.log(boggartt.apariencia)

let animales = ["Ciervo", "Zorro", "Perro", "Liebre", "Nutria", "Caballo"]
let animal = animales[Math.floor(Math.random() * animales.length)];
console.log(animal)

let defensaContraLasArtesOscuras = {
    Profesor: 'Profesor Robinson Snape ',
    asignarPatronus() {
        let animales = ["Ciervo", "Zorro", "Perro", "Liebre", "Nutria", "Caballo"]
        let animal = animales[Math.floor(Math.random() * animales.length)];
        estudiantes.animalPatronus = animal
    },

}
defensaContraLasArtesOscuras.asignarPatronus();
function dementor() {
    if (estudiantes.animalPatronus != "") {
        console.log("Ha logrado detener al dementor.")
    }
    else {
        console.log("Ha sido absorbido por un dementor, usted es llevado a enfermeria.")
    }

}
dementor()
console.log(estudiantes)