const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    const tracos = retornarTracos(nome)
    const categoria = categorizarAluno(idade)

    resposta = nome + "\n" + tracos + "\nCategoria: " + categoria

    resp.innerText = resposta

})



function retornarTracos(nome) {
    let tracos = ""
    for(const letra of nome){
        if(letra == " "){
            tracos += " "
        } else {
            tracos += "-"
        }
    }
    return tracos
}

function categorizarAluno(idade) {
    let categoria
    if(idade <= 12){
        categoria = "Infantil"
    } else if(idade <= 18) {
        categoria = "Juvenil"
    } else {
        categoria = "Adulto"
    }
    return categoria
}


