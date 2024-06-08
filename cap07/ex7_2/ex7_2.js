const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value.toUpperCase()
    let resposta = ""

    for(const letra of fruta) {
        if(letra == fruta.charAt(0)){    // se a letra for igual a inicial
            resposta+= fruta.charAt(0)   // a resposta recebe a letra
        } else {
            resposta += "_"              // senão coloca underline
        }
    }

    resp.innerText = resposta
    frm.inFruta.value = "*".repeat(fruta.length) // preenche com "*", conforme tamanho
})


