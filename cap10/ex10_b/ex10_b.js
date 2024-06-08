const frm = document.querySelector("form");
const dvNomes = document.querySelector("#divNomes");

frm.addEventListener("submit", (e) => {
    e.preventDefault();


    // verifica e remove nomes que já estão na tela
    if(document.querySelectorAll("h3")) {
        const partesNome = document.querySelectorAll("h3");
        partesNome.forEach(nome => {
            dvNomes.removeChild(nome);
        })
    }

    const nome = frm.inNome.value; // obtém conteúdo do campo
    const partesNome = nome.split(" "); // separa partes do nome (pelo espaço)

    partesNome.forEach(nome => {
        // cria elementos
        const textoNome = document.createTextNode(nome);
        const elementoh3 = document.createElement("h3");

        // gera numero aleatório para a cor na classe e associa ao elemento h3
        const numAleatorio = Math.ceil(Math.random() * 6);
        let cor = "";
        switch (numAleatorio) {
            case 1:
                cor = "primary";
                break;
            case 2:
                cor = "secondary";
                break;
            case 3:
                cor = "danger";
                break;
            case 4:
                cor = "warning";
                break;
            case 5:
                cor = "info";
                break;
            case 6:
                cor = "dark";
                break;
        }
        elementoh3.className = `text-${cor}`

        // associa relação pai-filho dos elementos
        elementoh3.appendChild(textoNome);
        dvNomes.appendChild(elementoh3);
    })

});