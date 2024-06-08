const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)

    let troco
    if (valor <= 1.75) {
        troco = valor - 1
        resp1.innerText = `Tempo: 30min`
        resp2.innerText = `Troco: R$${troco}`
    } else if (valor <= 3) {
        troco = valor - 1.75
        resp1.innerText = `Tempo: 60min`
        resp2.innerText = `Troco: R$${troco}`
    } else {
        troco = valor - 3
        resp1.innerText = `Tempo: 120min`
        resp2.innerText = `Troco: R$${troco}`
    }

})