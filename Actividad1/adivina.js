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


const loadWord = () => {
    const randomName = Array.from(WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase())
    return new Promise((resolve) => {
        resolve(randomName)
    })
}

const play = () => {
    return new Promise((resolve) => {
        loadWord()
            .then((randomName) => {
                let puntuacion = 0;
                let contador = 1
                let palabraCensurada = new Array(randomName.length)
                palabraCensurada.fill('X', 0, randomName.length)
                let resumen
                let frase
                while (puntuacion < randomName.length && contador <= randomName.length && palabraCensurada.includes('X')) {
                    frase = prompt(`Intruduce la ${contador++}º letra: 
                    ${palabraCensurada.join('')}`)
                    if (frase !== null) {
                        let isError = false
                        for (let i = 0; i < randomName.length; i++) {
                            randomName.forEach((currentValue, index) => {
                                if (currentValue === frase.toLowerCase()) {
                                    palabraCensurada[index] = frase
                                }
                                if (randomName[0] === frase.toLowerCase()) {
                                    palabraCensurada[0] = frase.toUpperCase()
                                }
                            });
                            if (isNaN(frase) === false) {
                                alert(`Error el valor introducido no es una letra
                                Debes empezar el juego...`)
                                isError = true
                                break
                            }
                        }
                        console.log(palabraCensurada);
                        if (isError === true) {
                            break
                        }

                    } else {
                        alert("Has cancelado el juego...")
                        break
                    }

                }
                for (let index = 0; index < palabraCensurada.length; index++) {
                    if (palabraCensurada[index] != "X") {
                        puntuacion++
                    }
                }
                resumen = alert(`Palabra a adivinar:  ${randomName.join('')}
                Tu intento: ${palabraCensurada.join('')}
                Has obtenido: ${puntuacion} puntos`)
                resolve(resumen)
            })
    });
}
const isPlaying = (opcion) => {
    return new Promise((resolve, reject) => {
        opcion = confirm("¿Quieres continuar?");
        if (opcion == true) {
            console.log("Aceptar")
            return app()
        }
        resolve(opcion)
        reject(alert("Terminó el juego"))
    })
}

const app = () => {
    loadWord()
        .then((randomName) => {
            play(randomName)
        })
        .then((opcion) => {
            isPlaying(opcion)
        })
        .catch((err) => console.log(err))
}

app()