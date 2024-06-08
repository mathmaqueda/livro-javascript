const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const times = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const time = frm.inTime.value

    times.push(time)

    frm.inTime.value = ""
    frm.inTime.focus()
    // DISPARA UM EVENTO NO BOTÃO LISTAR
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(times.length == 0){
        alert("Não há times na lista")
        return
    }
    const lista = times.reduce((acumulador, time) => acumulador + " - " + time + "\n", "")
    resp.innerText = lista
})

frm.btTabela.addEventListener("click", () => {
    if(times.length == 0){
        alert("Não há times na lista")
    } else if (times.length % 2 != 0){
        alert("O número de times deve ser par")
    } else {
        const metade = times.slice(0, times.length/2)
        const outraMetade = (times.slice(times.length/2, times.length)).reverse()
        let tabela = ""
        metade.forEach((time, i) => {
            tabela += `${time} x ${outraMetade[i]}\n`
        })

        resp.innerText = tabela
    }
})