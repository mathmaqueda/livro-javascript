const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNum.value)

    for(let i=1; i<=num; i++){
        if(i==num){
            resp.innerText += `${fruta}`
        } else { 
            resp.innerText += `${fruta} * `
        }
    }

})