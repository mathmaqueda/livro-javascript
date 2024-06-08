const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("#mostraPalavras");

const montarTabela = () => {
    // se houver dados salvos em localStorage
    if (localStorage.getItem("jogoPalavra")) {
        const palavras = localStorage.getItem("jogoPalavra").split(";");
        const dicas = localStorage.getItem("jogoDica").split(";");

        // percorre elementos do vetor e os insere na tabela
        for (let i=0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1); // insere lina no final

            const col1 = linha.insertCell(0);
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i];
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

// quando o checkbox é alterado, exibe a lista
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui
    if(e.target.classList.contains("exclui")) {
        // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if(confirm(`Confirma Exclusão da Palavra: "${palavra}"?`)) {
            // remove linha da tabela
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("jogoPalavra");
            localStorage.removeItem("jogoDica");

            // cria novas variáveis para salvar no localStorage
            const palavras = [];
            const dicas = [];

            // obtém os dados da tabela, acrescentando-os aos vetores
            for (let i=1; i<tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // salva o conteúdo dos vetores em localStorage
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});