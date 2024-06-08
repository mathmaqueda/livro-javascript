const prompt = require("prompt-sync")() //adiciona pacote para entrada de dados
const salario = Number(prompt("Salário do funcionário: R$"))
const tempo = Number(prompt("Tempo que trabalha na empresa (anos): "))
const quadrienios = Math.floor(tempo / 4)
const salFinal = salario + (salario * (quadrienios/100))
console.log(`O funcionário tem direito a ` + quadrienios + ` quadriênios.`)
console.log(`O salário final será de: R$` + salFinal.toFixed(2) + `.`)