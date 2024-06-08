const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

window.addEventListener("load", () => {
    // gera números aleatórios, entre 1 e 5 para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    // define texto alternativo para acessibilidade
    const alt1_00 = "Moedas de um real";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    // chama o método criarMoedas passando os argumentos
    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    // cria laço de repetição para inserir várias imagens de moedas na página
    for (let i=1; i <= num; i++) {
        const novaMoeda = document.createElement("img");
        novaMoeda.src = "img/" + moeda;
        novaMoeda.textAlt = textoAlt;
        novaMoeda.className = classe;
        dvMoedas.appendChild(novaMoeda);
    }
    const br = document.createElement("br"); // cria uma quebra de linha
    dvMoedas.appendChild(br);
}



frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const soma = Number(frm.inSoma.value);
    const moedas = dvMoedas.querySelectorAll("img");
    let totalMoedas = 0;

    // percorre as tags img (em moedas) e verifica propriedade className
    for (const moeda of moedas) {
        if(moeda.className == "moeda1-00") {
            totalMoedas += 1; // acumula 1 (para moedas de 1)
        } else if(moeda.className == "moeda0-50") {
            totalMoedas += 0.5; // acumula 0.50 (para moedas de 0.50)
        } else if(moeda.className == "moeda0-25") {
            totalMoedas += 0.25; // acumula 0.25 (para moedas de 0.25)
        } else {
            totalMoedas += 0.1; // acumula 0.1 (para moedas de 0.10)
        }
    }

    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    let mensagem = "";
    // verifica se o valor informado é igual ao total de Moedas exibido
    if (soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success"; // define a classe da div
        mensagem = "Parabéns!! Você acertou!"; // e mensagem a ser exibida
    } else {
        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`;
    }
    const texto = document.createTextNode(mensagem); // cria elemento de texto
    h3.appendChild(texto);
    div.appendChild(h3);
    dvMoedas.appendChild(div);

    frm.querySelector("input.btn-primary").disabled = true; // desabilita botão (resposta já foi exibida)
})

frm.addEventListener("reset", () => {
    window.location.reload();
})