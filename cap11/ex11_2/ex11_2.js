const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240; // constante com o número de poltronas do teatro
const reservadas = []; // vetor com as poltronas reservadas pelo cliente

window.addEventListener("load", () => {
    // operador ternário: se houver dados salvos em localStorage, faz um split(";") e
    // atribui esses dados ao array, caso contrário, o array é inicializado vazio
    const ocupadas = localStorage.getItem("teatroOcupadas") 
        ? localStorage.getItem("teatroOcupadas").split(";") 
        : [];
        // detalhe que o operador ternário pode ser quebrado em várias linhas separando-as pelos operadores

    // repetição para montar o nº total de poltronas (definida na constante)
    for(let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");

        // se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString())
            ? "../img/ocupada.jpg"
            : "../img/disponivel.jpg";
        imgStatus.className = "poltrona"; // classe com dimensão da img
        const figureCap = document.createElement("figcaption");

        // quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        const num = document.createTextNode(`[${zeros}${i}]`); // cria texto

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        // se i módulo 24 == 12 (é corredor: define margem direita 60px)
        if (i % 24 == 12) figure.style.marginRight = "60px";

        dvPalco.appendChild(figure);

        // se i módulo 24 == 0: o comando após && será executado (insere quebra de linha)
        (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));
    }
});

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const poltrona = Number(frm.inPoltrona.value);

    // valida o preenchimento do campo de enrada, não pode ser maior que a const
    if (poltrona > POLTRONAS) {
        alert("Informe um número de poltrona válido");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")
        ? localStorage.getItem("teatroOcupadas").split(";")
        : [];

    // se poltrona escolhida já está ocupada (existe em localSotage)
    if(ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona} já está ocupada`);
        frm.inPoltrona.value = "";
        frm.inPoltrona.focus();
        return;
    }

    // captura imagem da poltrona, fiha de divPalco. É -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1];

    imgPoltrona.src = "../img/reservada.jpg"; // modifica atributo da imagem

    reservadas.push(poltrona);

    frm.inPoltrona.value = "";
    frm.inPoltrona.focus();
});

frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length == 0) {
        alert("Não há poltronas reservadas");
        frm.inPoltrona.focus();
        return;
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")
        ? localStorage.getItem("teatroOcupadas").split(";")
        : [];
    
    // for decrescente, pois as reservas vão sendo removidas a cada alteração da imagem
    for (let i = reservadas.length - 1; i >= 0; i--) {
        ocupadas.push(reservadas[i]);

        // captura imagem da poltrona, filha de divPalco; É -1 pois começa em 0
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1];

        imgPoltrona.src = "../img/ocupada.jpg"; // modifica atributo da imagem

        reservadas.pop();
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"));
});