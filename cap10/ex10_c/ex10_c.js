const frm = document.querySelector("form");
const dvClubes = document.querySelector("#divClubes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const clube = frm.inClube.value; // obtém conteúdo do campo

    const textoClube = document.createTextNode(clube);
    const h5 = document.createElement("h5");
    h5.className = "alinha-direita";
    h5.appendChild(textoClube);
    dvClubes.appendChild(h5);

    // reinicia form para inserir outro dado
    frm.inClube.value = "";
    frm.inClube.focus();
});

frm.btMontarJogo.addEventListener("click", () => {
    const clubes = document.querySelectorAll("h5");

    // verifica se é impar o número de clubes
    if(clubes.length%2 != 0 || clubes.length == 0) {
        alert("O número de times deve ser par para montar o jogo!");
        return;
    }

    // cria título
    const h3 = document.createElement("h3");
    h3.innerText = "Tabela de Jogos";
    dvClubes.appendChild(h3);

    // cria tabela
    const tabela = document.createElement("table");
    tabela.className = "table table-striped";
    dvClubes.appendChild(tabela);

    /* Tentativa
    // inicia loop nos clubes
    clubes.forEach((clube, i) => {
        // cria coluna e insere texto do clube nela
        const coluna = document.createElement("td");
        const textoClube = document.createTextNode(clube.innerText);
        coluna.appendChild(textoClube);
        
        // verifica se ja passou dois times para criar nova linha
        if(i%2 == 0) {
            const linha = document.createElement("tr");
            tabela.appendChild(linha);
        }
        const linhaAtual = tabela.lastChild
        linhaAtual.appendChild(coluna);
    })
    */

    // Resposta
    let linha;
    clubes.forEach((clube, i) => {
        if(i%2 == 0) {
            linha = tabela.insertRow(-1);
            const col1 = linha.insertCell(0);
            col1.textContent = clube.innerText;
        } else {
            const col2 = linha.insertCell(1);
            col2.textContent = clube.innerText
        }
    })

    // desabilita os botões
    frm.btMontarJogo.disabled = true;
    frm.querySelector(".btn-primary").disabled = true;
})

frm.addEventListener("reset", () => {
    window.location.reload();
})