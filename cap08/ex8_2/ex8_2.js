const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano) //chama função
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = preco - entrada / 10

    resp1.innerText = `${modelo} - ${classificacao}`
    resp2.innerText = `Entrada: R$${entrada.toFixed(2)}`
    resp3.innerText = `+10x de: R$${parcela.toFixed(2)}`

})

const classificarVeiculo = (ano) => { // declara função em variável
    const anoAtual = new Date().getFullYear // obtém somente o ano atual
    let classe
    if (ano == anoAtual) {
        classe = "Novo"
    } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
        classe = "Seminovo"
    } else {
        classe = "Usado"
    }
    return classe
}

const calcularEntrada = (preco, classe) => classe == "novo" ? preco * 0.5 : preco * 0.3


