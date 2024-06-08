const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const candidatos = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)

    candidatos.push({nome, acertos})

    frm.btListar.dispatchEvent(new Event("click"))

    frm.reset()
    frm.inCandidato.focus()
})

frm.btListar.addEventListener("click", () => {
    if(candidatos.length == 0){
        alert("Não há candidatos na lista")
        frm.inCandidato.focus()
        return
    }
    let lista = ""
    for(const candidato of candidatos){
        const {nome, acertos} = candidato
        lista += `${nome} - ${acertos} acertos\n`
    }
    resp.innerText = lista
    frm.inCandidato.value = ""
    frm.inCandidato.focus()
})

frm.bt2Etapa.addEventListener("click", () => {
    const numAcertos = Number(prompt("Número de Acertos para Aprovação?"))
    if(numAcertos < 0 || isNaN(numAcertos)){
        alert("Insira um número válido. (maior ou igual a 0)")
        frm.inCandidato.focus()
        return
    }
    const aprovados = candidatos.filter(candidato => candidato.acertos >= numAcertos)
    if(aprovados.length == 0){
        resp.innerText = "Nenhum candidato foi aprovado"
    } else {
        aprovados.sort((a, b) => a.acertos - b.acertos)
        let lista = ""
        for(const candidato of aprovados.reverse()){
            const {nome, acertos} = candidato
            lista += `${nome} - ${acertos} acertos\n`
        }
        resp.innerText = lista
    }
})


