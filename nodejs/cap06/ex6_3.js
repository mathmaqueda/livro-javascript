const prompt = require("prompt-sync")()
console.log("Informe o valor de cada saque. Digite 0 para sair")
const saques = []
do {
    const valor = Number(prompt("Saque R$: "))
    if(valor == 0){
        break
    }
    saques.push(valor)
    if(valor%10 == 0){
        console.log("Saque realizado com sucesso")
    } else {
        console.log("Valor inválido. Temos apenas notas de 10.")
    }
} while (true)

const saquesValidos = saques.filter(saque => saque % 10 == 0)
const soma = saquesValidos.reduce((total, saque) => total + saque, 0)

console.log("Saques Válidos")
console.log("-".repeat(40))
for(const saque of saquesValidos){
    console.log("R$" + saque)
}
console.log("-".repeat(40))
console.log("Total dos Saques: R$" + soma.toFixed(2))
const saquesInvalidos = saques.length - saquesValidos.length
console.log("N° de saques invalidos: " + saquesInvalidos)