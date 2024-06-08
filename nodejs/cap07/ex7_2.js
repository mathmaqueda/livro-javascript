const prompt = require("prompt-sync")()
const altura = Number(prompt("Altura da Árvore: "))
console.log() //linha em branco
for(let i=1; i<=altura; i++){
    const espacos = 30 + (altura - i)
    console.log(" ".repeat(espacos) + "*".repeat(i*2)) // exibe cada linha por repetição
    // repete * por i vezes 2, da certinho
}
for(let i=altura; i>=altura/2; i--){
    const espacos = 30 + (altura - 1)
    console.log(" ".repeat(espacos) + "*")
}