const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value) //valor da vacina
    //possui ou não, retorna 0 ou 1
    const possuiConvenio = Number(document.querySelector("input[name='possuiConvenio']:checked").value)
    let convenio
    if(possuiConvenio){ // se possui convenio...
        convenio = frm.inConvenio.value //retorna qual está selecionado
    } else {
        convenio = 0
    }

    const desconto = calcularDesconto(valor, convenio)

    resp1.innerText = `Desconto: R$${desconto}`
    resp2.innerText = `A Pagar: R$${valor - desconto}`

})

frm.rbSim.addEventListener("click", () => {
    frm.inConvenio.className = "exibe"
})

frm.rbNao.addEventListener("click", () => {
    frm.inConvenio.className = "oculta"
})

function calcularDesconto(valor, convenio) {
    const desconto = convenio == "saude" ? (valor*0.5) : convenio == "amigos" ? (valor*0.2) : (valor*0.1)
    return desconto
}


