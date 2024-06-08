const frm = document.querySelector("form")

const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33/100

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencimento = new Date()

    const partes = dataVenc.split("-") // data vem no formato aaaa-mm-dd
    vencimento.setDate(Number(partes[2]))      // [2] dd
    vencimento.setMonth(Number(partes[1]) - 1) // [1] mm
    vencimento.setFullYear(Number(partes[0]))  // [0] aaaa
    
    const atraso = hoje - vencimento // calcula a diferença de dias entre datas (em ms)
    let multa = 0
    let juros = 0

    if(atraso > 0){
        //converte ms do atraso em dias
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})


