const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const mensagem = frm.inMensagem.value

    let impares = ""
    let pares = ""

    for (let i = 0; i < mensagem.length; i++) {
        if (i % 2 == 0) {
            pares += mensagem[i]
        } else {
            impares += mensagem[i]
        }
    }

    resp.innerText = `${pares}${impares}`

})


