const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = frm.inTitulo.value; // obtém conteúdo dos campos
    const genero = frm.inGenero.value;

    inserirLinha(titulo, genero); // function que insere filmes na tabela
    gravarFilme(titulo, genero);  // function que grava dados em localStorage

    frm.reset();
    frm.inTitulo.focus();
});

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1); // adiciona uma linha no final da tabela

    const col1 = linha.insertCell(0); // cria colunas na linha inserida
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo; // joga os conteúdos nas respectivas células
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>";
};

const gravarFilme = (titulo, genero) => {
    // se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        // obtém os dados e acrescenta ";" e o titulo/gênero informado
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;
        localStorage.setItem("filmesTitulo", filmesTitulo); // grava dados
        localStorage.setItem("filmesGenero", filmesGenero); // em localStorage
    } else {
        // senão, é a primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitulo", titulo);
        localStorage.setItem("filmesGenero", genero);
    }
};

window.addEventListener("load", () => { // ao carregar a página
    // se houver dados salvos em localStorage
    if (localStorage.getItem("filmesTitulos")) {
        // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        const titulos = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        // percorre os elementos do vetor e os insere na tabela
        for (let i=0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i]);
        }
    }
})

tbFilmes.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui
    if(e.target.classList.contains("exclui")) {
        // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText;

        if(confirm(`Confirma Exclusão do Filme "${titulo}"?`)) {
            // ermove a linha da tabela, correspondente ao símbolo de excluir clicado
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("filmesTitulo"); // exclui filmes salvos no localStorage
            localStorage.removeItem("filmesGenero");

            // salva novamente (se existir, acessando o conteúdo da tabela)
            for (let i=1; i < tbFilmes.rows.length; i++) {
                // obtém o conteúdo da tabela (coluna 0: titulo; coluna 1: genero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                gravarFilme(auxTitulo, auxGenero) // chama gravarFilmes com dados da tabela
            }
        }
    }
})