const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    resp1.innerText = ""
    resp2.innerText = " "
    
    const num = Number(frm.inNum.value)

    let resposta = `Divisores do ${num}: `

    let divisores = 0
    let somaDivisores = 0

    for(let i=0; i<=num/2; i++){
        if(num%i == 0){
            divisores = i
            somaDivisores += divisores
            if(i == num/2){
                resposta += `${i}`
            } else {
                resposta += `${i}, `
            }
        }
    }

    resp1.innerText = resposta + ` (Soma: ${somaDivisores})`

    if(somaDivisores == num){
        resp2.innerText = `${num} É um Número Perfeito`
    }

})