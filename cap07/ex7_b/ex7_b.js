const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value.toLowerCase()
    const frase2 = frase.replace(/ /g, "")
    const tam = frase2.length
    let reverso = ""

    for (let i = tam - 1; i >= 0; i--) {
        reverso += frase2.charAt(i)
    }

    if (frase2 == reverso) {
        resp.innerText = `${frase.toUpperCase()} é um Palíndromo`
    } else {
        resp.innerText = `${frase.toUpperCase()} não é um Palíndromo`
    }
})


