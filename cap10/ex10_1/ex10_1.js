const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value; // obtém o conteúdo digitado

    const h5 = document.createElement("h5");       // cria o elemento HTML H5
    const texto = document.createTextNode(tarefa); // cria um texto
    
    h5.appendChild(texto);     // define que texto será filho de h5
    dvQuadro.appendChild(h5);  // e que h5 será filho de divQuadro

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if(tarefas.length == 0) {
        alert("Não há tarefas para selecionar");
        return;
    }

    let aux = -1;  // Variável auxiliar para indicar linha selecionada

    // Percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i=0; i<tarefas.length; i++) {
        // se tag é da class tarefa-selecionada (está selecionada)
        if(tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal"; // troca para normal
            aux = i; // muda valor da variável auxiliar
            break;   // sai da repetição
        }
    }

    // se a linha selecionada é a última, irá voltar para a primeira
    if(aux == tarefas.length - 1) {
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionada"; // muda estilo da próxima linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    // percorre a lista das tarefas para verificar qual é a selecionada
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {
            aux = i;
        }
    })

    if (aux == -1) { // se não há selecionada
        alert("Selecione uma tarefa para removê-la...");
        return;
    }

    // solicita confirmação (exibindo conteúdo da selecionada)
    if(confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) 
        // remove filho de divQuadro h5, no vetor tarefas na posição aux que foi encontrada e está selecionada
    }
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if(tarefas.length == 0) {
        alert("Não há tarefas para serem salvas");
        return;
    }

    let dados = ""; // irá "acumular" os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" // acumula conteúdo de cada h5 dentro de dados, separando-os por ";"
    })

    // grava os dados em localStorage, removendo o último ";"
    localStorage.setItem("tarefasDia", dados.slice(0, -1)); 
    // "slice" pedaço da var dados, da posição 0 até -1, última de trás pra frente 

    // confere se dados foram armazenados em localStorage
    if(localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas");
    }
})


// dispara função ao carregar a página
window.addEventListener("load", () => {
    // verifica se há tarefas salvas no navegador do usuário
    if(localStorage.getItem("tarefasDia")) {
        //cria um vetor com a lista de tarefas (separadas pelo split(";"))
        const dados = localStorage.getItem("tarefasDia").split(";");

        dados.forEach(dado => { // dispõe as tarefas recuperadas
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(dado);
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
        })
    }
})