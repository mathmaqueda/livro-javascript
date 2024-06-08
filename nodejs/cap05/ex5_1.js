const prompt = require("prompt-sync")()

do {
    const valor = Number(prompt("Ano: "))
    if(valor == 0) {
        console.log("Saindo...")
        break
    }
    if(valor < 1930 || valor == 1942 || valor == 1946){
        console.log(`${valor} não é ano de Copa do Mundo.`)
    } else {
        let i=1930
        while(true) {
            if(i > valor) {
                console.log(`${valor} não é ano de Copa do Mundo`)
                break
            } else if(i == valor) {
                console.log(`${valor} é ano de Copa do Mundo.`)
                break
            } else {
                i += 4
            }
        }
    }

} while (true)