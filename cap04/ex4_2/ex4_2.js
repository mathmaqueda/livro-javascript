const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const horaB = Number(frm.inHora.value)

    let horaF = horaB + 5

    if (horaF > 24) {
        horaF -= 24
    }

    resp.innerText = `Hora na França: ${horaF.toFixed(2)}`

})