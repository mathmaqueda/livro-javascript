const frm = document.querySelector("form")
const resp1 = document.querySelector("#outErros")
const resp2 = document.querySelector("#outChances")
const resp3 = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random()*100) + 1 //num aleatório entre 1 e 100
const CHANCES = 6

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        resp3.innerText = `Parabéns!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // desativa o botão apostar
        frm.btNovo.className = "exibe"
    } else {
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero)
            const numErros = erros.length // Cria variável de número de erros com base no tamanho do vetor erros
            const numChances = CHANCES - numErros // Cria variável de chances que se subtrai do número de erros ao invés de subtrair o número de chances a cada erro
            resp1.innerText = `${numErros} (${erros.join(", ")})` // erros.join(", ") apresenta os elementos do vetor separados por ", ". Lembrar
            resp2.innerText = numChances

            if(numChances == 0){ // após a inserção do número errado, verifica se as chances acabaram
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true // desativa o botão apostar
                frm.btNovo.className = "exibe"
                resp3.innerText = `Game Over !! Número Sorteado: ${sorteado}`
            } else { // se as chances não acabaram, modifica a dica para outra chance
                const dica = numero < sorteado ? "maior" : "menor" // se o sorteado for maior, senão menor
                resp3.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = "" //limpa campo de entrada
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", () => {
    location.reload() //RECARREGA A PÁGINA
})