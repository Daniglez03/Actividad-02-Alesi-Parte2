const WORDS = [
    "Alan",
    "Alberto",
    "Gema",
    "Juan",
    "Sara",
    "Antonio",
    "Manuel",
    "Ricardo",
];


const loadword = () => {
    const randomName = Array.from(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase())
    return new Promise((resolve) => {
        resolve(randomName)
    })
}

const play = () => {
    let tamano;
    return new Promise((resolve, reject) => {
        loadword()
            .then((randomName) => {
                tamano = randomName.length
                let contador = 1;
                let frase = "";
                console.log(randomName);
                /*for (let i = 0; i < tamano; i++) {
                    let palabraCensuradaActual;
                    for (let i = 0; i < tamano; i++) {
                        if (randomName[0] === frase) {
                            palabraCensuradaActual += frase.toUpperCase()
                        } else {
                            if (randomName[i] === frase) {
                                palabraCensuradaActual += `${frase}`
                            } else {
                                palabraCensuradaActual += "X"
                            }
                        }
                    }
                    frase = prompt(`Intruduce la ${contador++}º letra: 
                    ${palabraCensuradaActual}`)
                    if (frase == null) {
                        alert("Has cancelado el juego...")
                        break
                    }
                    if (isNaN(frase) === false) {
                        alert(`Error el valor introducido no es una letra
                        Debes empezar el juego...`)
                        break
                    }
                }*/
                let palabraCensuradaActual = "";
                for (let i = 0; i < tamano; i++) {
                    frase = prompt(`Intruduce la ${contador++}º letra: 
                    ${palabraCensuradaActual}`)

                    const cambios = randomName.map((palabraCensuradaActual, index) => {
                        if (frase === palabraCensuradaActual && index === 0) {
                            palabraCensuradaActual += frase.toUpperCase()
                        } else {
                            if (frase === randomName[index]) {
                                palabraCensuradaActual += frase
                            } else {
                                palabraCensuradaActual += "X"
                            }
                        }
                    });
                    console.log(palabraCensuradaActual);
                    console.log(randomName);
                    console.log({cambios});
                }
            })
    });
}
const isPlaying = () => {
    let opcion = confirm("¿Quieres continuar?");
    if (opcion == true) {
        console.log("Aceptar")
    } else {
        alert("Terminó el juego")

    }
}
//letra ingresada a minúscula
/*let letra = e.target.value.toLowerCase();
let letters = randomName.toLowerCase().split('');
letters.forEach(function (letter, i) {
    if (letra == letter) {
        palabraCensurada = palabraCensurada.replace(i * 2, letra);
    }
});
document.getElementById('printletra').innerHTML = replaceWord;
console.log(replaceWord)*/

/*app()
    .then((randomName) =>{
        play(randomName)
    })
*/

play()