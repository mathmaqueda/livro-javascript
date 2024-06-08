const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNum.value)

    resp.innerText = (numero % 2 == 0) ? `${numero} é Par` : `${numero} é Ímpar`

})