const prompt = require("prompt-sync")()

const vinhos = []

do {

    titulo("===< Inclusão de Vinhos >===")
    console.log("1. Inclusão de Vinhos")
    console.log("2. Listagem de Vinhos")
    console.log("3. Pesquisa por Tipo")
    console.log("4. Média e Destaques")
    console.log("5. Finalizar")
    const opcao = prompt("Opção: ")

    if(opcao == 1){
        inserirVinho();
    } else if(opcao == 2){
        listarVinhos();
    } else if(opcao == 3){
        pesquisarTipo();
    } else if(opcao == 4){
        calcularMedia()
    } else if(opcao == 5){
        break
    } else {
        console.log("Opção Inválida")
    }

} while(true)

function titulo(texto){
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}

function inserirVinho() {
    titulo("===< Inclusão de Vinhos >===")
    const marca = prompt("Marca...: ")
    const tipo = prompt("Tipo....: ")
    const preco = Number(prompt("Preço R$: "))
    vinhos.push({marca, tipo, preco}) // insere os objetos do vinho no vetor
    console.log("Ok! Vinho cadastrado com sucesso")
}

function listarVinhos() {
    titulo("===< Lista de Vinhos Cadastrados >===")
    console.log("Marca............... Tipo................ Preço R$")
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.padStart(8)}`)
    }
}

function pesquisarTipo() {
    titulo("===< Pesquisar por Tipo de Vinho >===")
    const pesq = prompt("Tipo: ")
    let contador = 0
    console.log("Marca............... Tipo................ Preço R$")

    for(const vinho of vinhos) {
        if(vinho.tipo.toUpperCase().includes(pesq.toUpperCase())){
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.padStart(8)}`)
            contador++
        }
    }

    if(contador == 0){
        console.log(`Não há vinhos cadastrados do tipo ${pesq}`)
    }
}

function calcularMedia() {
    titulo("===< Média e Destaques do Cadastro de Vinhos >===")

    const num = vinhos.length
    if(num == 0){
        console.log(`Não há vinhos cadastrados`)
        return
    }

    let media = 0
    for(const vinho of vinhos){
        media += vinho.preco
    }
    media = media / num //soma e divide pelo tamanho, média
    

    const vinhos2 = [...vinhos] //cria cópia para modificar usando Rest(...)
    vinhos2.sort((a, b) => a.preco - b.preco) //ordena para achar o maior e o menor

    const menor = vinhos2[0] //primeiro índice
    const maior = vinhos2[num-1] //tamanho -1 (índice do último)

    console.log(`Preço Médio dos Vinhos: R$${media.toFixed(2)}`)
    console.log(`Menor Valor: R$${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor: R$${maior.preco.toFixed(2)} - ${maior.marca}`)
}