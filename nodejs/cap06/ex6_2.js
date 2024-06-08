const prompt = require("prompt-sync")()
console.log("Informe os clientes em ordem de chegada. Após, digite 'Fim' no nome para sair")
const clientes = []
do {
    const nome = prompt("Nome: ")
    if(nome == "Fim"){
        break
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome, idade})
    console.log("Ok! Cliente inserido na fila...")
} while (true)

console.log("\nFila Preferencial")
console.log("-".repeat(40))
const preferencial = clientes.filter(cliente => cliente.idade >= 60)
preferencial.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})

console.log("\nFila Normal")
console.log("-".repeat(40))
const normal = clientes.filter(cliente => cliente.idade < 60)
normal.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})