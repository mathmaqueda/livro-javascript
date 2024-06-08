const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim()

    if(validarNome(nome)){
        const sobrenome = obterSobrenome(nome).toLowerCase()
        const vogais = contarVogais(nome)
        resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`
    }

})

function validarNome(nome) {
    let espacos = 0
    for(const letra of nome) {
        if(letra == " "){
            espacos++
        }
    }
    if(espacos == 0){
        alert("Informe o nome completo")
        return false
    } else {
        return true
    }
}

function obterSobrenome(nome){
    const ultEspaco = nome.lastIndexOf(" ")
    const sobrenome = nome.substr((ultEspaco+1))
    return sobrenome
}

function contarVogais(nome) {
    let vogais = 0
    for(const letra of nome){
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
            vogais++
        }
    }
    const vogais2 = vogais.toString()
    return vogais2.padStart(2, "0")
}


