const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let produto
    if(frm.rbPizza.checked){
        const num = frm.inPizza.selectedIndex //pega o índice do item selecionado para...
        produto = frm.inPizza.options[num].text //pegar o respectivo texto para exibir na lista
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }
    const detalhes = frm.inDetalhes.value
    itens.push(produto + " (" + detalhes + ")")
    resp.innerText = itens.join("\n")

    frm.reset() // limpa o form
    frm.rbPizza.dispatchEvent(new Event("click")) // dispara click em rbPizza para recomeçar o form

})

frm.rbPizza.addEventListener("click", () => { // ao clicar em pizza oculta bebida e mostra pizza
    frm.inPizza.className = "exibe"
    frm.inBebida.className = "oculta"
})

frm.rbBebida.addEventListener("click", () => { // ao clicar em bebida oculta pizza e mostra bebida
    frm.inPizza.className = "oculta"
    frm.inBebida.className = "exibe"
})

frm.inDetalhes.addEventListener("focus", () => { // quando campo detalhes entra em foco
    if(frm.rbPizza.checked){
        const pizza = frm.inPizza.value //obtém o valor da pizza selecionado

        // operador ternário que decide o número de sabores com base no tamanho
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4

        //atributo placeholder recebe o número de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => { // quando detalhes sai de foco...
    frm.inDetalhes.placeholder = "" // limpa campos do placeholder
})


