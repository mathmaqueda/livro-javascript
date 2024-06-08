const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const valor15min = Number(frm.inValor.value)
    const t_uso = Number(frm.inMin.value)

    const n15 = Math.ceil(t_uso / 15)
    const valor = n15 * valor15min

    resp.innerText = `Valor a Pagar: R$ ${valor}`

    e.preventDefault()
})