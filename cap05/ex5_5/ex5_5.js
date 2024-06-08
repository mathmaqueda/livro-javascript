const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inValor.value)
    let resultado = ""
    
    for(let i=1; i<=num; i++){
        if(i % 2 == 0){
            resultado = resultado + "-"
        } else {
            resultado = resultado + "*"
        }
    }

    resp.innerText = resultado

})