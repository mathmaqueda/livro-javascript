const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const chinchilas = Number(frm.inChinchilas.value)
    const anos = Number(frm.inAnos.value)

    let resultado = `1° ano: ${chinchilas} Chinchilas\n`

    let chin3 = chinchilas

    for(let i=2; i<=anos; i++){
        chin3 *= 3
        resultado += `${i}° ano: ${chin3} Chinchilas\n`
    }

    resp.innerText = resultado

})