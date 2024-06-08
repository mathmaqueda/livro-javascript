const frm = document.querySelector("form")
const imgClube = document.querySelector("#imgClube") // pega variável da imagem
const dvTitulo = document.querySelector("#divTitulo")// e do título para modificar as coisas

const inRadios = document.querySelectorAll("input");

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

const trocarClube = () => { //funcao que armazena em variável para trocar os clubes
    const clubes = ["Brasil", "Pelotas", "Farroupilha"];

    let selecao;
    // verifica qual radio está selecionado
    for(let i=0; i< inRadios.length; i++) {
        if(inRadios[i].checked) {
            selecao = i;
            break;
        }
    }

    if(selecao <= 2) { // se selecao <= 2, então torce por algum clube
        //define as classes de dvTitulo: row e cores do clube
        dvTitulo.className = `row cores-${clubes[selecao]}`

        //modifica a imagem de acordo com a seleção do cliente
        imgClube.src = `img/${clube.toLowerCase()}.png`
        imgClube.className = "img-fluid"
        imgClube.alt = `Símbolo do ${clubes[selecao]}`

        localStorage.setItem("clube", clubes[selecao]) // salva no navegador a escolha do cliente
    } else {
        dvTitulo.className = "row";
        imgClube.className = "d-none";
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }

    
}

const verificarClube = () => {
    if(localStorage.getItem("clube")) { // se ja tiver um clube registrado
        const clube = localStorage.getItem("clube") //pega seu nome

        if(clube == "Brasil") {
            inRadios[0].checked = true
        } else if(clube == "Pelotas") {
            inRadios[1].checked = true
        } else {
            inRadios[2].checked = true
        }
        trocarClube() //chama function que troca imagem de cores.
    }
}

//ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube)