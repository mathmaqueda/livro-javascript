const frm = document.querySelector("form");
const dvVelas = document.querySelector("#divVelas");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const idade = frm.inIdade.value; // obtém conteúdo do campo (em String)

    const numeros = idade.split(""); // divide idade por numeros

    numeros.forEach(numero => {
        const novaVela = document.createElement("img");
        novaVela.textAlt = `Número ${numero}`;
        novaVela.src = `img/${numero}.jpg`;
        dvVelas.appendChild(novaVela);
    })

    frm.querySelector("input.btn-primary").disabled = true;
});

frm.addEventListener("reset", () => {
    window.location.reload();
})