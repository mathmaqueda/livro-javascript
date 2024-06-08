const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

frm.addEventListener("submit", (e) => {
  
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 0.5
    const soma = preco * 2 + promocao

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${soma}`
    resp2.innerText = `O 3º produto custa apenas R$ ${promocao}`

    e.preventDefault()     
})