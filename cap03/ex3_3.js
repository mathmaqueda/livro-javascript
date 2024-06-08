const prompt = require("prompt-sync")() //adiciona pacote para entrada de dados
const peso = prompt("Peso da ração (kg): ")
const consumo = prompt("Consumo do gato por dia (g): ")
const pesoG = peso * 1000
const duracao = Math.floor(pesoG / consumo)
const sobra = pesoG % consumo
console.log(`A ração durará ${duracao} dias. Sobrará ${sobra} gramas de ração de mijo pra Lizzy`)