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
    let tamano;
    return new Promise((resolve, reject) => {
        loadWord()
            .then((randomName) => {
                tamano = randomName.length
                let puntuacion = 0;
                let contador = 1
                let frase = ""
                let palabraCensurada = new Array(tamano)
                palabraCensurada.fill('X', 0, tamano)
                /*for (let i = 0; i < tamano; i++) {
                    for (let i = 0; i < tamano; i++) {
                        if (randomName[0] === frase && i === 0) {
                            temp += frase.toUpperCase()
                        } else {
                            if (randomName[i] === frase) {
                                temp += frase
                            } else{
                                temp += "X"
                            }
                        }
                    }
                    frase = prompt(`Intruduce la ${contador++}º letra: 
                    ${palabraCensurada}`)
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
                let resumen

                for (let i = 0; i < tamano; i++) {
                    frase = prompt(`Intruduce la ${contador++}º letra: 
                    ${palabraCensurada.join('')}`)
                    randomName.forEach((currentValue, index) => {
                        if (currentValue[0].toLowerCase() === frase.toLowerCase()) {
                            palabraCensurada[0] = frase.toUpperCase();
                            puntuacion++
                        }
                        if (currentValue.toLowerCase() === frase.toLowerCase()) {
                            palabraCensurada[index] = frase
                            puntuacion++
                        }
                        
                    });
                    console.log(palabraCensurada);
                    console.log(randomName);
                    console.log(frase);
                    if (frase == null) {
                        alert("Has cancelado el juego...")
                        break
                    }
                    if (isNaN(frase) === false) {
                        alert(`Error el valor introducido no es una letra
                        Debes empezar el juego...`)
                        break
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

const app = async () => {
    try {
        const randomWord = await loadWord()
        const game = await play(randomWord)
        const condition = await isPlaying(game)
        return condition
    } catch (error) {
        throw error
    }
}
app()
    .then((randomWord) => { play(randomWord)})
    .then((game) => { isPlaying(game)})
    .catch((error) => { console.log(error)})