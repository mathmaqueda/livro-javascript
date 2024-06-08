const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const numeros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)

    if(numeros.includes(num)){
        alert("Este número ja existe na lista")
    } else {
        numeros.push(num)
        let resultado = "Números: "
        resultado += numeros.join(", ")
        resp1.innerText = resultado
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})

frm.btOrdem.addEventListener("click", () => {
    if(numeros.length == 0){
        alert("Não há números na lista")
        frm.inNum.focus()
    }
    let ordenado = 1
    numeros.forEach((num, i) => {
        if(num > numeros[i+1]){
            ordenado = 0
        }
    })
    if(ordenado == 0){
        resp2.innerText = `Atenção... Números não estão em ordem crescente`
        frm.btOrdenar.className = "exibir"
    } else {
        resp2.innerText = `Os números estão em ordem crescente`
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})

frm.btOrdenar.addEventListener("click", () => {
    numeros.sort((a, b) => a-b)
    let resultado = "Números: "
    resultado += numeros.join(", ")
    resp1.innerText = resultado
    resp2.innerText = `Os números estão em ordem crescente`
})



