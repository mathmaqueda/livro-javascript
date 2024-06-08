const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    // chama function que verifica se peso já foi apostado
    if(verApostaExiste(peso)) {
        alert("Alguém já apostou este peso, informe outro...");
        frm.inPeso.focus();
        return
    }

    if(localStorage.getItem("melanciaNome")) {
        // obtém o conteúdo já salvo e acrescenda ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome);
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();
    frm.reset();
    frm.inNome.focus();
})

const verApostaExiste = (peso) => {
    if(localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";");
        // obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        // o peso deve ser convertido em string, pois o vetor contém strings.
        return pesos.includes(peso.toString());
    } else {
        return false;
    }
}

const mostrarApostas = () => {
    if(!localStorage.getItem("melanciaNome")) {
        //limpa o espaço de exibição das apostas
        respLista.innerText = "";
        return;
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    // percorre todos elementos do vetor
    for (let i=0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "gr \n";
    }

    respLista.innerText = linhas;
}

window.addEventListener("load", mostrarApostas);

frm.btVencedor.addEventListener("click", () => {
    if(!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        return;
    }

    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));
    if(pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }

    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");

    let vencedorNome = nomes[0];
    let vencedorPeso = pesos[0];

    for (let i=1; i<nomes.length; i++) {
        // calcula a diferença de peso do "vencedor" e da ersposta atual;
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto); // diferença do "vencedor" atual
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto); // diferença da aposta atual
        if(difAposta < difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += "\n-----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "gr";
    alert(mensagem);
})

frm.btLimpar.addEventListener("click", () => {
    if(confirm("Confirma exclusão de todas as apostas?")) {
        localStorage.clear();
        mostrarApostas();
    }
})