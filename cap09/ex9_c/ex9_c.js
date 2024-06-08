const frm = document.querySelector("form");
const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const servico = frm.inServico.value;

    if(localStorage.getItem("servicos")) {
        let servicos = localStorage.getItem("servicos") + ";" + servico;
        localStorage.setItem("servicos", servicos);
    } else {
        localStorage.setItem("servicos", servico);
    }

    mostrarServicos();
    frm.reset();
    frm.inServico.focus();
})

const mostrarServicos = () => {
    if(!localStorage.getItem("servicos")) {
        outResp1.innerText = "";
        return;
    }
    const servicos = localStorage.getItem("servicos").split(";");
    let linhas = "Servicos Pendentes:\n" + "-".repeat(50) + "\n";
    for(let i=0; i<servicos.length; i++) {
        linhas += servicos[i] + "\n";
    }
    outResp1.innerText = linhas;
    
}

window.addEventListener("load", mostrarServicos);

btExecutar.addEventListener("click", () => {
    if(!localStorage.getItem("servicos")){
        alert("Não há serviços pendentes!");
        return
    }
    
    let servicos = localStorage.getItem("servicos").split(";");
    servicoAtendido = servicos.shift();

    outResp2.innerText = servicoAtendido;
    localStorage.setItem("servicos", servicos.join(";"));
    
    mostrarServicos();
    frm.reset();
    frm.inServico.focus();
})