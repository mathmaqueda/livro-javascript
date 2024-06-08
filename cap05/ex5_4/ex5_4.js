const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inValor.value)

    let divisor = 0

    for(let i=num; i>=1; i--) {
        if(num%i == 0) {
            divisor++
        }
    }

    if(divisor == 2) {
        resp.innerText = `${num} é Primo`
    } else {
        resp.innerText = `${num} Não é Primo`   
    }

})