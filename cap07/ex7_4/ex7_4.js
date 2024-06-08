const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inFuncionario.value
    nome.trim() // retira espaços em volta digitados

    if(!nome.includes(" ")){ // se não inclui espaço
        alert("Informe o nome completo...")
        return //interrompe pois não tem espaço e precisa do nome completo
    }

    const priEspaco = nome.indexOf(" ") // pega índice da primeira ocorrência de espaço
    const ultEspaco = nome.lastIndexOf(" ") // pega índice da última ocorrência de espaço

    // pega do 0 até o primeiro espaço (primeiro nome) e do ultimo espaço até o final (último sobrenome)
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco) 

    // com a variável do crachá pronta, só imprimir:
    resp.innerText = `Crachá: ${cracha}`

})


