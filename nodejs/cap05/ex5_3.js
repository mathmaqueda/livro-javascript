const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor da Conta: R$"))
const parcelas = Number(prompt("N° de Parcelas: "))

let valor_parcelado = Math.floor(valor/parcelas)
let sobra = valor%parcelas


for (let i=parcelas; i>=1; i--){
    if(i==1){
        console.log(`${i}ª Parcela: ${(valor_parcelado + sobra).toFixed(2)}`)
    } else {
        console.log(`${i}ª Parcela: ${valor_parcelado.toFixed(2)}`)
    }
}