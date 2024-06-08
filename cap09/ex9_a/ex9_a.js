const frm = document.querySelector("form")
const imgClube = document.querySelector("#imgClube") // pega variável da imagem
const dvTitulo = document.querySelector("#divTitulo")// e do título para modificar as coisas
const outResp = document.querySelector("#outResp");

//dessa vez não terá cálculos

const trocarClube = () => { //funcao que armazena em variável para trocar os clubes
    let clube // variável que recebe o nome do clube

    if(frm.rbBrasil.checked) {
        clube = "Brasil"
    } else if(frm.rbPelotas.checked) {
        clube = "Pelotas"
    } else {
        clube = "Farroupilha"
    }

    //define as classes de dvTitulo: row e cores do clube
    dvTitulo.className = `row cores-${clube}`

    //modifica a imagem de acordo com a seleção do cliente
    imgClube.src = `img/${clube.toLowerCase()}.png`
    imgClube.className = "img-fluid"
    imgClube.alt = `Símbolo do ${clube}`

    localStorage.setItem("clube", clube) // salva no navegador a escolha do cliente
}

//associa ao evento change de cada botão do form a função trocarClube
frm.rbBrasil.addEventListener("change", trocarClube)
frm.rbPelotas.addEventListener("change", trocarClube)
frm.rbFarroupilha.addEventListener("change", trocarClube)

const verificarClube = () => {
    if(localStorage.getItem("clube")) { // se ja tiver um clube registrado
        const clube = localStorage.getItem("clube") //pega seu nome

        if(clube == "Brasil") {
            frm.rbBrasil.checked = true
        } else if(clube == "Pelotas") {
            frm.rbPelotas.checked = true
        } else {
            frm.rbPelotas.checked = true
        }
        trocarClube() //chama function que troca imagem de cores.
    }
    if(!localStorage.getItem("visita")) {
        localStorage.setItem("visita", 0);
        outResp.innerText = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
    } else {
        let visita = Number(localStorage.getItem("visita")) + 1;
        localStorage.setItem("visita", visita);
        outResp.innerText = "Que bom que você voltou! Esta é a sua visita de número " + visita + " ao nosso site.";
    }
}

//ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)