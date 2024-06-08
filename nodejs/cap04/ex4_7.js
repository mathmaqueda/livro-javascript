const prompt = require("prompt-sync")()
const valor = Number(prompt("Número (centena): "))

if(valor < 100 || valor >= 1000){
    console.log(`Erro! O valor deve ser uma centena.`)
    return
}

const centena = Math.floor(valor / 100)
let sobra = valor % 100
const dezena = Math.floor(sobra / 10)
const unidade = sobra % 10

console.log(`O valor invertido é ${unidade}${dezena}${centena}`)