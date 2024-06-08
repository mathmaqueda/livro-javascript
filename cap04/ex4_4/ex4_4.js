const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$10, R$50, R$100)")
        frm.inSaque.focus()
        return
    }
    const notas100 = Math.floor(saque / 100)
    let sobra = saque % 100
    const notas50 = Math.floor((sobra) / 50)
    sobra = sobra % 50
    const notas10 = Math.floor((sobra) / 10)

    resp1.innerText = `Notas de R$100: ${notas100}`
    resp2.innerText = `Notas de R$50: ${notas50}`
    resp3.innerText = `Notas de R$10: ${notas10}`

})