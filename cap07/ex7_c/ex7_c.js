const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value
    const valor = Number(frm.inValor.value)

    const dataInfr = new Date()
    let dataLimite = new Date()
    const partes = data.split("-")
    dataInfr.setDate(Number(partes[2]))
    dataInfr.setMonth(Number(partes[1]))
    dataInfr.setFullYear(Number(partes[0]))

    dataLimite = dataInfr
    dataLimite.setDate(dataInfr.getDate() + 90)

    const dia = dataLimite.getDate()
    const mes = dataLimite.getMonth()
    const ano = dataLimite.getFullYear()
    const dia2 = dia.toString().padStart(2, "0")
    const mes2 = mes.toString().padStart(2, "0")

    resp1.innerText = `Data Limite para Pagto com Desconto: ${dia2}/${mes2}/${ano}`
    resp2.innerText = `Valor com Descontro: R$${valor - (valor * (20 / 100))}`
})


