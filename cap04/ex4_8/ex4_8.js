const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const ladoA = Number(frm.inA.value)
    const ladoB = Number(frm.inB.value)
    const ladoC = Number(frm.inC.value)

    if (ladoA <= ladoB+ladoC && ladoB <= ladoA+ladoC && ladoC <= ladoA+ladoB) {
        resp1.innerText = `Os lados podem formar um triângulo`
    }
    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
        resp2.innerText = `Tipo: Equilátero`
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        resp2.innerText = `Tipo: Escaleno`
    } else {
        resp2.innerText = `Tipo: Isóceles`
    }

})