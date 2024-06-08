const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inFuncionario.value.trim() //recorta em volta, tira espaços (pode ser usado na mesma linha)

    const partes = nome.split(" ") //passando (" ") como parâmetro, separa em palavras a cada ocorrência de espaço

    let email = ""
    const tam = partes.length
    
    for(let i=0; i < tam-1; i++){  // percorre até o PENÚLTIMO, por isso não pode usar forEach()
        email += partes[i].charAt(0) // está percorrendo o vetor, e não as strings dentro de cada [i] do vetor
    }                              // pega primeiro char de cada [i] (palavra) do vetor

    // coloca a última palavra inteira (tamanho do vetor menos um = [i do último])
    email += partes[tam - 1] + "@empresa.com.br"

    // imprime
    resp.innerText = `E-mail: ${email.toLowerCase()}` // EXIBE EM MINÚSCULAS, DETALHE!!!!!!!!!!!
})


