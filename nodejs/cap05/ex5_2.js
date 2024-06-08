const prompt = require("prompt-sync")();

const nome = prompt("Produto: ")
const num = Number(prompt("N° de Estiquetas: "))

for (let i=1; i<=num/2; i++) {
    console.log(`${nome.padEnd(30)} ${nome.padEnd(30)}`)
} 

if(num % 2 == 1) {
    console.log(nome)
}