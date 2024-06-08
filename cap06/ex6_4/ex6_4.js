const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome, idade})

    frm.inNome.value = ""
    frm.inIdade.value = ""
    frm.inNome.focus()
    // DISPARA UM EVENTO NO BOTÃO LISTAR TODOS
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return
    }
    const lista = criancas.reduce((acumulador, crianca) => 
        acumulador + crianca.nome + " - " + crianca.idade + " ano(s)\n", "")
    resp.innerText = lista 
})

frm.btResumir.addEventListener("click", () => {
    if(criancas.length == 0){
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas]
    copia.sort((a, b) => a.idade - b.idade)  // ordena através da idade
    let resumo = ""  //inicializa variável do resultado
    let aux = copia[0].idade // menor idade
    let nomes = [] // servirá para inserir os nomes de cada idade
    for(const crianca of copia){
        const {nome, idade} = crianca
        if(idade == aux){    // se idade da criança atual é igual a idade auxiliar...
            nomes.push(nome) // insere o nome na lista de nomes
        } else { // senão, monsta o resumo para cada idade

            resumo += aux + " ano(s): " + nomes.length + " criança(s) - " // mostra número de crianças (tamanho do vetor nomes) com tal idade (aux)

            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n" // Calcula porcentagem (tamanho do vetor nomes dividido pelo total de nomes multiplicado por 100)

            resumo += "(" + nomes.join(", ") + ")\n\n" // Mostra os nomes que estão no vetor entre parenteses.

            aux = idade // obtém nova idade na ordem
            nomes = []  // limpa vetor dos nomes
            nomes.push(nome)  //adiciona o primeiro da nova idade
        }
    }
    // adiciona a última criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - " // mostra número de crianças (tamanho do vetor nomes) com tal idade (aux)

    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n" // Calcula porcentagem (tamanho do vetor nomes dividido pelo total de nomes multiplicado por 100)

    resumo += "(" + nomes.join(", ") + ")\n\n" // Mostra os nomes que estão no vetor entre parenteses.

    resp.innerText = resumo //exibe a resposta
})