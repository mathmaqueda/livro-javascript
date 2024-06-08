const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    const erros = [] // armazenar os erros encontrados em forma de textox

    if(senha.length < 8 || senha.length > 15 ) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    if(senha.match(/[0-9]/g) == null) { // se é == null ou vazio
        erros.push("possuir números (no mínimo, 1)")
    }

    if(!senha.match(/[a-z]/g)) { // se é falso (mesma coisa que null, vazio)
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1){ // se não tem nenhum ou se só tem 1
        erros.push("possuir letras maiúsculas (no mínimo, 2)")
    }

    if(!senha.match(/[\W|_]/)){ // se não tem nenhum
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    if(erros.length == 0){ // se não tem erros, é válida
        resp.innerText = "Ok! Senha Válida"
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
    }
})


