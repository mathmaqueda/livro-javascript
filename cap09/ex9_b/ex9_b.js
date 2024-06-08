const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = frm.inProduto.value;

    if(localStorage.getItem("produto")) {
        let produtos = localStorage.getItem("produto") + ";" + produto;
        localStorage.setItem("produto", produtos);
    } else {
        localStorage.setItem("produto", produto);
    }

    mostrarProdutos();
    frm.reset();
    frm.inNome.focus();
})

const mostrarProdutos = () => {
    if(!localStorage.getItem("produto")) {
        respLista.innerText = "";
        return;
    }
    const produtos = localStorage.getItem("produto").split(";");
    let linhas = "Produtos Adicionados\n" + "-".repeat(20) + "\n";
    for(let i=0; i<produtos.length; i++) {
        linhas += produtos[i] + "\n";
    }
    respLista.innerText = linhas
}

window.addEventListener("load", mostrarProdutos);

btLimpar.addEventListener("click", () => {
    const esvazia = confirm("Deseja esvaziar a lista?");
    if(esvazia) {
        localStorage.clear();
        mostrarProdutos();
    }
})